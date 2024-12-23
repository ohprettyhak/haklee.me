'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';

type MdxComponentProps = {
  code: string;
};

const MdxComponent = ({ code }: MdxComponentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <div data-content={true}>
      <MDXComponent />
    </div>
  );
};

export default MdxComponent;
