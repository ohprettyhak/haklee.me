'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC, ReactElement } from 'react';

type MdxComponentProps = {
  code: string;
};

const MdxComponent: FC<MdxComponentProps> = ({ code }): ReactElement => {
  const MDXComponent = useMDXComponent(code);

  return (
    <div data-article={true}>
      <MDXComponent />
    </div>
  );
};

export default MdxComponent;
