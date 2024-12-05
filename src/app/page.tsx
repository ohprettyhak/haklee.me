'use client';
import { motion } from 'motion/react';
import { FC, ReactElement } from 'react';

import * as styles from './page.css';

const Home: FC = (): ReactElement => {
  return (
    <>
      <motion.ul
        className={styles.introduce}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'linear', delay: 0.05 }}
      >
        <li>안녕하세요, 웹 프론트엔드 개발자 이학입니다.</li>
        <li>
          사이버 지식 정보방에서 우연히 시작한 웹 개발이 너무 즐거워서 지금까지 계속하고 있습니다.
        </li>
        <li>저의 역할과 일의 본질을 탐구하는 것을 좋아합니다.</li>
        <li>프론트엔드의 틀을 넘어 서비스가 무엇을 제공해야 하는지를 고민하고 있습니다.</li>
      </motion.ul>
    </>
  );
};

export default Home;
