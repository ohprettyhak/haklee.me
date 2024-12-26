import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { type Article, allArticles } from 'contentlayer/generated';

import * as styles from './styles.css';

const Article: FC = (): ReactElement => {
  const list = getSortedArticleByYears(allArticles);

  return (
    <ul className={styles.root}>
      {list.map(({ year, items }) => (
        <li key={year} className={styles.year}>
          <h2 id={`#${year}`}>{year}.</h2>
          <div className={styles.line} />
          <div className={styles.dot} />

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
      ))}
    </ul>
  );
};

export default Article;

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
