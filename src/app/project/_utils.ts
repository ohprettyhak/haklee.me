import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const playgroundDir = path.join(process.cwd(), 'project');

export type PlaygroundItem = {
  content: string;
  frontmatter: {
    cover: string;
    description: string;
    duration: string;
    title: string;
    type: string;
  };
  slug: string;
};

export type Project = {
  year: string;
  items: PlaygroundItem[];
};

export const getProjectList = (): Project[] => {
  const files = fs.readdirSync(playgroundDir);

  const markdowns = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath: string = path.join(playgroundDir, file);
      const fileContent: string = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      return {
        slug: file.replace(/\.md$/, ''),
        frontmatter: data as PlaygroundItem['frontmatter'],
        content,
      };
    })
    .sort((a, b) => b.frontmatter.duration.localeCompare(a.frontmatter.duration));

  const grouped = markdowns.reduce<Record<string, Project>>((acc, item) => {
    const year: string = item.frontmatter.duration.split('.')[0];
    if (!acc[year]) acc[year] = { year, items: [] };
    acc[year].items.push(item);

    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) => parseInt(b.year) - parseInt(a.year));
};
