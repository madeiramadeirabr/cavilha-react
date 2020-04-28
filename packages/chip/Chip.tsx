import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import { HelperMarginModifiers, HelperDisplayModifiers } from '../cavilha';

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
  hasColor?: ChipColorModifier;
  isOutline?: boolean;
  href?: string;
} & HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;

export type CloseProps = {} & HTMLAttributes<HTMLButtonElement>;

function Chip({
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  isOutline,
  href,
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
    />
  );
}

Chip.Close = Close;

export { Chip };
