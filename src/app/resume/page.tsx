import { FC, Fragment, ReactElement } from 'react';

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
          <ul className={styles.timeline}>
            {items.map((item) => (
              <li key={item.id} className={styles.item}>
                <div className={styles.line} />
                <div className={styles.dot} />
                <p className={styles.duration}>{item.duration}</p>

                <div className={styles.card}>
                  <h4>
                    {item.logo}
                    {item.title}
                  </h4>
                  {item.description && <p dangerouslySetInnerHTML={{ __html: item.description }} />}
                  {item.subItems && (
                    <ul>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id} dangerouslySetInnerHTML={{ __html: subItem.title }} />
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Fragment>
  );
};

export default Resume;
