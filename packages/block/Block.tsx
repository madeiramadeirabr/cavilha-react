import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperGapModifiers,
  HelperBackgroundModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps,
} from '../cavilha';

export type SectionProps = {
  variants?: string[];
  helpers?: (
    | HelperMarginModifiers
    | HelperGapModifiers
    | HelperDisplayModifiers
    | HelperTextAlignModifiers
    | HelperBackgroundModifiers
    | HelperTextColorModifiers
    | HelperFlexAligmentModifiers
  )[];
  hasClassName?: string;
} & ElementColorProps &
  HTMLAttributes<HTMLDivElement>;

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
