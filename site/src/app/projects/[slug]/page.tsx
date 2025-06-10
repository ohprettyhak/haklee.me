import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { type Project, allProjects } from 'contentlayer/generated';

import { GithubIcon, GlobeIcon } from '@/components/icon';
import { MdxComponent } from '@/components/mdx';
import { BackButton } from '@/components/ui';
import { BASE_URL, PATH, PROFILE } from '@/constants';

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

type ProjectProps = {
  params: Promise<{ slug: string }>;
};

const Project = async ({ params }: ProjectProps) => {
  const { slug } = await params;
  const project: Project | undefined = allProjects.find((project) => project.slug === slug);
  if (!project) notFound();

  return (
    <article className="column px-[var(--spacing-inline)]" data-animate={true}>
      <BackButton />

      <div className="relative w-full mt-[2rem] aspect-[1200/630] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.625rem] overflow-hidden">
        <Image
          className="object-cover select-none"
          src={project.cover}
          alt={project.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          draggable={false}
          fill
          priority
        />
      </div>
      <div>
        <p className="mt-[1rem] text-[var(--color-text-secondary)] text-xs font-medium break-keep">
          {project.duration} &middot; {project.category}
        </p>
        <p className="mt-[0.313rem] text-[var(--color-text-tertiary)] text-xs font-medium leading-relaxed break-keep">
          {project.team}
        </p>

        <h3 className="mt-[0.625rem] text-[var(--color-text)] text-lg font-medium leading-relaxed break-keep">
          {project.title}
        </h3>
        <p className="mt-[0.125rem] text-[var(--color-text-secondary)] text-sm leading-relaxed break-keep">
          {project.description}
        </p>
      </div>
      {project.links && (
        <div className="center-y mt-[1rem] gap-[0.5rem]">
          {project.links.map((link) => (
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

      <hr tabIndex={-1} aria-hidden={true} />

      <MdxComponent code={project.body.code} />
    </article>
  );
};

export default Project;

const getProjectBySlug = (slug: string) => {
  return allProjects.find((project) => project.slug === slug);
};

export const generateMetadata = async ({ params }: ProjectProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${PROFILE.TITLE}`,
    description: project.description,
    publisher: PROFILE.NAME,
    openGraph: {
      title: `${project.title} — ${PROFILE.TITLE}`,
      description: project.description,
      url: `${BASE_URL}${PATH.PROJECT}/${slug}`,
      type: 'article',
      images: [{ url: project.cover, alt: project.title }],
    },
    twitter: {
      title: `${project.title} — ${PROFILE.TITLE}`,
      description: project.description,
      card: project.cover ? 'summary_large_image' : 'summary',
      images: [{ url: project.cover, alt: project.title }],
    },
  };
};
