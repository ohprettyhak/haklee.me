'use client';
import { FC, Fragment, ReactElement, useState } from 'react';

import { Signature } from '@/components/signature';

const SignatureCraftPage: FC = (): ReactElement => {
  const [key, seyKey] = useState<number>(0);

  const refresh = (): void => {
    seyKey((prev) => prev + 1);
  };

  return (
    <Fragment>
      <Signature key={key} />
      <button onClick={refresh}>Refresh</button>
    </Fragment>
  );
};

export default SignatureCraftPage;
