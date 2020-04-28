import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import { HelperMarginModifiers, HelperDisplayModifiers } from '../cavilha';

export type AlertColorModifier =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'white'
  | 'dark';

export type AlertVariantModifiers =
  | 'alert--is-primary'
  | 'alert--is-secondary'
  | 'alert--is-danger'
  | 'alert--is-sucess'
  | 'alert--is-white'
  | 'alert--is-dark'
  | 'alert--is-outline';

export type AlertProps = {
  variants?: string[];
  helpers?: (HelperMarginModifiers | HelperDisplayModifiers)[];
  hasClassName?: string;
  hasColor?: AlertColorModifier;
  hasIcon?: string | ReactNode;
  onClose?: any;
} & HTMLAttributes<HTMLDivElement>;

export type CloseProps = {} & HTMLAttributes<HTMLButtonElement>;

function Alert({
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  hasIcon,
  onClose,
  ...props
}: AlertProps) {
  const className = classNames(
    [
      'alert',
      hasColor ? (`alert--is-${hasColor}` as AlertVariantModifiers) : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );
  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {hasIcon ? <div className="alert__icon">{hasIcon}</div> : null}
      <div className="alert__content">{children}</div>
      <button
        onClick={onClose}
        className="alert__close"
        type="button"
        dangerouslySetInnerHTML={{ __html: '&times;' }}
      />
    </div>
  );
}

export { Alert };
