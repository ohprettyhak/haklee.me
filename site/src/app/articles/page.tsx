import dayjs from 'dayjs';
import Link from 'next/link';

import { type Article, allArticles } from 'contentlayer/generated';

import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/ui';

const ArticlePage = () => {
  const list = getSortedArticleByYears(allArticles);

  return (
    <TimelineList className="group px-[var(--spacing-inline)]" asChild>
      <ul>
        {list.map(({ year, items }) => (
          <TimelineItem key={year} className="pb-[2rem]" asChild>
            <li>
              <TimelineHeading className="mb-[1rem] text-lg font-semibold" id={`#${year}`}>
                {year}.
              </TimelineHeading>
              <TimelineLine />
              <TimelineDot />

              <ul className="list-none">
                {items.map(({ slug, title, description, createdAt }) => (
                  <li
                    className="mb-[1rem] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.5rem] bg-[var(--color-card-background)] opacity-100 transition duration-300 ease-in-out group-hover:opacity-50 hover:opacity-100 hover:border-[var(--color-card-hover)] hover:bg-[var(--color-card-hover-background)] last:mb-0"
                    key={slug}
                  >
                    <Link
                      className="flex flex-col flex-1 py-[0.75rem] px-[1rem] gap-[0.375rem] mobile:flex-row mobile:justify-between"
                      href={`/articles/${slug}`}
                    >
                      <div className="column gap-[0.188rem]">
                        <h3 className="text-[var(--color-text)] text-md font-semibold">{title}</h3>
                        {description && (
                          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                            {description}
                          </p>
                        )}
                      </div>
                      <time className="self-start h-fit text-[var(--color-text-secondary)] text-sm leading-relaxed mobile:self-center">
                        {dayjs(createdAt).format('MM.DD.')}
                      </time>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </TimelineItem>
        ))}
      </ul>
    </TimelineList>
  );
};

export default ArticlePage;

const getSortedArticleByYears = (articles: Article[]) => {
  const grouped = articles.reduce(
    (map, article) => {
      const year = dayjs(article.createdAt).year();
      (map[year] ??= []).push(article);
      return map;
    },
    {} as Record<number, Article[]>,
  );

  return Object.entries(grouped)
    .map(([year, items]) => ({
      year: Number(year),
      items: items.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))),
    }))
    .sort((a, b) => b.year - a.year);
};
