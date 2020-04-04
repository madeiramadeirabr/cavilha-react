import React, {
  Ref,
  HTMLProps, forwardRef
} from 'react';
import { IButtonProps, ButtonTypes } from './types';


const Button = <T extends ButtonTypes>({
  href, iconLeft, iconRight, modifiers, children, loading, ...props
}: IButtonProps<T>, ref?: Ref<HTMLButtonElement>) => {

  const isAnchor = href || false;
  const hasIcon = (iconLeft || iconRight);

  // build css classes
  const className = [
    'button',
    hasIcon ? 'button--has-icon' : '',
    modifiers.type,
    [modifiers.variants ? modifiers.variants.join(' ') : ''],
    [modifiers.helpers ? modifiers.helpers.join(' ') : ''],
    [modifiers.misc ? modifiers.misc.join(' ') : ''],
  ].filter(Boolean).join(' ').trim();

  const text = hasIcon ? <span className="button__text">{children}</span> : children;
  const content = <>{ iconLeft || ''}{text}{ iconRight || ''}</>;


  if (isAnchor) {
    // eslint-disable-next-line no-param-reassign
    return (
      <a {...(props as HTMLProps<HTMLAnchorElement>)} href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button {...(props as HTMLProps<HTMLButtonElement>)} type="button" ref={ref} className={className}>
      {content}
    </button>
  );
}
;

const ButtonForwardRef = forwardRef(Button);

const ButtonWithRef = <T extends ButtonTypes>({ myRef, ...props }: IButtonProps<T> &
{ myRef: React.Ref<HTMLButtonElement> }) =>
  <ButtonForwardRef {...props} ref={myRef} />;

export { Button, ButtonWithRef };

