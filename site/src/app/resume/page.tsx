import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/ui';

import { REACH, RESUME } from './_constants';

const Resume = () => {
  return (
    <>
      <div className="column px-[var(--spacing-inline)] text-[var(--color-text)] text-base leading-[1.8] gap-[0.5rem]">
        <p>안녕하세요, 웹 프론트엔드 개발자 이학입니다.</p>
        <p>
          사이버 지식 정보방에서 우연히 웹 개발을 접하게 되었고, 그 즐거움으로 지금까지 계속해오고
          있습니다.
        </p>
        <p>
          시각적인 요소와 아름다운 디자인에 관심이 많으며, 컴포넌트와 적절한 애니메이션을 통해
          사용자와 웹이 대화하는 듯한 인터랙티브한 경험을 만드는 것을 좋아합니다.
        </p>
        <p>
          저의 키워드는 적극성입니다. 항상 주인의식을 가지고 적극적으로 의견을 제시하려 하며, 더
          효과적인 협업과 원활한 소통을 위해 어떤 방식이 좋을지 늘 고민하고 있습니다.
        </p>
      </div>

      <section className="mt-[calc(var(--spacing-inline)*2)] px-[var(--spacing-inline)]">
        <h2
          className="mb-[1rem] text-[var(--color-text)] text-lg font-semibold break-keep"
          id={`#${REACH.id}`}
        >
          {REACH.title}
        </h2>
        <div className="grid grid-cols-1 w-full gap-[1rem] mobile:grid-cols-3">
          {REACH.items.map(({ id, title, value, link }) => (
            <div
              key={id}
              className="py-[0.75rem] px-[1rem] mt-0 border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.5rem] bg-[var(--color-card-background)] transition-colors duration-300 ease-in-out"
            >
              <h3 className="text-[var(--color-text)] text-xs font-medium">{title}</h3>
              {link ? (
                <a
                  className="text-[var(--color-text-secondary)] text-sm break-keep underline opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-70"
                  href={link}
                >
                  {value}
                </a>
              ) : (
                <p className="text-[var(--color-text-secondary)] text-sm break-keep">{value}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      {RESUME.map(({ id, title, items }) => (
        <section key={id} className="mt-[calc(var(--spacing-inline)*2)] px-[var(--spacing-inline)]">
          <h2
            className="mb-[1rem] text-[var(--color-text)] text-lg font-semibold break-keep"
            id={`#${id}`}
          >
            {title}
          </h2>
          <TimelineList asChild>
            <ul>
              {items.map((item) => (
                <TimelineItem key={item.id} asChild>
                  <li>
                    <TimelineLine />
                    <TimelineDot />
                    {item.duration && (
                      <TimelineHeading className="mt-[0.75rem] text-md font-medium" asChild>
                        <h3>{item.duration}</h3>
                      </TimelineHeading>
                    )}

                    <div className="py-[0.75rem] px-[1rem] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.5rem] bg-[var(--color-card-background)] transition-colors duration-300 ease-in-out">
                      <h4 className="center-y text-[var(--color-text)] text-md font-medium break-keep gap-[0.375rem]">
                        {item.logo}
                        {item.title}
                      </h4>
                      {item.description && (
                        <p
                          className="mt-[0.25rem] text-[var(--color-text-secondary)] text-sm break-keep leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )}
                      {item.subItems && (
                        <ul className="list-none mt-[0.5rem]">
                          {item.subItems.map((subItem) => (
                            <li
                              className="relative mt-[0.25rem] pl-[1rem] text-[var(--color-text-secondary)] text-sm break-keep before:content-['•'] before:absolute before:left-0 before:text-sm"
                              key={subItem.id}
                              dangerouslySetInnerHTML={{ __html: subItem.title }}
                            />
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                </TimelineItem>
              ))}
            </ul>
          </TimelineList>
        </section>
      ))}
    </>
  );
};

export default Resume;
