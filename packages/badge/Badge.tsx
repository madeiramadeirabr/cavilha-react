import React, { HTMLProps } from 'react';
import { classNames } from '../core/utils/classNames';
import { HelperFloatModifiers } from '../cavilha';
import { BadgeProps, BadgeVariantModifiers } from './types';

function Badge({
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  isPill,
  isFloating,
  isOutline,
  href,
  hasFloat,
  ...props
}: BadgeProps) {
  const className = classNames(
    [
      'badge',
      hasColor ? (`badge--is-${hasColor}` as BadgeVariantModifiers) : null,
      isPill ? ('badge--is-pill' as BadgeVariantModifiers) : null,
      isFloating ? ('badge--is-floating' as BadgeVariantModifiers) : null,
      isOutline ? ('badge--is-outline' as BadgeVariantModifiers) : null,
      hasFloat ? (`helper--is-on-${hasFloat}` as HelperFloatModifiers) : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );
  if (href) {
    return (
      <a {...(props as HTMLProps<HTMLAnchorElement>)} className={className}>
        {children}
      </a>
    );
  }
  return (
    <span {...(props as HTMLProps<HTMLSpanElement>)} className={className}>
      {children}
    </span>
  );
}

export { Badge };
