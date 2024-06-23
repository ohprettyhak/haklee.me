import React, { ReactElement } from "react";

import * as styles from "@/styles/app.css";

const IntroduceSection = (): ReactElement => {
  return (
    <section className={styles.section.root}>
      <h3 className={styles.section.title}>Introduce</h3>
      <p className={styles.section.description}>
        안녕하세요, 개발자 이학입니다.
        <br />
        한국외국어대학교 컴퓨터 공학을 공부하고 있습니다.
        <br />
        창의적이고 실질적인 해결책을 통해 긍정적인 변화를 만들어내는 것이 제 목표입니다.
      </p>
    </section>
  );
};

export default IntroduceSection;
