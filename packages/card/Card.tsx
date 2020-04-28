import React, { HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import { CardProps, CardVariantModifiers, CardElements } from './types';

function Wrapper(
  {
    variants,
    helpers,
    hasClassName,
    hasBackground,
    hasColor,
    hasShadow,
    children,
    href,
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

  if (href) {
    return (
      <a
        {...(props as HTMLProps<HTMLAnchorElement>)}
        href={href}
        className={className}
      >
        {children}
      </a>
    );
  }

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
