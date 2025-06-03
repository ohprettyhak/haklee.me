import dayjs from 'dayjs';
import Link from 'next/link';

import { type Article, allArticles } from 'contentlayer/generated';

import { PATH, PROFILE } from '@/constants';

const HomePage = () => {
  const articles: Article[] = getSortedArticles(allArticles);

  return (
    <>
      <div className="column px-[var(--spacing-inline)] gap-[0.25rem]">
        <h3 className="pb-[0.5rem] text-[var(--color-text)] text-md font-medium">Today</h3>
        <p className="text-[var(--color-text)] text-base leading-[180%] break-keep">
          Founder&nbsp;
          <a href="https://github.com/bricks-team" target="_blank" rel="noreferrer noopener">
            @bricks-team
          </a>
          , working as a Design Engineer.
        </p>
      </div>

      <div className="column px-[var(--spacing-inline)] mt-[calc(var(--spacing-inline)*2)] gap-[0.25rem]">
        <h3 className="pb-[0.5rem] text-[var(--color-text)] text-md font-medium">최근 작성한 글</h3>
        <ul className="column gap-[0.375rem] [&>li]:relative [&>li]:pl-[1rem] [&>li]:text-[var(--color-text)] [&>li]:text-base [&>li]:leading-[180%] [&>li]:break-keep [&>li]:before:content-['•'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-base">
          {articles.slice(0, 3).map((article) => (
            <li key={article.slug}>
              <Link className="gradient" href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="column px-[var(--spacing-inline)] mt-[calc(var(--spacing-inline)*2)] gap-[0.25rem]">
        <h3 className="pb-[0.5rem] text-[var(--color-text)] text-md font-medium">링크</h3>
        <ul className="column gap-[0.375rem] [&>li]:relative [&>li]:pl-[1rem] [&>li]:text-[var(--color-text)] [&>li]:text-base [&>li]:leading-[180%] [&>li]:break-keep [&>li]:before:content-['•'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-base">
          <li>
            <Link className="gradient" href={PATH.RESUME}>
              이력
            </Link>
          </li>
          <li>
            <a
              className="text-[var(--color-text-tertiary)] no-underline border-b-[0.0625rem] border-[var(--color-border)] [transition:'color_0.2s_cubic-bezier(0.4,0,0.2,1),_border-color_0.2s_cubic-bezier(0.4,0,0.2,1)']"
              href={`https://github.com/${PROFILE.SOCIAL.GITHUB}/`}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-[var(--color-text-tertiary)] no-underline border-b-[0.0625rem] border-[var(--color-border)] [transition:'color_0.2s_cubic-bezier(0.4,0,0.2,1),_border-color_0.2s_cubic-bezier(0.4,0,0.2,1)']"
              href={`https://x.com/${PROFILE.SOCIAL.TWITTER}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              X
            </a>
          </li>
          <li>
            <a
              className="text-[var(--color-text-tertiary)] no-underline border-b-[0.0625rem] border-[var(--color-border)] [transition:'color_0.2s_cubic-bezier(0.4,0,0.2,1),_border-color_0.2s_cubic-bezier(0.4,0,0.2,1)']"
              href={`https://linkedin.com/in/${PROFILE.SOCIAL.LINKEDIN}/`}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;

const getSortedArticles = (articles: Article[]): Article[] => {
  return articles.sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1));
};
