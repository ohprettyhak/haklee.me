import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FC, ReactElement } from 'react';

import { allProjects } from 'contentlayer/generated';

import BackButton from '@/components/BackButton';
import { GithubIcon, GlobeIcon } from '@/components/icons';
import MdxComponent from '@/components/MdxComponent';
import { theme } from '@/styles';

import * as styles from './page.css';

const getIconByType = (type: string): ReactElement => {
  switch (type) {
    case 'Github':
      return <GithubIcon stroke={theme.colors.text} />;
    case 'Demo':
      return <GlobeIcon stroke={theme.colors.text} />;
    default:
      return <></>;
  }
};

type PlaygroundProps = {
  params: Promise<{ id: string }>;
};

const Playground: FC<PlaygroundProps> = async ({ params }): Promise<ReactElement> => {
  const { id } = await params;
  const project = allProjects.find((project) => project.slug === id);
  if (!project) notFound();

  return (
    <article className={styles.root} data-animate={true}>
      <BackButton className={styles.backButton} />

      <div className={styles.cover}>
        <Image
          src={project.cover}
          alt={project.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          draggable={false}
          fill
        />
      </div>
      <div>
        <p className={styles.metadata}>
          {project.duration} &middot; {project.category}
        </p>
        <p className={styles.team}>{project.team}</p>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
      {project.links && (
        <div className={styles.link}>
          {project.links.map((link) => (
            <a key={link.link} href={link.link} target="_blank" rel="noopener noreferrer">
              {getIconByType(link.type)}
              {link.category}
            </a>
          ))}
        </div>
      )}

      <hr className={styles.divider} tabIndex={-1} aria-hidden={true} />

      <MdxComponent code={project.body.code} />
    </article>
  );
};

export default Playground;

const getProjectBySlug = (slug: string) => {
  return allProjects.find((project) => project.slug === slug);
};

export const generateMetadata = async ({ params }: PlaygroundProps): Promise<Metadata> => {
  const { id } = await params;
  const project = getProjectBySlug(id);
  if (!project) return {};

  return {
    title: `${project.title} — haklee`,
    description: project.description,
    openGraph: {
      title: `${project.title} — haklee`,
      description: project.description,
      url: `https://www.haklee.me/project/${id}`,
      images: [{ url: project.cover }],
    },
    twitter: {
      title: `${project.title} — haklee`,
      description: project.description,
    },
  };
};
