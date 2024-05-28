import React, { ReactElement } from 'react';

import * as styles from '@/styles/app.css';

const IntroduceSection = (): ReactElement => {
  return (
    <section className={styles.section.root}>
      <h3 className={styles.section.title}>Introduce</h3>
      <p className={styles.section.description}>
        저는 다른 사람들에게 도움을 줄 때 큰 보람을 느낍니다.
        <br />
        사용자와 원활하게 소통하며 진짜 문제를 이해하고 해결책을 찾는 데
        집중합니다.
        <br />
        복잡한 문제를 단순하고 쉽게 만드는 것을 좋아하며, 효과적인 솔루션을 통해
        긍정적인 변화를 만드는 데 열정적입니다.
      </p>
    </section>
  );
};

export default IntroduceSection;
