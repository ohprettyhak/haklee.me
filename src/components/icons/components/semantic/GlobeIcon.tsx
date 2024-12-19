import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

export const GlobeIcon = memo<IconProps>((props) => (
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
      className="lucide lucide-globe"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  </Icon>
));

GlobeIcon.displayName = 'GlobeIcon';
