import React, { HTMLProps, ReactNode, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperGapModifiers,
  ElementColorProps,
} from '../cavilha';

export type TextVariantModifiers =
  | 'text--is-body-one-regular'
  | 'text--is-body-one-bold'
  | 'text--is-body-two-regular'
  | 'text--is-body-two-bold'
  | 'text--is-button'
  | 'text--is-caption'
  | 'text--is-overline';

export type TextVariantModifier =
  | 'body-one-regular'
  | 'body-one-bold'
  | 'body-two-regular'
  | 'body-two-bold'
  | 'button'
  | 'caption'
  | 'overline';

export type TextProps = {
  hasElement?: 'span' | 'p' | 'strong' | 'i';
  withMarginFix?: boolean;
  hasText?: TextVariantModifier;
  variants?: TextVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperGapModifiers
    | HelperDisplayModifiers
    | HelperTextColorModifiers
    | HelperTextAlignModifiers
  )[];
  hasClassName?: string;
  children: ReactNode;
} & ElementColorProps &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLSpanElement>;

function Text({
  hasElement,
  hasColor,
  hasBackground,
  hasText = 'body-one-regular',
  variants,
  helpers,
  hasClassName,
  children,
  withMarginFix,
  ...props
}: TextProps) {
  const className = classNames(
    ['text', `text--is-${hasText}` as TextVariantModifiers],
    {
      variants,
      helpers,
      hasClassName,
      hasColor,
      hasBackground,
    }
  );

  let component = (
    <p {...(props as HTMLProps<HTMLParagraphElement>)} className={className}>
      {children}
    </p>
  );

  if (hasElement === 'span') {
    component = (
      <span {...(props as HTMLProps<HTMLSpanElement>)} className={className}>
        {children}
      </span>
    );
  }

  if (hasElement === 'strong') {
    component = (
      <strong {...(props as HTMLProps<HTMLElement>)} className={className}>
        {children}
      </strong>
    );
  }

  if (hasElement === 'i') {
    component = (
      <i {...(props as HTMLProps<HTMLElement>)} className={className}>
        {children}
      </i>
    );
  }

  if (withMarginFix) {
    component = <div className="helper--has-margin-fix">{component}</div>;
  }

  return component;
}

export { Text };
