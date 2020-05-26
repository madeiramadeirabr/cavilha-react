import React, { HTMLProps } from 'react';
import { classNames } from '../core/utils/classNames';
import { SectionProps } from './types';

function Block({
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
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

export { Block };
