import React, {
  ReactNode,
  HTMLProps,
  HTMLAttributes
} from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperGapModifiers,
  HelperDisplayModifiers,
  HelperBackgroundModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps
} from '../cavilha';

export type HeroVariantModifiers =
  'hero--has-navbar' |
  'hero--has-no-radius';

export type HeroSizesModifiers =
  'hero--has-is-auto' |
  'hero--has-is-extra-small' |
  'hero--has-is-small' |
  'hero--has-is-large' |
  'hero--has-is-extra-large';

export type HeroSizes =
  'auto' |
  'extra-small' |
  'small' |
  'large' |
  'extra-large'

export type HeroProps = {
  variants?: (HeroVariantModifiers)[]
  helpers?: (
    HelperMarginModifiers |
    HelperGapModifiers |
    HelperDisplayModifiers |
    HelperBackgroundModifiers |
    HelperFlexAligmentModifiers
  )[]
  customCss?: string
  isSize?: HeroSizes
  hasImage?: string
  children: ReactNode
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;

function Hero({
  variants,
  helpers,
  customCss,
  children,
  hasColor,
  isSize,
  hasBackground,
  hasImage,
  ...props
}: HeroProps) {

  const sizes = isSize ? `hero--is-${isSize}` as HeroSizesModifiers : ''
  const className = classNames(['hero', sizes], {
    variants, helpers, customCss, hasColor, hasBackground
  })

  return (
    <div className="helper--has-margin-fix">
      <div
        {...(props as HTMLProps<HTMLDivElement>)}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}

export { Hero };
