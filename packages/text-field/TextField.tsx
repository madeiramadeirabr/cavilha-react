import React, { HTMLAttributes, HTMLProps, ReactNode } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperWidthModifiers,
  HelperDisplayModifiers,
} from '../cavilha';

export enum TextFieldElements {
  'block' = 'text-field',
  'label' = 'text-field__label',
  'helper' = 'text-field__helper',
  'icon' = 'text-field__icon',
}

export type TextFieldVariantModifiers =
  | 'input--is-active'
  | 'input--is-positive'
  | 'input--is-negative';

export type TextFieldProps = {
  variants?: TextFieldVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperFloatModifiers
    | HelperWidthModifiers
    | HelperDisplayModifiers
  )[];
  hasClassName?: string;
  isDisabled?: boolean;
  hasType?: 'input' | 'textarea';
  isInline?: boolean;
  label: string;
  helper?: string;
  hasModifier?: 'active' | 'positive' | 'negative';
  hasIconLeft?: string | ReactNode;
  hasIconRight?: string | ReactNode;
} & HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

function TextField({
  isDisabled,
  variants,
  helpers,
  hasClassName,
  hasType,
  inputMode,
  label,
  helper,
  hasModifier,
  hasIconLeft,
  hasIconRight,
  ...props
}: TextFieldProps) {
  const className = classNames(
    [
      TextFieldElements['block'],
      hasModifier ? `text-field--is-${hasModifier}` : null,
      hasIconLeft ? `text-field--has-icon-left` : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );

  function Icon({
    direction,
    children,
  }: HTMLProps<HTMLSpanElement> & { direction?: 'left' | 'right' }) {
    return (
      <span
        className={`${TextFieldElements['icon']} ${TextFieldElements['icon']}--is-${direction}`}
      >
        {children}
      </span>
    );
  }

  return (
    <div className={className}>
      <label>
        {hasIconLeft || <Icon direction="left">{hasIconLeft}</Icon>}
        {hasType === 'textarea' ? (
          <textarea {...(props as HTMLProps<HTMLTextAreaElement>)} required />
        ) : (
          <input
            type={inputMode || 'text'}
            {...(props as HTMLProps<HTMLInputElement>)}
            required
          />
        )}

        <span className={TextFieldElements['label']}>{label}</span>
        {helper ? (
          <span className={TextFieldElements['helper']}>{helper}</span>
        ) : null}
        {hasIconRight || <Icon direction="right">{hasIconRight}</Icon>}
      </label>
    </div>
  );
}

export { TextField };
