import React, {
  forwardRef,
  Ref
} from 'react';
import { ButtonProps } from './types';

/**
 * Component
 */
const Button = forwardRef(
  (
    { children, modifiers, loading, loadingText, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {

    // eslint-disable-next-line no-param-reassign
    props.ref = ref;

    const sass = [
      'button',
      modifiers.type,
      [modifiers.variants ? modifiers.variants.join(' ') : ''],
      [modifiers.helpers ? modifiers.helpers.join(' ') : ''],
      [modifiers.misc ? modifiers.misc.join(' ') : ''],
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    if (loading) {
      // eslint-disable-next-line no-param-reassign
      props.disabled = true;
    }

    return (
      <button type="button" className={sass} {...props}>
        {loading ? loadingText : children}
      </button>
    );
  }
);

export { Button };
