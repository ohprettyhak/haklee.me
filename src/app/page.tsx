import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';

import { type Article, allArticles } from 'contentlayer/generated';

import { PATH, PROFILE } from '@/constants';

import * as styles from './page.css';

const Home: FC = (): ReactElement => {
  const articles: Article[] = getSortedArticles(allArticles);

  return (
    <Fragment>
      <ul className={styles.list}>
        <li>안녕하세요, 웹 프론트엔드 개발자 이학입니다.</li>
        <li>
          사이버 지식 정보방에서 우연히 시작한 웹 개발이 너무 즐거워서 지금까지 계속하고 있습니다.
        </li>
        <li>
          시각적인 요소와 아름다운 디자인에 관심이 많습니다. 컴포넌트와 적절한 애니메이션을 통해
          사용자와 웹이 대화하는 것 같은 인터렉티브 웹을 구현하려 합니다.
        </li>
        <li>
          적극성은 저의 키워드입니다. 주인 의식을 가지고 적극적으로 의견을 제시하고자 하며, 어떻게
          해야 더욱 효과적인 협업과 원활한 소통을 이어갈 수 있을지 고민합니다.
        </li>
      </ul>

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
    </Fragment>
  );
};

export default Home;

const getSortedArticles = (articles: Article[]): Article[] => {
  return articles.sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1));
};
