import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import React, { ComponentProps, FC, JSX, ReactElement, ReactNode } from 'react';

import * as styles from './styles.css';

type CommonProps<T extends keyof JSX.IntrinsicElements> = ComponentProps<T> & {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
};

type DivisionProps = CommonProps<'div'>;
type HeadingProps = CommonProps<'h2'>;

const TimelineList: FC<DivisionProps> = ({
  asChild,
  className,
  children,
  ...props
}): ReactElement => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp className={clsx(className, styles.list)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineItem: FC<DivisionProps> = ({
  asChild,
  className,
  children,
  ...props
}): ReactElement => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp className={clsx(className, styles.item)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineHeading: FC<HeadingProps> = ({
  asChild,
  className,
  children,
  ...props
}): ReactElement => {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp className={clsx(className, styles.heading)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineLine: FC = (): ReactElement => {
  return <div className={styles.line} />;
};

const TimelineDot: FC = (): ReactElement => {
  return <div className={styles.dot} />;
};

export { TimelineList, TimelineItem, TimelineHeading, TimelineLine, TimelineDot };
