import { HackathonGrid } from './_components/hackathon-grid';
import { ProjectGrid } from './_components/project-grid';
import { ProjectTab } from './_components/project-tab';

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
      <ProjectTab
        className="px-[var(--spacing-inline)] mb-[calc(var(--spacing-inline)*2)]"
        current={tab}
      />
      <section className="px-[var(--spacing-inline)]" data-animate={true}>
        {tab === 'PROJECT' ? <ProjectGrid /> : <HackathonGrid />}
      </section>
    </>
  );
};

export default Project;
