import dayjs from 'dayjs';
import Link from 'next/link';

import { type Article, allArticles } from 'contentlayer/generated';

import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/ui';

import * as styles from './page.css';

const ArticlePage = () => {
  const list = getSortedArticleByYears(allArticles);

  return (
    <TimelineList className={styles.root} asChild>
      <ul>
        {list.map(({ year, items }) => (
          <TimelineItem key={year} className={styles.year} asChild>
            <li>
              <TimelineHeading className={styles.heading} id={`#${year}`}>
                {year}.
              </TimelineHeading>
              <TimelineLine />
              <TimelineDot />

              <ul className={styles.list}>
                {items.map(({ slug, title, description, createdAt }) => (
                  <li className={styles.card} key={slug}>
                    <Link href={`/articles/${slug}`}>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                      <time>{dayjs(createdAt).format('MM.DD.')}</time>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </TimelineItem>
        ))}
      </ul>
    </TimelineList>
  );
};

export default ArticlePage;

const getSortedArticleByYears = (articles: Article[]) => {
  const grouped = articles.reduce(
    (map, article) => {
      const year = dayjs(article.createdAt).year();
      (map[year] ??= []).push(article);
      return map;
    },
    {} as Record<number, Article[]>,
  );

  return Object.entries(grouped)
    .map(([year, items]) => ({
      year: Number(year),
      items: items.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))),
    }))
    .sort((a, b) => b.year - a.year);
};
