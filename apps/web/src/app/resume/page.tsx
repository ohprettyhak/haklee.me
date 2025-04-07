import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/timeline';

import { REACH, RESUME } from './_constants';
import * as styles from './page.css';

const Resume = () => {
  return (
    <>
      <div className={styles.introduce}>
        <p>안녕하세요, 웹 프론트엔드 개발자 이학입니다.</p>
        <p>
          사이버 지식 정보방에서 우연히 웹 개발을 접하게 되었고, 그 즐거움으로 지금까지
          계속해오고 있습니다.
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

      <section className={styles.section}>
        <h2 id={`#${REACH.id}`}>{REACH.title}</h2>
        <div className={styles.grid}>
          {REACH.items.map(({ id, title, value, link }) => (
            <div key={id} className={styles.card}>
              <h3>{title}</h3>
              {link ? <a href={link}>{value}</a> : <p>{value}</p>}
            </div>
          ))}
        </div>
      </section>
      {RESUME.map(({ id, title, items }) => (
        <section key={id} className={styles.section}>
          <h2 id={`#${id}`}>{title}</h2>
          <TimelineList asChild>
            <ul>
              {items.map((item) => (
                <TimelineItem key={item.id} asChild>
                  <li>
                    <TimelineLine />
                    <TimelineDot />
                    {item.duration && (
                      <TimelineHeading className={styles.duration} asChild>
                        <h3>{item.duration}</h3>
                      </TimelineHeading>
                    )}

                    <div className={styles.card}>
                      <h4>
                        {item.logo}
                        {item.title}
                      </h4>
                      {item.description && (
                        <p dangerouslySetInnerHTML={{ __html: item.description }} />
                      )}
                      {item.subItems && (
                        <ul>
                          {item.subItems.map((subItem) => (
                            <li
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
