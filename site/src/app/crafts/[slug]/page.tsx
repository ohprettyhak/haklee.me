import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { allCrafts, type Craft } from 'contentlayer/generated';

import { GithubIcon, GlobeIcon } from '@/components/icon';
import { MdxComponent } from '@/components/mdx';
import { BackButton } from '@/components/ui';
import { BASE_URL, PATH, PROFILE } from '@/constants';

import { Cover } from '../_components/cover';

const getIconByType = (type: string) => {
  switch (type) {
    case 'GitHub':
      return <GithubIcon />;
    case 'Demo':
      return <GlobeIcon />;
    default:
      return <></>;
  }
};

type CraftProps = {
  params: Promise<{ slug: string }>;
};

const Craft = async ({ params }: CraftProps) => {
  const { slug } = await params;
  const craft: Craft | undefined = getCraftBySlug(slug);
  if (!craft) notFound();

  return (
    <article className="column px-[var(--spacing-inline)]" data-animate={true}>
      <BackButton />

      <Cover key={craft.slug} className="mt-[2rem]" src={craft.cover} alt={craft.title} />

      <h1 className="mt-[1rem] text-[var(--color-text)] text-xl font-mono font-semibold tracking-tight">
        {craft.title}
      </h1>
      <p className="mt-[0.5rem] text-[var(--color-text-secondary)] text-sm font-mono tracking-tight">
        {craft.description}
      </p>
      {craft.links && (
        <div className="center-y mt-[1rem] gap-[0.5rem]">
          {craft.links.map((link) => (
            <a
              className="center-y py-[0.25rem] px-[0.5rem] text-[var(--color-text)] text-xs font-medium border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.375rem] bg-[var(--color-card-background)] transition-colors duration-300 ease-in-out gap-[0.25rem] hober:bg-[var(--color-card-hover-background)]"
              key={link.link}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getIconByType(link.category)}
              {link.category}
            </a>
          ))}
        </div>
      )}

      <MdxComponent code={craft.body.code} blurDataURLs={craft.blurMap} />
    </article>
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
    publisher: PROFILE.NAME,
    openGraph: {
      title: `${craft.title} — ${PROFILE.TITLE}`,
      description: craft.description,
      url: `${BASE_URL}${PATH.CRAFT}/${slug}`,
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
