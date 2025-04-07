import { cloneElement } from 'react';

import Child from './child';
import { DEFAULT_ICON_SIZE } from './constants';
import { IconProps } from './types';

const Icon = ({ children, width, height, size = DEFAULT_ICON_SIZE, ...props }: IconProps) => {
  return cloneElement(<Child>{children}</Child>, {
    width: width ?? size,
    height: height ?? size,
    ...props,
  });
};

export default Icon;
