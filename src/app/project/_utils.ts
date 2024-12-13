import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const projectDir = path.join(process.cwd(), 'project');
const playgroundDir = path.join(process.cwd(), 'project');

export type MarkdownItem = {
  content: string;
  frontmatter: {
    cover: string;
    description: string;
    duration: string;
    title: string;
    type: string;
    links?: Array<{ type: string; link: string }>;
  };
  slug: string;
};

export type Markdown = {
  year: string;
  items: MarkdownItem[];
};

export const getMarkdownList = (dir: 'PROJECT' | 'PLAYGROUND'): Markdown[] => {
  const files = fs.readdirSync(dir === 'PROJECT' ? projectDir : playgroundDir);

  const markdowns = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath: string = path.join(projectDir, file);
      const fileContent: string = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      return {
        slug: file.replace(/\.md$/, ''),
        frontmatter: data as MarkdownItem['frontmatter'],
        content,
      };
    })
    .sort((a, b) => b.frontmatter.duration.localeCompare(a.frontmatter.duration));

  const grouped = markdowns.reduce<Record<string, Markdown>>((acc, item) => {
    const year: string = item.frontmatter.duration.split('.')[0];
    if (!acc[year]) acc[year] = { year, items: [] };
    acc[year].items.push(item);

    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) => parseInt(b.year) - parseInt(a.year));
};

export const getMarkdownById = (
  dir: 'PROJECT' | 'PLAYGROUND',
  slug: string,
): MarkdownItem | null => {
  const filePath = path.join(dir === 'PROJECT' ? projectDir : playgroundDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as MarkdownItem['frontmatter'],
    content,
  };
};
