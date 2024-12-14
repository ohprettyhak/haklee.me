import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkAlerts from 'remark-blockquote-alerts';
import remarkRehype from 'remark-rehype';

export type MarkdownItem = {
  content: string;
  html?: string;
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

export type DirType = 'PROJECT' | 'PLAYGROUND' | 'ARTICLE';

const markdownToHtml = (markdown: string): string => {
  return remark()
    .use(remarkAlerts)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(markdown)
    .toString();
};

export const getMarkdownList = (dir: DirType): Markdown[] => {
  const pathDir: string = path.join(process.cwd(), dir.toLowerCase());
  const files: string[] = fs.readdirSync(pathDir);

  const markdowns = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath: string = path.join(pathDir, file);
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

export const getMarkdownById = (dir: DirType, slug: string): MarkdownItem | null => {
  const pathDir: string = path.join(process.cwd(), dir.toLowerCase());
  const filePath: string = path.join(pathDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = markdownToHtml(content);

  return {
    slug,
    frontmatter: data as MarkdownItem['frontmatter'],
    content,
    html: htmlContent,
  };
};
