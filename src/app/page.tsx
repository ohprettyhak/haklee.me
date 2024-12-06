import { FC, Fragment, ReactElement } from 'react';

import RESUME from '@/constants/resume';

import * as styles from './page.css';

const Home: FC = (): ReactElement => {
  return (
    <Fragment>
      <ul className={styles.introduce}>
        <li>안녕하세요, 웹 프론트엔드 개발자 이학입니다.</li>
        <li>
          사이버 지식 정보방에서 우연히 시작한 웹 개발이 너무 즐거워서 지금까지 계속하고 있습니다.
        </li>
        <li>저의 역할과 일의 본질을 탐구하는 것을 좋아합니다.</li>
        <li>프론트엔드의 틀을 넘어 서비스가 무엇을 제공해야 하는지를 고민하고 있습니다.</li>
      </ul>

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
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />

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

export default Home;
