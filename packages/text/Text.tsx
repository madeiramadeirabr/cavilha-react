import React, { HTMLProps, ReactNode, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import { childrenIsEmpty } from '../core/utils/children';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperGapModifiers,
  ElementColorProps,
  HelperFloatModifiers,
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
  hasText?: TextVariantModifier;
  variants?: TextVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperGapModifiers
    | HelperDisplayModifiers
    | HelperTextColorModifiers
    | HelperTextAlignModifiers
    | HelperFloatModifiers
  )[];
  hasClassName?: string;
  withPlaceholder?: boolean;
  hasFloat?: 'left' | 'right';
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
  withPlaceholder,
  hasFloat,
  ...props
}: TextProps) {
  const className = classNames(
    [
      'text',
      `text--is-${hasText}` as TextVariantModifiers,
      hasFloat ? (`helper--is-on-${hasFloat}` as HelperFloatModifiers) : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
      hasColor,
      hasBackground,
      placeholder: withPlaceholder ? childrenIsEmpty(children) : false,
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

  return component;
}

export { Text };
