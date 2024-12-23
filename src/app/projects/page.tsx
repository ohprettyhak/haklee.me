import { FC, Fragment, ReactElement } from 'react';

import { allProjects } from 'contentlayer/generated';

import HackathonGrid from './_components/HackathonGrid';
import PlaygroundList from './_components/PlaygroundList';
import ProjectGrid from './_components/ProjectGrid';
import Tab from './_components/Tab';
import * as styles from './page.css';

type ProjectProps = {
  searchParams: Promise<{ type: string }>;
};

const Project: FC<ProjectProps> = async ({ searchParams }): Promise<ReactElement> => {
  const { type: _type } = await searchParams;
  let type: 'HACKATHON' | 'PLAYGROUND' | 'PROJECT';
  if (_type === 'hackathons') type = 'HACKATHON';
  else if (_type === 'playgrounds') type = 'PLAYGROUND';
  else type = 'PROJECT';

  return (
    <Fragment>
      <Tab className={styles.tab} current={type} />
      <section className={styles.root} data-animate={true}>
        {type === 'PROJECT' ? (
          <ProjectGrid list={allProjects} />
        ) : type === 'PLAYGROUND' ? (
          <PlaygroundList />
        ) : (
          <HackathonGrid />
        )}
      </section>
    </Fragment>
  );
};

export default Project;
