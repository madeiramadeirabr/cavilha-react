import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperGapModifiers,
  HelperDisplayModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps,
} from '../cavilha';

enum CardElements {
  'card' = 'card',
  'header' = 'card__header',
  'image' = 'card__image',
  'content' = 'card__content',
  'footer' = 'card__footer',
}

export type CardVariantModifiers =
  | 'card--has-no-shadow'
  | 'card--has-no-radius'
  | 'card--has-shadow-extra-small'
  | 'card--has-shadow-small'
  | 'card--has-shadow-large'
  | 'card--has-shadow-extra-large';

export type CardProps = {
  variants?: CardVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperGapModifiers
    | HelperDisplayModifiers
    | HelperFlexAligmentModifiers
  )[];
  hasClassName?: string;
  hasShadow?: 'no-shadow' | 'extra-small' | 'small' | 'large' | 'extra-large';
  children: ReactNode;
} & ElementColorProps &
  HTMLAttributes<HTMLDivElement>;

export type CardHeaderProps = CardProps;
export type CardContentProps = CardProps;
export type CardFooterProps = CardProps;

function Wrapper(
  {
    variants,
    helpers,
    hasClassName,
    hasBackground,
    hasColor,
    hasShadow,
    children,
    ...props
  }: CardProps,
  el: CardElements
) {
  const className = classNames(
    [
      el,
      hasShadow && hasShadow === 'no-shadow'
        ? (`card--has-no-shadow` as CardVariantModifiers)
        : null,
      hasShadow
        ? (`card--has-shadow-${hasShadow}` as CardVariantModifiers)
        : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
      hasBackground,
      hasColor,
    }
  );
  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

const Card = (props: CardProps) => Wrapper(props, CardElements.card);

Card.Header = (props: CardProps) => Wrapper(props, CardElements.header);
Card.Content = (props: CardProps) => Wrapper(props, CardElements.content);
Card.Footer = (props: CardProps) => Wrapper(props, CardElements.footer);

export { Card };
