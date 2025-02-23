import { FC, ReactElement } from 'react';

import { BackButton } from '@/components/back-button';

import * as styles from './page.css';

const SouthKoreaD3MapCraft: FC = (): ReactElement => {
  return (
    <section className="craft-section" data-animate={true}>
      <BackButton />

      <h1>South Korea D3 Map</h1>
      <p>
        South Korea Map Components created using <code>D3.js</code>.
      </p>

      <iframe
        className={styles.iframe}
        src="https://react-southkorea-topomap.haklee.me/"
        width="100%"
        height="560px"
        frameBorder="0"
      />
    </section>
  );
};

export default SouthKoreaD3MapCraft;
