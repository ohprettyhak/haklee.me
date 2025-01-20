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
        무엇인가 만들고 고민하는 과정이 즐겁습니다. 현재는 성장에 진심인 회사를 찾고 있습니다.
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
                    <TimelineHeading className={styles.duration} asChild>
                      <h3>{item.duration}</h3>
                    </TimelineHeading>

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
