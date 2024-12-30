import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkAlerts from 'remark-blockquote-alerts';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  toc: {
    type: 'json',
    resolve: (doc) => {
      const headerRegex = /^(#{1,3})\s(.+)$/gm;
      const matches = [...doc.body.raw.matchAll(headerRegex)];

      return matches.map((match): { id: string; level: number; text: string } => ({
        id: match[2]
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^\w가-힣ㄱ-ㅎㅏ-ㅣ-]/g, '')
          .toLowerCase(),
        level: match[1].length,
        text: match[2],
      }));
    },
  },
};

export const Article = defineDocumentType(() => ({
  name: 'Article',
  contentType: 'mdx',
  filePathPattern: `articles/**/*.mdx`,
  fields: {
    preview: { type: 'string', required: false },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    createdAt: { type: 'date', required: true },
    modifiedAt: { type: 'date', required: true },
  },
  computedFields,
}));

export const Hackathon = defineDocumentType(() => ({
  name: 'Hackathon',
  contentType: 'mdx',
  filePathPattern: `hackathons/**/*.mdx`,
  fields: {
    description: { type: 'string', required: true },
    duration: { type: 'string', required: true },
    title: { type: 'string', required: true },
  },
  computedFields,
}));

export const Playground = defineDocumentType(() => ({
  name: 'Playground',
  contentType: 'mdx',
  filePathPattern: `playgrounds/**/*.mdx`,
  fields: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tools: { type: 'list', of: { type: 'string' } },
    date: { type: 'date', required: true },
  },
  computedFields,
}));

const Link = defineNestedType(() => ({
  name: 'Link',
  fields: {
    category: { type: 'string', required: true },
    link: { type: 'string', required: true },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  contentType: 'mdx',
  filePathPattern: `projects/**/*.mdx`,
  fields: {
    cover: { type: 'string', required: true },
    description: { type: 'string', required: true },
    duration: { type: 'string', required: true },
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    team: { type: 'string', required: true },
    links: { type: 'list', of: Link },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article, Hackathon, Playground, Project],
  mdx: {
    remarkPlugins: [remarkAlerts],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light',
          },
        },
      ],
    ],
  },
});
