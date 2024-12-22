import { FC, PropsWithChildren, ReactNode } from 'react';

import { getMarkdownById, MarkdownItem } from '@/utils/markdown';

type MetadataProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: MetadataProps) {
  const { id } = await params;
  const project: MarkdownItem | null = await getMarkdownById('PROJECT', id);
  if (!project) return { title: 'haklee' };

  const { frontmatter } = project;

  return {
    title: `${frontmatter.title} — haklee`,
    description: frontmatter.description,
    openGraph: {
      title: `${frontmatter.title} — haklee`,
      description: frontmatter.description,
      url: `https://www.haklee.me/project/${id}`,
      images: [{ url: frontmatter.cover }],
    },
    twitter: {
      title: `${frontmatter.title} — haklee`,
      description: frontmatter.description,
    },
  };
}

const PlaygroundLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default PlaygroundLayout;
