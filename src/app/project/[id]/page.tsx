import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FC, ReactElement } from 'react';

import BackButton from '@/components/BackButton';
import { GithubIcon, GlobeIcon } from '@/components/icons';
import { theme } from '@/styles';

import { getMarkdownById, MarkdownItem } from '../_utils';
import * as styles from './page.css';

const getIconByType = (type: string): ReactElement => {
  switch (type) {
    case 'Github':
      return <GithubIcon stroke={theme.colors.text} />;
    case 'Demo':
      return <GlobeIcon stroke={theme.colors.text} />;
    default:
      return <></>;
  }
};

type PlaygroundProps = {
  params: Promise<{ id: string }>;
};

const Playground: FC<PlaygroundProps> = async ({ params }): Promise<ReactElement> => {
  const { id } = await params;
  const project: MarkdownItem | null = getMarkdownById('PROJECT', id);
  if (!project) notFound();

  const { frontmatter, html } = project;

  return (
    <article className={styles.root} data-animate={true}>
      <BackButton className={styles.backButton} />

      <div className={styles.cover}>
        <Image
          src={frontmatter.cover}
          alt={frontmatter.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          draggable={false}
          fill
        />
      </div>
      <div>
        <p className={styles.metadata}>
          {frontmatter.duration} &middot; {frontmatter.type}
        </p>
        <h3 className={styles.title}>{frontmatter.title}</h3>
        <p className={styles.description}>{frontmatter.description}</p>
      </div>
      {frontmatter.links && (
        <div className={styles.link}>
          {frontmatter.links.map((link) => (
            <a key={link.link} href={link.link} target="_blank" rel="noopener noreferrer">
              {getIconByType(link.type)}
              {link.type}
            </a>
          ))}
        </div>
      )}

      <hr className={styles.divider} aria-hidden={true} />

      {html && <div data-content={true} dangerouslySetInnerHTML={{ __html: html }} />}
    </article>
  );
};

export default Playground;
