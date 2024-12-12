import { FC, Fragment, ReactElement } from 'react';

import Playground from './_components/Playground';
import ProjectGrid from './_components/ProjectGrid';
import Tab from './_components/Tab';
import { getProjectList, type Project } from './_utils';
import * as styles from './page.css';

type ProjectProps = {
  searchParams: Promise<{ type: string }>;
};

const Project: FC<ProjectProps> = async ({ searchParams }): Promise<ReactElement> => {
  const projects: Project[] = getProjectList();

  const { type: _type } = await searchParams;
  let type: 'PROJECT' | 'PLAYGROUND';
  if (!_type || _type !== 'playground') type = 'PROJECT';
  else type = 'PLAYGROUND';

  return (
    <Fragment>
      <Tab className={styles.tab} current={type} />
      <section className={styles.root} data-animate={true}>
        {type === 'PROJECT' ? <ProjectGrid projects={projects} /> : <Playground />}
      </section>
    </Fragment>
  );
};

export default Project;
