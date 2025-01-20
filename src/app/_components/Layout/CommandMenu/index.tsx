/* eslint-disable react-hooks/exhaustive-deps */
import { Command } from 'cmdk';
import Fuse from 'fuse.js';
import * as Hangul from 'hangul-js';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, ReactElement, useEffect, useState } from 'react';

import { allProjects, allArticles, type Article, type Project } from 'contentlayer/generated';

import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/dialog';

import * as styles from './styles.css';

type normalizedType = {
  type: 'Article' | 'Project';
  _normalizedTitle: string;
  _normalizedDescription: string;
};

type ContentType = (Article & normalizedType) | (Project & normalizedType);

const MODAL_CLOSED_MS: number = 200;

const CommandMenu: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [groupedResults, setgroupedResults] = useState<{ [key: string]: ContentType[] }>({});

  const allContent: ContentType[] = [
    ...allProjects.map(
      (item) =>
        ({
          ...item,
          type: 'Project',
          _normalizedTitle: Hangul.d(item.title).join(''),
          _normalizedDescription: Hangul.d(item.description || '').join(''),
        }) as ContentType,
    ),
    ...allArticles.map(
      (item) =>
        ({
          ...item,
          type: 'Article',
          _normalizedTitle: Hangul.d(item.title).join(''),
          _normalizedDescription: Hangul.d(item.description || '').join(''),
        }) as ContentType,
    ),
  ];

  const fuse = new Fuse(allContent, {
    threshold: 0.6,
    keys: ['_normalizedTitle', '_normalizedDescription'],
  });

  useEffect(() => {
    const normalizedSearch = Hangul.d(search).join('');
    const searchResults = search.trim()
      ? fuse.search(normalizedSearch).map((result) => result.item)
      : allContent;

    const grouped = searchResults.reduce<{ [key: string]: ContentType[] }>((groups, item) => {
      if (!groups[item.type]) {
        groups[item.type] = [];
      }
      groups[item.type].push(item);
      return groups;
    }, {});

    setgroupedResults(grouped);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsMenuOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      setTimeout(() => setSearch(''), MODAL_CLOSED_MS);
    }
  }, [isMenuOpen]);

  return (
    <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className={styles.modal}>
          <DialogTitle aria-hidden />
          <DialogDescription aria-hidden />

          <Command label="Command Menu">
            <Command.Input
              placeholder="어떤 것을 찾을까요?"
              value={search}
              onValueChange={(value) => setSearch(value)}
              aria-label="Search"
            />
            <Command.List>
              <Command.Empty>아무런 결과가 없네요 😭</Command.Empty>
              {Object.entries(groupedResults).map(([type, items]) => (
                <Command.Group key={type} heading={type.toUpperCase()}>
                  {items.map((item) => (
                    <Command.Item
                      key={item.slug}
                      value={item.title}
                      keywords={[item._normalizedTitle, item._normalizedDescription]}
                      onSelect={() => {
                        router.push(`/${item.type.toLowerCase()}s/${item.slug}`);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CommandMenu;
