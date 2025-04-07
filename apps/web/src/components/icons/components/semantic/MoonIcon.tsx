import React, { FC } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

export const MoonIcon: FC<IconProps> = (props) => (
  <Icon type="stroke" {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-moon"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  </Icon>
);

MoonIcon.displayName = 'MoonIcon';
