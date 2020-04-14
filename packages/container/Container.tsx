import React, {
  ReactNode,
  HTMLProps,
  HTMLAttributes
} from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperBackgroundModifiers,
  HelperMarginVerticalModifiers,
  HelperGapVerticalModifiers,
  HelperGapHorizontalModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps
} from '../cavilha';

export type ContainerVariantModifiers =
'container--has-sidebar' |
'container--is-full-width' |
'container--is-full-width-tablet' |
'container--is-full-width-mobile';

export type ContainerProps = {
  variants?: (ContainerVariantModifiers)[]
  helpers?: (
    HelperBackgroundModifiers |
    HelperMarginVerticalModifiers |
    HelperGapVerticalModifiers |
    HelperGapHorizontalModifiers |
    HelperFlexAligmentModifiers
  )[]
  customCss?: string
  children: ReactNode
} & Pick<ElementColorProps, 'hasBackground'> & HTMLAttributes<HTMLDivElement>;

export const CONTAINER_BLOCK = 'container';

function Container({
  variants, helpers, customCss, children, hasBackground, ...props
}: ContainerProps) {
  const className = classNames([CONTAINER_BLOCK], {
    variants, helpers, customCss, hasBackground
  })
  return (
    <div
      {...(props as HTMLProps<HTMLDivElement>)}
      className={className}
    >
      {children}
    </div>
  );
}

export { Container };
