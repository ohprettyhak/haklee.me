import React, { FC } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

export const VercelLogo: FC<IconProps> = (props) => (
  <Icon type="fill" {...props}>
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  </Icon>
);

VercelLogo.displayName = 'VercelLogo';
