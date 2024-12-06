import { FC, Fragment, ReactElement } from 'react';

import Constants from './constants';
import * as styles from './styles.css';

const Resume: FC = (): ReactElement => {
  return (
    <Fragment>
      {Constants.map(({ id, title, items }) => (
        <section key={id} className={styles.root}>
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
