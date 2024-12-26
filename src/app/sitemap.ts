import type { MetadataRoute } from 'next';

import { allArticles, allPlaygrounds, allProjects } from 'contentlayer/generated';

import { BASE_URL, PATH } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...allArticles.map((article) => ({
      url: `${BASE_URL}${PATH.ARTICLE}/${article.slug}`,
      lastModified: article.modifiedAt ?? article.createdAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...allPlaygrounds.map((playground) => ({
      url: `${BASE_URL}${PATH.PROJECT}/${playground.slug}`,
      lastModified: playground.date,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...allProjects.map((project) => ({
      url: `${BASE_URL}${PATH.PROJECT}/${project.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
  ] as MetadataRoute.Sitemap;
}
