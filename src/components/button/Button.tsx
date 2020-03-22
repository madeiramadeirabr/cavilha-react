import React, {
  ElementType,
  ComponentPropsWithRef,
  forwardRef,
  Ref,
} from 'react';

/**
 * Util
 */
type MergeElementProps<T extends ElementType, P extends object = {}> = Omit<
ComponentPropsWithRef<T>,
keyof P
> &
P;

/**
 * Props
 */
type ButtonTypeModifiers = 'button--is-primary' | 'button--is-secondary';
type ButtonVariantModifiers =
  | 'button--is-outline'
  | 'button--is-small'
  | 'button--is-large'
  | 'button--is-extra-large'
  | 'button--is-disabled';
type ButtonHelperModifiers = 'helper--is-full-width';

type ButtonModifiers = {
  type: ButtonTypeModifiers;
  variants?: Array<ButtonVariantModifiers>;
  helpers?: Array<ButtonHelperModifiers>;
};

type ButtonProps = MergeElementProps<
'button',
{
  id: string;
  modifiers: ButtonModifiers;
  loading?: boolean;
  loadingText?: string;
}
>;

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

    const classes = [
      'button',
      modifiers.type,
      [modifiers.variants ? modifiers.variants.join(' ') : ''],
      [modifiers.helpers ? modifiers.helpers.join(' ') : ''],
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    if (loading) {
      // eslint-disable-next-line no-param-reassign
      props.disabled = true;
    }
    return (
      <button type="button" className={classes} {...props}>
        {loading ? loadingText : children}
      </button>
    );
  }
);

export { Button };
