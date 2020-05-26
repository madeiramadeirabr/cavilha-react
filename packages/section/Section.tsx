import React, { HTMLProps } from 'react';
import { classNames } from '../core/utils/classNames';
import { SectionProps } from './types';

function Section({
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  hasBackground,
  ...props
}: SectionProps) {
  const className = classNames([], {
    variants,
    helpers,
    hasClassName,
    hasColor,
    hasBackground,
  });
  return (
    <section {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </section>
  );
}

export { Section };
