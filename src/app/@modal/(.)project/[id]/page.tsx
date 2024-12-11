import { FC, ReactElement } from 'react';

type PlaygroundModalProps = {
  params: Promise<{ id: string }>;
};

const PlaygroundModal: FC<PlaygroundModalProps> = async ({ params }): Promise<ReactElement> => {
  const { id } = await params;

  return <div>{id}</div>;
};

export default PlaygroundModal;
