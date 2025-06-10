import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { allCrafts, type Craft } from 'contentlayer/generated';

import { MdxComponent } from '@/components/mdx';
import { BackButton } from '@/components/ui';
import { PROFILE } from '@/constants';

type CraftProps = {
  params: Promise<{ slug: string }>;
};

const Craft = async ({ params }: CraftProps) => {
  const { slug } = await params;
  const craft: Craft | undefined = getCraftBySlug(slug);
  if (!craft) notFound();

  return (
    <section className="column px-[var(--spacing-inline)]" data-animate={true}>
      <BackButton />

      <h1 className="mt-[2.25rem] text-[var(--color-text)] text-xl font-mono font-semibold">
        {craft.title}
      </h1>
      <p className="mt-[0.5rem] text-[var(--color-text-secondary)] text-sm font-mono">
        {craft.description}
      </p>

      <hr className="my-[2.25rem] border-[0.063rem] border-solid border-[var(--color-craft-border)]" />

      <MdxComponent code={craft.body.code} />
    </section>
  );
};

export default Craft;

const getCraftBySlug = (slug: string) => {
  return allCrafts.find((craft) => craft.slug === slug);
};

export const generateMetadata = async ({ params }: CraftProps): Promise<Metadata> => {
  const { slug } = await params;
  const craft: Craft | undefined = getCraftBySlug(slug);
  if (!craft) return {};

  return {
    title: `${craft.title} — ${PROFILE.TITLE}`,
    description: craft.description,
    publisher: 'haklee',
    openGraph: {
      title: `${craft.title} — ${PROFILE.TITLE}`,
      description: craft.description,
      url: `https://www.haklee.me/crafts/${slug}`,
      type: 'article',
      images: [{ url: craft.cover, alt: craft.title }],
      publishedTime: craft.createdAt,
    },
    twitter: {
      title: `${craft.title} — ${PROFILE.TITLE}`,
      description: craft.description,
      card: craft.cover ? 'summary_large_image' : 'summary',
      images: [{ url: craft.cover, alt: craft.title }],
    },
  };
};
