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
  HelperDisplayModifiers
} from '../cavilha';
import { Link, LinkProps } from 'react-router-dom';

export type BadgeColorModifier =
  'primary' |
  'secondary' |
  'danger' |
  'success' |
  'white' |
  'dark';

export type BadgeVariantModifiers =
  'badge--is-primary' |
  'badge--is-secondary' |
  'badge--is-danger' |
  'badge--is-sucess' |
  'badge--is-white' |
  'badge--is-dark' |
  'badge--is-pill' |
  'badge--is-floating' |
  'badge--is-outline';

export type SectionProps = {
  variants?: (string)[]
  helpers?: (
    HelperMarginModifiers |
    HelperDisplayModifiers
  )[]
  hasClassName?: string
  children?: ReactNode
  hasColor?: BadgeColorModifier
  isPill?: boolean
  isFloating?: boolean
  isOutline?: boolean
  isLink?: boolean
  to?: string
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
  isLink,
  ...props
}: SectionProps) {
  const className = classNames(['badge',
  hasColor ? `badge--is-${hasColor}` as BadgeVariantModifiers : null,
  isPill ? 'badge--is-pill' as BadgeVariantModifiers : null,
  isFloating ? 'badge--is-floating' as BadgeVariantModifiers : null,
  isOutline ? 'badge--is-outline' as BadgeVariantModifiers : null,
], {
    variants, helpers, hasClassName,
  })
  if (isLink) {
    return (
      <Link
        {...(props as LinkProps)}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return (
    <span
      {...(props as HTMLProps<HTMLSpanElement>)}
      className={className}
    >
      {children}
    </span>
  );
}

export { Badge };
