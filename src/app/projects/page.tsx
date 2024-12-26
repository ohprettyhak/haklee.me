import { FC, Fragment, ReactElement } from 'react';

import { allProjects } from 'contentlayer/generated';

import HackathonGrid from './_components/HackathonGrid';
import PlaygroundList from './_components/PlaygroundList';
import ProjectGrid from './_components/ProjectGrid';
import Tab from './_components/Tab';
import * as styles from './page.css';

type ProjectProps = {
  searchParams: Promise<{ tab: string }>;
};

const Project: FC<ProjectProps> = async ({ searchParams }): Promise<ReactElement> => {
  const { tab: _tab } = await searchParams;
  let tab: 'HACKATHON' | 'PLAYGROUND' | 'PROJECT';
  if (_tab === 'hackathons') tab = 'HACKATHON';
  else if (_tab === 'playgrounds') tab = 'PLAYGROUND';
  else tab = 'PROJECT';

  return (
    <Fragment>
      <Tab className={styles.tab} current={tab} />
      <section className={styles.root} data-animate={true}>
        {tab === 'PROJECT' ? (
          <ProjectGrid list={allProjects} />
        ) : tab === 'PLAYGROUND' ? (
          <PlaygroundList />
        ) : (
          <HackathonGrid />
        )}
      </section>
    </Fragment>
  );
};

export default Project;
