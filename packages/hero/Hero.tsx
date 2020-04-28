import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperGapModifiers,
  HelperDisplayModifiers,
  HelperBackgroundModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps,
} from '../cavilha';

export type HeroVariantModifiers = 'hero--has-navbar' | 'hero--has-no-radius';

export type HeroSizesModifiers =
  | 'hero--has-is-auto'
  | 'hero--has-is-extra-small'
  | 'hero--has-is-small'
  | 'hero--has-is-large'
  | 'hero--has-is-extra-large';

export type HeroSizes =
  | 'auto'
  | 'extra-small'
  | 'small'
  | 'large'
  | 'extra-large';

export type HeroProps = {
  variants?: HeroVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperGapModifiers
    | HelperDisplayModifiers
    | HelperBackgroundModifiers
    | HelperFlexAligmentModifiers
  )[];
  hasClassName?: string;
  hasSize?: HeroSizes;
  isRadiusZero?: boolean;
  hasImage?: string;
  isNavbar?: boolean;
  children: ReactNode;
} & ElementColorProps &
  HTMLAttributes<HTMLDivElement>;

function Hero({
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  hasSize,
  isNavbar,
  isRadiusZero,
  hasBackground,
  hasImage,
  ...props
}: HeroProps) {
  const className = classNames(
    [
      'hero',
      hasSize ? (`hero--is-${hasSize}` as HeroSizesModifiers) : '',
      isRadiusZero ? (`hero--has-no-radius` as HeroSizesModifiers) : '',
      isNavbar ? (`hero--has-navbar` as HeroSizesModifiers) : '',
    ],
    {
      variants,
      helpers,
      hasClassName,
      hasColor,
      hasBackground,
    }
  );

  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

export { Hero };
