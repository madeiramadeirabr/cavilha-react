import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import { HelperMarginModifiers, HelperDisplayModifiers } from '../cavilha';
import { Link, LinkProps } from 'react-router-dom';

export type ChipColorModifier =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'white'
  | 'dark';

export type ChipVariantModifiers =
  | 'chip--is-primary'
  | 'chip--is-secondary'
  | 'chip--is-danger'
  | 'chip--is-sucess'
  | 'chip--is-white'
  | 'chip--is-dark'
  | 'chip--is-outline';

export type ChipProps = {
  variants?: string[];
  helpers?: (HelperMarginModifiers | HelperDisplayModifiers)[];
  hasClassName?: string;
  children?: ReactNode;
  hasColor?: ChipColorModifier;
  isOutline?: boolean;
  isLink?: boolean;
  to?: string;
} & HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;

export type CloseProps = {} & HTMLAttributes<HTMLButtonElement>;

function Chip({
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  isOutline,
  isLink,
  ...props
}: ChipProps) {
  const className = classNames(
    [
      'chip',
      hasColor ? (`chip--is-${hasColor}` as ChipVariantModifiers) : null,
      isOutline ? ('chip--is-outline' as ChipVariantModifiers) : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );
  if (isLink) {
    return (
      <Link {...(props as LinkProps)} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <span {...(props as HTMLProps<HTMLSpanElement>)} className={className}>
      {children}
    </span>
  );
}

function Close({ ...props }: CloseProps) {
  const className = classNames(['chip__close'], {});
  return (
    <button
      {...(props as HTMLProps<HTMLButtonElement>)}
      className={className}
      type="button"
      dangerouslySetInnerHTML={{ __html: '&times;' }}
    ></button>
  );
}

Chip.Close = Close;

export { Chip };
