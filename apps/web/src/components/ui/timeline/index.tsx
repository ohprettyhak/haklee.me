import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ComponentProps, JSX, ReactNode } from 'react';

import * as styles from './styles.css';

type CommonProps<T extends keyof JSX.IntrinsicElements> = ComponentProps<T> & {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
};

type DivisionProps = CommonProps<'div'>;
type HeadingProps = CommonProps<'h2'>;

const TimelineList = ({ asChild, className, children, ...props }: DivisionProps) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp className={clsx(className, styles.list)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineItem = ({ asChild, className, children, ...props }: DivisionProps) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp className={clsx(className, styles.item)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineHeading = ({ asChild, className, children, ...props }: HeadingProps) => {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp className={clsx(className, styles.heading)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineLine = () => {
  return <div className={styles.line} />;
};

const TimelineDot = () => {
  return <div className={styles.dot} />;
};

export { TimelineList, TimelineItem, TimelineHeading, TimelineLine, TimelineDot };
