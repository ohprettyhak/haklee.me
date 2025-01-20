import { FC, Fragment, ReactElement } from 'react';

import { HackathonGrid } from './_components/HackathonGrid';
import { ProjectGrid } from './_components/ProjectGrid';
import { ProjectTab } from './_components/ProjectTab';
import * as styles from './page.css';

type ProjectProps = {
  searchParams: Promise<{ tab: string }>;
};

const Project: FC<ProjectProps> = async ({ searchParams }): Promise<ReactElement> => {
  const { tab: _tab } = await searchParams;
  let tab: 'HACKATHON' | 'PROJECT';
  if (_tab === 'hackathons') tab = 'HACKATHON';
  else tab = 'PROJECT';

  return (
    <Fragment>
      <ProjectTab className={styles.tab} current={tab} />
      <section className={styles.root} data-animate={true}>
        {tab === 'PROJECT' ? <ProjectGrid /> : <HackathonGrid />}
      </section>
    </Fragment>
  );
};

export default Project;
