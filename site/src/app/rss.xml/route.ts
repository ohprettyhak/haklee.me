import dayjs from 'dayjs';

import { allArticles, allCrafts, type Article, type Craft } from 'contentlayer/generated';

import { BASE_URL, PATH, PROFILE } from '@/constants';

export const dynamic = 'force-static';
export const revalidate = false;

const generateRssItems = (): {
  title: string;
  link: string;
  slug: string;
  description: string;
  pubDate: string;
}[] => {
  return [...allArticles, ...allCrafts]
    .sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1))
    .map((item: Article | Craft) => {
      const isArticle = 'modifiedAt' in item;
      const date = isArticle ? (item as Article).modifiedAt ?? item.createdAt : item.createdAt;
      const pubDate = dayjs(date).toDate().toUTCString();
      const description =
        item.body.raw
          .replace(/^\s*(import|export)\s.*$/gm, '')
          .trim()
          .replace(/\n+/g, ' ') + '…';

      return {
        title: item.title,
        link: `${BASE_URL}${isArticle ? PATH.ARTICLE : PATH.CRAFT}/${item.slug}`,
        slug: item.slug,
        description,
        pubDate,
      };
    });
};

const rssToXml = (
  items: ReturnType<typeof generateRssItems>,
): string => `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title><![CDATA[${PROFILE.TITLE}]]></title>
    <link>${BASE_URL}</link>
    <description><![CDATA[${PROFILE.DESCRIPTION}]]></description>
    <language><![CDATA[${PROFILE.SITE_LANG}]]></language>
    <pubDate>${dayjs().toDate().toUTCString()}</pubDate>
    <generator>semantic</generator>
    <ttl>100</ttl>
    <image>
      <url>${PROFILE.PREVIEW_IMAGE}</url>
      <title><![CDATA[${PROFILE.PREVIEW_IMAGE_ALT}]]></title>
      <link>${BASE_URL}</link>
    </image>
${items
  .map(
    ({ title, link, slug, description, pubDate }) => `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <description><![CDATA[${description}]]></description>
      <guid isPermaLink="true">${slug}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`,
  )
  .join('')}
  </channel>
</rss>`;

export const GET = async (): Promise<Response> => {
  const items = generateRssItems();
  const xml = rssToXml(items);
  return new Response(xml, {
    headers: { 'Content-Type': 'text/xml; charset=utf-8' },
  });
};
