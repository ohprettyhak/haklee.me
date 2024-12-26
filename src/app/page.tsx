import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';

import { PATH } from '@/constants';

import * as styles from './page.css';

const Home: FC = (): ReactElement => {
  return (
    <Fragment>
      <ul className={styles.introduce}>
        <li>안녕하세요, 웹 프론트엔드 개발자 이학입니다.</li>
        <li>
          사이버 지식 정보방에서 우연히 시작한 웹 개발이 너무 즐거워서 지금까지 계속하고 있습니다.
        </li>
        <li>
          저의 역할과 일의 본질을 탐구하는 것을 좋아하며, 서비스가 무엇을 제공해야 하는지를
          고민합니다.
        </li>
        <li>
          시각적인 요소에 관심이 많습니다. 컴포넌트와 적절한 애니메이션을 통해 사용자와 웹이
          대화하는 것 같은 인터렉티브 웹을 구현하려 합니다.
        </li>
      </ul>

      <p className={styles.content}>
        더 자세한 내용은&nbsp;
        <Link className="gradient" href={PATH.ABOUT}>
          소개
        </Link>
        와&nbsp;
        <Link className="gradient" href={PATH.PROJECT}>
          프로젝트
        </Link>
        &nbsp;탭에서 확인해 주세요! 😆
      </p>
    </Fragment>
  );
};

export default Home;
