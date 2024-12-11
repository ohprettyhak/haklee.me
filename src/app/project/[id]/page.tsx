import { FC, ReactElement } from 'react';

type PlaygroundProps = {
  params: Promise<{ id: string }>;
};

const Playground: FC<PlaygroundProps> = async ({ params }): Promise<ReactElement> => {
  const { id } = await params;

  return <div>{id}</div>;
};

export default Playground;
