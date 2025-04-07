/** eslint-disable-next-line react/prop-types  */
import { cloneElement, FC, ReactElement } from 'react';

import Child from './child';
import { DEFAULT_ICON_FILL, DEFAULT_ICON_STROKE, DEFAULT_ICON_SIZE } from './constants';
import { IconProps } from './types';

const Icon: FC<IconProps> = ({
  children,
  width,
  height,
  size = DEFAULT_ICON_SIZE,
  fill = DEFAULT_ICON_FILL,
  stroke = DEFAULT_ICON_STROKE,
  type = 'fill',
  ...props
}): ReactElement => {
  return cloneElement(<Child>{children}</Child>, {
    ...(type === 'fill' ? { fill } : {}),
    ...(type === 'stroke' ? { stroke } : {}),
    width: width ?? size,
    height: height ?? size,
    ...props,
  });
};

export default Icon;
