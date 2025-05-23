import dayjs from 'dayjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { type Article, allArticles } from 'contentlayer/generated';

import { BackButton } from '@/components/back-button';
import { Giscus } from '@/components/giscus';
import { MdxComponent } from '@/components/mdx-component';
import { Signature } from '@/components/signature';
import { type TOCType, TableOfContents } from '@/components/table-of-contents';
import { PROFILE } from '@/constants';

import * as styles from './page.css';

type ArticleProps = {
  params: Promise<{ slug: string }>;
};

const Article = async ({ params }: ArticleProps) => {
  const { slug } = await params;
  const article: Article | undefined = getArticleBySlug(slug);
  if (!article) notFound();

  const toc: TOCType[] = article.toc;

  return (
    <>
      <BackButton className={styles.backButton} />

      <article className={styles.root} data-animate={true}>
        <div>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.description}>{article.description}</p>
          <time className={styles.time}>
            작성: {dayjs(article.createdAt).format('YYYY.MM.DD.')}
            {article.modifiedAt && dayjs(article.modifiedAt).isAfter(article.createdAt) && (
              <> &middot; 최종 수정: {dayjs(article.modifiedAt).format('YYYY.MM.DD.')}</>
            )}
          </time>
        </div>

        <hr tabIndex={-1} aria-hidden={true} />

        <div>
          <MdxComponent code={article.body.code} />

          <aside className={styles.sidebar}>
            <nav className={styles.navigation}>
              <TableOfContents toc={toc} />
            </nav>
          </aside>
        </div>
      </article>

      <Signature className={styles.signature} />

      <Giscus className={styles.giscus} />
    </>
  );
};

export default Article;

const getArticleBySlug = (slug: string) => {
  return allArticles.find((article) => article.slug === slug);
};

export const generateMetadata = async ({ params }: ArticleProps): Promise<Metadata> => {
  const { slug } = await params;
  const article: Article | undefined = getArticleBySlug(slug);
  if (!article) return {};

  const metadata: Metadata = {
    title: `${article.title} — haklee`,
    description: article.description,
    publisher: 'haklee',
    openGraph: {
      title: `${article.title} — haklee`,
      description: article.description,
      url: `https://www.haklee.me/articles/${slug}`,
      type: 'article',
      images: [{ url: PROFILE.PREVIEW_IMAGE, alt: PROFILE.PREVIEW_IMAGE_ALT }],
      publishedTime: article.createdAt,
      modifiedTime: article.modifiedAt,
    },
    twitter: {
      title: `${article.title} — haklee`,
      description: article.description,
      card: article.preview ? 'summary_large_image' : 'summary',
      images: [{ url: PROFILE.PREVIEW_IMAGE, alt: PROFILE.PREVIEW_IMAGE_ALT }],
    },
  };

  if (article.preview) {
    if (metadata.openGraph)
      metadata.openGraph.images = [{ url: article.preview, alt: article.title }];
    if (metadata.twitter) metadata.twitter.images = [{ url: article.preview, alt: article.title }];
  }

  return metadata;
};
