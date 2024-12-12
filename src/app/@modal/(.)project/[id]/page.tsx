import { FC, ReactElement } from 'react';

import Modal from './modal';

type ProjectModalProps = {
  params: Promise<{ id: string }>;
};

const ProjectModal: FC<ProjectModalProps> = async ({ params }): Promise<ReactElement> => {
  const { id } = await params;
  alert(id);
  return <Modal />;
};

export default ProjectModal;
