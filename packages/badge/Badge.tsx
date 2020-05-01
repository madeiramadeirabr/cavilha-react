import React, { HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperFloatModifiers,
} from '../cavilha';

export type BadgeColorModifier =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'white'
  | 'dark';

export type BadgeVariantModifiers =
  | 'badge--is-primary'
  | 'badge--is-secondary'
  | 'badge--is-danger'
  | 'badge--is-sucess'
  | 'badge--is-white'
  | 'badge--is-dark'
  | 'badge--is-pill'
  | 'badge--is-floating'
  | 'badge--is-outline';

export type BadgeProps = {
  variants?: string[];
  helpers?: (
    | HelperMarginModifiers
    | HelperDisplayModifiers
    | HelperFloatModifiers
  )[];
  hasClassName?: string;
  hasColor?: BadgeColorModifier;
  isPill?: boolean;
  isFloating?: boolean;
  isOutline?: boolean;
  href?: string;
  hasFloat?: 'left' | 'right';
} & HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;

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
