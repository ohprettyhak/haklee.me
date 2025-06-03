import dayjs from 'dayjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { type Article, allArticles } from 'contentlayer/generated';

import { Giscus, MdxComponent, TableOfContents, type TOCType } from '@/components/mdx';
import { BackButton, Signature } from '@/components/ui';
import { PROFILE } from '@/constants';

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
      <BackButton className="mx-[var(--spacing-inline)]" />

      <article className="column relative px-[var(--spacing-inline)] mt-[2rem]" data-animate={true}>
        <div>
          <h1 className="text-[var(--color-text)] text-lg font-medium leading-relaxed break-keep">
            {article.title}
          </h1>
          <p className="mt-[0.125rem] mb-[0.25rem] text-[var(--color-text-secondary)] text-sm leading-relaxed break-keep">
            {article.description}
          </p>
          <time className="text-[var(--color-text-secondary)] text-xs font-medium break-keep">
            작성: {dayjs(article.createdAt).format('YYYY.MM.DD.')}
            {article.modifiedAt && dayjs(article.modifiedAt).isAfter(article.createdAt) && (
              <> &middot; 최종 수정: {dayjs(article.modifiedAt).format('YYYY.MM.DD.')}</>
            )}
          </time>
        </div>

        <hr tabIndex={-1} aria-hidden={true} />

        <div>
          <MdxComponent code={article.body.code} />

          <aside className="fixed hidden top-0 right-0 w-full max-w-1/4 h-full !translate-x-[calc(100%+var(--spacing-inline)*2)] tablet:block">
            <nav className="sticky top-[calc(4rem+var(--spacing-inline))]">
              <TableOfContents toc={toc} />
            </nav>
          </aside>
        </div>
      </article>

      <Signature className="w-full h-[2.625rem] mt-[calc(var(--spacing-inline)*2)]" />

      <Giscus className="px-[var(--spacing-inline)] mt-[calc(var(--spacing-inline)*2)]" />
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
    title: `${article.title} — ${PROFILE.TITLE}`,
    description: article.description,
    publisher: 'haklee',
    openGraph: {
      title: `${article.title} — ${PROFILE.TITLE}`,
      description: article.description,
      url: `https://www.haklee.me/articles/${slug}`,
      type: 'article',
      images: [{ url: PROFILE.PREVIEW_IMAGE, alt: PROFILE.PREVIEW_IMAGE_ALT }],
      publishedTime: article.createdAt,
      modifiedTime: article.modifiedAt,
    },
    twitter: {
      title: `${article.title} — ${PROFILE.TITLE}`,
      description: article.description,
      card: article.preview ? 'summary_large_image' : 'summary',
      images: [{ url: PROFILE.PREVIEW_IMAGE, alt: PROFILE.PREVIEW_IMAGE_ALT }],
    },
  };

  if (article.preview) {
    if (metadata.openGraph) {
      metadata.openGraph.images = [{ url: article.preview, alt: article.title }];
    }
    if (metadata.twitter) {
      metadata.twitter.images = [{ url: article.preview, alt: article.title }];
    }
  }

  return metadata;
};
