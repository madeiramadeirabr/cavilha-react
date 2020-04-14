import React, {
  ReactNode,
  HTMLProps,
  HTMLAttributes
} from 'react';
import {
  classNames
} from '../../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperDisplayModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperTextWeightModifiers,
  ElementColorProps
} from '../../cavilha';

export type HelpersHeadingAvailable =
  Extract<HelperTextWeightModifiers, 'helper--has-text-semibold'> |
  Extract<HelperTextWeightModifiers, 'helper--has-text-light'>;

export type HeadingProps = {
  variants?: (string)[]
  helpers?: (
    HelpersHeadingAvailable |
    HelperMarginModifiers |
    HelperFloatModifiers |
    HelperDisplayModifiers |
    HelperTextColorModifiers |
    HelperTextAlignModifiers
  )[]
  customCss?: string
  children: ReactNode
} & Pick<ElementColorProps, 'hasColor'> & HTMLAttributes<HTMLHeadingElement>;

export type HeadingHeroProps = {
  isHero?: true
}

function H1({
  variants, helpers, customCss, isHero, children, hasColor, ...props
}: HeadingProps & HeadingHeroProps) {
  const className = classNames([isHero ? 'h1--is-hero' : ''], {
    variants, helpers, customCss, hasColor
  })
  return (
    <div className="helper--has-margin-fix">
      <h1
        {...(props as HTMLProps<HTMLHeadingElement>)}
        className={className}
      >
        {children}
      </h1>
    </div>
  );
}

function H2({
  variants, helpers, customCss, isHero, children, hasColor, ...props
}: HeadingProps & HeadingHeroProps) {
  const className = classNames([isHero ? 'h2--is-hero' : ''], {
    variants, helpers, customCss, hasColor
  })
  return (
    <div className="helper--has-margin-fix">
      <h2
        {...(props as HTMLProps<HTMLHeadingElement>)}
        className={className}
      >
        {children}
      </h2>
    </div>
  );
}

function H3({
  variants, helpers, customCss, children, hasColor, ...props
}: HeadingProps) {
  const className = classNames([''], {
    variants, helpers, customCss, hasColor
  })
  return (
    <div className="helper--has-margin-fix">
      <h3
        {...(props as HTMLProps<HTMLHeadingElement>)}
        className={className}
      >
        {children}
      </h3>
    </div>
  );
}

function H4({
  variants, helpers, customCss, children, hasColor, ...props
}: HeadingProps) {
  const className = classNames([''], {
    variants, helpers, customCss, hasColor
  })
  return (
    <div className="helper--has-margin-fix">
      <h4
        {...(props as HTMLProps<HTMLHeadingElement>)}
        className={className}
      >
        {children}
      </h4>
    </div>
  );
}

function H5({
  variants, helpers, customCss, children, hasColor, ...props
}: HeadingProps) {
  const className = classNames([''], {
    variants, helpers, customCss, hasColor
  })
  return (
    <div className="helper--has-margin-fix">
      <h5
        {...(props as HTMLProps<HTMLHeadingElement>)}
        className={className}
      >
        {children}
      </h5>
    </div>
  );
}

export { H1, H2, H3, H4, H5 };
