'use client';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { FC, ReactElement } from 'react';

type MdxComponentProps = {
  code: string;
};

export const MdxComponent: FC<MdxComponentProps> = ({ code }): ReactElement => {
  const MDXComponent = useMDXComponent(code);

  return (
    <div data-article-content={true}>
      <MDXComponent />
    </div>
  );
};
