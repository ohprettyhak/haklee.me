import type { MetadataRoute } from 'next';

import { allArticles, allPlaygrounds, allProjects } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...allArticles.map((article) => ({
      url: `https://www.haklee.me/articles/${article.slug}`,
      lastModified: article.modifiedAt ?? article.createdAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...allPlaygrounds.map((playground) => ({
      url: `https://www.haklee.me/projects/${playground.slug}`,
      lastModified: playground.date,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...allProjects.map((project) => ({
      url: `https://www.haklee.me/projects/${project.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
  ] as MetadataRoute.Sitemap;
}
