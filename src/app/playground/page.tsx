'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { FC, Fragment, ReactElement } from 'react';

import { PLAYGROUND } from './_constants';
import * as styles from './page.css';

const Playground: FC = (): ReactElement => {
  const router = useRouter();

  return (
    <Fragment>
      <section className={styles.root}>
        {PLAYGROUND.map((playground) => (
          <motion.div
            layoutId={`playground-${playground.id}`}
            key={playground.id}
            onClick={() => router.push(`/playground/${playground.id}`)}
          >
            <h3>{playground.title}</h3>
            <p>{playground.description}</p>
          </motion.div>
        ))}
      </section>
    </Fragment>
  );
};

export default Playground;
