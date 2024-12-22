import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

export const MoveLeftIcon = memo<IconProps>((props) => (
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
      className="lucide lucide-move-left"
    >
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </svg>
  </Icon>
));

MoveLeftIcon.displayName = 'MoveLeftIcon';
