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
  HelperFlexAligmentModifiers,
  ElementColorProps
 } from '../cavilha';

enum CardElements {
  'card' = 'card',
  'header' = 'card__header',
  'image' = 'card__image',
  'content' = 'card__content',
  'footer' = 'card__footer'
}

export type CardVariantModifiers =
  'card--has-no-shadow' |
  'card--has-no-border-radius';

export type CardProps = {
  variants?: (CardVariantModifiers)[]
  helpers?: (
    HelperMarginModifiers |
    HelperGapModifiers |
    HelperDisplayModifiers |
    HelperFlexAligmentModifiers
  )[]
  customCss?: string
  children: ReactNode
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;

export type CardHeaderProps = CardProps;
export type CardContentProps = CardProps;
export type CardFooterProps = CardProps;

function Wrapper({
  variants, helpers, customCss,
  hasBackground, hasColor,
  children,
  ...props
}: CardProps, el: CardElements) {
  const className = classNames([el], {
    variants, helpers, customCss, hasBackground, hasColor
  });
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
