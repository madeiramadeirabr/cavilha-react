import React, { HTMLAttributes, HTMLProps } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperWidthModifiers,
  HelperDisplayModifiers,
} from '../cavilha';

export type InputElements = 'input__radio' | 'input__checkbox';
export type InputVariantModifiers = 'input--is-inline' | 'input--is-block';

export type InputProps = {
  variants?: string[];
  helpers?: (
    | HelperMarginModifiers
    | HelperFloatModifiers
    | HelperWidthModifiers
    | HelperDisplayModifiers
  )[];
  hasClassName?: string;
  isDisabled?: boolean;
  hasType: 'radio' | 'checkbox';
  name: string;
  value: string;
  isInline?: boolean;
} & HTMLAttributes<HTMLInputElement>;

function Input({
  isDisabled,
  variants,
  helpers,
  hasClassName,
  children,
  hasType,
  isInline,
  ...props
}: InputProps) {
  const className = classNames(
    [
      'input',
      isInline
        ? 'input--is-inline'
        : ('input--is-block' as InputVariantModifiers),
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );

  return (
    <label className={className}>
      <div className={`input__${hasType}` as InputElements}>
        <input type={hasType} {...(props as HTMLProps<HTMLInputElement>)} />
        <span className="input__marker"></span>
        <span className="input__text">{children}</span>
      </div>
    </label>
  );
}

export { Input };
