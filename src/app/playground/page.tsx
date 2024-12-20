import { FC, Fragment, ReactElement } from 'react';

import { theme } from '@/styles';

const Projects: FC = (): ReactElement => {
  return (
    <Fragment>
      <p style={{ paddingInline: theme.sizes.appSpace, color: theme.colors.text }}>
        준비중입니다..
      </p>
    </Fragment>
  );
};

export default Projects;
