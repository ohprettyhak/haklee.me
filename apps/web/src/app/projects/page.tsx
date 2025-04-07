import { HackathonGrid } from './_components/hackathon-grid';
import { ProjectGrid } from './_components/project-grid';
import { ProjectTab } from './_components/project-tab';
import * as styles from './page.css';

type ProjectProps = {
  searchParams: Promise<{ tab: string }>;
};

const Project = async ({ searchParams }: ProjectProps) => {
  const { tab: _tab } = await searchParams;
  let tab: 'HACKATHON' | 'PROJECT';
  if (_tab === 'hackathons') tab = 'HACKATHON';
  else tab = 'PROJECT';

  return (
    <>
      <ProjectTab className={styles.tab} current={tab} />
      <section className={styles.root} data-animate={true}>
        {tab === 'PROJECT' ? <ProjectGrid /> : <HackathonGrid />}
      </section>
    </>
  );
};

export default Project;
