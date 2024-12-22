import { FC, Fragment, ReactElement } from 'react';

import { getMarkdownList, type Markdown } from '@/utils/markdown';

import PlaygroundList from './_components/PlaygroundList';
import ProjectGrid from './_components/ProjectGrid';
import Tab from './_components/Tab';
import * as styles from './page.css';

type ProjectProps = {
  searchParams: Promise<{ type: string }>;
};

const Project: FC<ProjectProps> = async ({ searchParams }): Promise<ReactElement> => {
  const projects: Markdown[] = getMarkdownList('PROJECT');

  const { type: _type } = await searchParams;
  let type: 'PROJECT' | 'PLAYGROUND';
  if (!_type || _type !== 'playground') type = 'PROJECT';
  else type = 'PLAYGROUND';

  return (
    <Fragment>
      <Tab className={styles.tab} current={type} />
      <section className={styles.root} data-animate={true}>
        {type === 'PROJECT' ? <ProjectGrid projects={projects} /> : <PlaygroundList />}
      </section>
    </Fragment>
  );
};

export default Project;
