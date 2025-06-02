import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ComponentProps, JSX, ReactNode } from 'react';

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
    <Comp className={clsx('list-none', className)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineItem = ({ asChild, className, children, ...props }: DivisionProps) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp className={clsx('timeline-item', className)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineHeading = ({ asChild, className, children, ...props }: HeadingProps) => {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp className={clsx('text-[var(--color-text)] break-keep', className)} {...props}>
      {children}
    </Comp>
  );
};

const TimelineLine = () => {
  return <div className="timeline-line" />;
};

const TimelineDot = () => {
  return (
    <div className="absolute top-[0.438rem] left-[0.188rem] w-[0.5rem] h-[0.5rem] rounded-full bg-[var(--color-border)] transition-colors duration-300 ease-in-out" />
  );
};

export { TimelineList, TimelineItem, TimelineHeading, TimelineLine, TimelineDot };
