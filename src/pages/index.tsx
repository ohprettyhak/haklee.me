import type { HeadFC } from 'gatsby';
import React, { ReactElement } from 'react';

import Layout from '@/components/Layout';
import AwardSection from '@/sections/AwardSection';
import ContactSection from '@/sections/ContactSection';
import EducationSection from '@/sections/EducationSection';
import IntroduceSection from '@/sections/IntroduceSection';
import ProfileSection from '@/sections/ProfileSection';
import ProjectSection from '@/sections/ProjectSection';
import WorkExperienceSection from '@/sections/WorkExperienceSection';

import '@/styles/globals.css';

const IndexPage = (): ReactElement => {
  return (
    <Layout>
      <ProfileSection />
      <IntroduceSection />
      <ContactSection />
      <EducationSection />
      <WorkExperienceSection />
      <ProjectSection />
      <AwardSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hak Lee</title>;
