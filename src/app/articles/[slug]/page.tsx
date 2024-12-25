import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import { FC, ReactElement } from 'react';

import { type Article, allArticles } from 'contentlayer/generated';

import BackButton from '@/components/BackButton';
import MdxComponent from '@/components/MdxComponent';

import * as styles from './page.css';

type ArticleProps = {
  params: Promise<{ slug: string }>;
};

const Article: FC<ArticleProps> = async ({ params }): Promise<ReactElement> => {
  const { slug } = await params;
  const article: Article | undefined = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article>
      <BackButton />
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.description}>{article.description}</p>
      <time className={styles.time}>
        작성: {dayjs(article.createdAt).format('YYYY.MM.DD.')}
        {article.modifiedAt && dayjs(article.modifiedAt).isAfter(article.createdAt) && (
          <> &middot; 수정: {dayjs(article.modifiedAt).format('YYYY.MM.DD.')}</>
        )}
      </time>

      <hr tabIndex={-1} aria-hidden={true} />

      <MdxComponent code={article.body.code} />
    </article>
  );
};

export default Article;

const getArticleBySlug = (slug: string) => {
  return allArticles.find((article) => article.slug === slug);
};
