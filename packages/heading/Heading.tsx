import React, {
  ReactNode,
  HTMLProps,
  HTMLAttributes
} from 'react';
import {
  classNames
} from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperDisplayModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperTextWeightModifiers,
  ElementColorProps
} from '../cavilha';


export type HelpersHeading = 'light' | 'regular' | 'semibold' | 'bold';

export type HeadingProps = {
  variants?: (string)[]
  helpers?: (
    HelperMarginModifiers |
    HelperFloatModifiers |
    HelperDisplayModifiers |
    HelperTextColorModifiers |
    HelperTextAlignModifiers
  )[]
  hasClassName?: string
  children: ReactNode
} & Pick<ElementColorProps, 'hasColor'> & HTMLAttributes<HTMLHeadingElement>;

export type HeadingHeroProps = {
  isHero?: true
}

export type HeadingWeightProps = {
  hasWeight?: HelpersHeading
}

function H1({
  variants, helpers, hasClassName, isHero, children, hasColor, ...props
}: HeadingProps & HeadingHeroProps) {
  const className = classNames([isHero ? 'h1--is-hero' : ''], {
    variants, helpers, hasClassName, hasColor
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
  variants, helpers, hasClassName, isHero, children, hasColor, ...props
}: HeadingProps & HeadingHeroProps) {
  const className = classNames([isHero ? 'h2--is-hero' : ''], {
    variants, helpers, hasClassName, hasColor
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
  variants, helpers, hasClassName, children, hasColor,  hasWeight, ...props
}: HeadingProps & HeadingWeightProps) {
  const className = classNames([
    '',
    hasWeight ? `helper--has-text-${hasWeight}` as HelperTextWeightModifiers : ''
  ], {
    variants, helpers, hasClassName, hasColor
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
  variants, helpers, hasClassName, children, hasColor, hasWeight, ...props
}: HeadingProps & HeadingWeightProps) {
  const className = classNames([
    '',
    hasWeight ? `helper--has-text-${hasWeight}` as HelperTextWeightModifiers : ''
  ], {
    variants, helpers, hasClassName, hasColor
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
  variants, helpers, hasClassName, children, hasColor, hasWeight, ...props
}: HeadingProps & HeadingWeightProps) {
  const className = classNames([
    '',
    hasWeight ? `helper--has-text-${hasWeight}` as HelperTextWeightModifiers : ''
  ], {
    variants, helpers, hasClassName, hasColor
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
