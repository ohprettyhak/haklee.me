import dayjs from 'dayjs';
import Link from 'next/link';

import { type Article, allArticles } from 'contentlayer/generated';

import { PATH, PROFILE } from '@/constants';

import * as styles from './page.css';

const HomePage = () => {
  const articles: Article[] = getSortedArticles(allArticles);

  return (
    <>
      <div className={styles.block}>
        <h3 className={styles.title}>Today</h3>
        <p className={styles.content}>
          Founder&nbsp;
          <a href="https://github.com/bricks-team" target="_blank" rel="noreferrer noopener">
            @bricks-team
          </a>
          , working as a Design Engineer
        </p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.title}>최근 작성한 글</h3>
        <ul className={styles.list}>
          {articles.slice(0, 3).map((article) => (
            <li key={article.slug}>
              <Link className="gradient" href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.title}>링크</h3>
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
              href={`https://x.com/${PROFILE.SOCIAL.TWITTER}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              X
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
      </div>
    </>
  );
};

export default HomePage;

const getSortedArticles = (articles: Article[]): Article[] => {
  return articles.sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1));
};
