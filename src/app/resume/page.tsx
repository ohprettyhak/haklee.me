import { FC, Fragment, ReactElement } from 'react';

import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/timeline';

import { REACH, RESUME } from './_constants';
import * as styles from './page.css';

const Resume: FC = (): ReactElement => {
  return (
    <Fragment>
      <p className={styles.introduce}>
        시각적인 페이지를 디자인하고 개발하는 과정이 너무 즐거워 웹 프론트엔드 개발을 하고 있습니다.
      </p>

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
    </Fragment>
  );
};

export default Resume;
