import dayjs from 'dayjs';
import Link from 'next/link';

import { type Article, allArticles } from 'contentlayer/generated';

import { PATH, PROFILE } from '@/constants';

import * as styles from './page.css';

const Home = () => {
  const articles: Article[] = getSortedArticles(allArticles);

  return (
    <>
      <p className={styles.content}>최신 글</p>
      <ul className={styles.list}>
        {articles.slice(0, 3).map((article) => (
          <li key={article.slug}>
            <Link className="gradient" href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>

      <p className={styles.content}>링크</p>
      <ul className={styles.list}>
        <li>
          <Link className="gradient" href={PATH.RESUME}>
            이력
          </Link>
        </li>
        <li>
          <a
            className={styles.social}
            href={`https://github.com/${PROFILE.SOCIAL.GITHUB}/`}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className={styles.social}
            href={`https://linkedin.com/in/${PROFILE.SOCIAL.LINKEDIN}/`}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </>
  );
};

export default Home;

const getSortedArticles = (articles: Article[]): Article[] => {
  return articles.sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1));
};
