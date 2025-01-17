import React, { FC } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

export const CommandIcon: FC<IconProps> = (props) => (
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
      className="lucide lucide-command"
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  </Icon>
);

CommandIcon.displayName = 'CommandIcon';
