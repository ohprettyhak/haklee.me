import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

export const MDNLogo = memo<IconProps>((props) => (
  <Icon type="fill" {...props}>
    <svg
      width="131"
      height="120"
      viewBox="0 0 131 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M52.03 0.73999L15.25 119.18H0.209961L36.86 0.73999H52.03Z" fill="#1870F0" />
      <path d="M65.3998 0.73999H52.0298V119.18H65.3998V0.73999Z" fill="#1870F0" />
      <path d="M117.23 0.73999L80.5798 119.18H65.5298L102.18 0.73999H117.23Z" fill="#1870F0" />
      <path d="M130.6 0.73999H117.23V119.18H130.6V0.73999Z" fill="#1870F0" />
    </svg>
  </Icon>
));

MDNLogo.displayName = 'MDNLogo';
