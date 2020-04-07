import React, {
  Ref,
  HTMLProps, forwardRef
} from 'react';
import { IButtonProps, ButtonTypes } from './types';
import { BUTTON_BLOCK, BUTTON_MODIFIER_DISABLED } from './constants';


const Button = <T extends ButtonTypes>({
  href, 
  iconLeft, 
  iconRight, 
  type, 
  variants, 
  helpers, 
  others, 
  children, 
  loading, 
  ...props
}: IButtonProps<T>, ref?: Ref<HTMLButtonElement>) => {

  const isAnchor = href || false;
  const hasIcon = (iconLeft || iconRight);

  // build css classes
  const cavilha = [
    BUTTON_BLOCK,
    hasIcon ? 'button--has-icon' : null,
    type || null,
    [variants ? variants.join(' ') : null],
    [helpers ? helpers.join(' ') : null],
    [others ? others.join(' ') : null],
  ].filter(Boolean);

  const text = hasIcon ? 
    <span className="button__text">{children}</span> 
    : children;
  const content = <>{ iconLeft || ''}{text}{ iconRight || ''}</>;

  if (loading) {
    if (!cavilha.includes(BUTTON_MODIFIER_DISABLED)) {
      cavilha.push(BUTTON_MODIFIER_DISABLED);
    }
  }

  const className = cavilha.join(' ').trim();

  if (isAnchor) {
    return (
      <a 
        {...(props as HTMLProps<HTMLAnchorElement>)} 
        href={href} 
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      {...(props as HTMLProps<HTMLButtonElement>)} 
      type="button" 
      ref={ref} 
      className={className}
    >
      {content}
    </button>
  );
}
;

const ButtonForwardRef = forwardRef(Button);

const ButtonWithRef = <T extends ButtonTypes>({ 
  buttonRef, 
  ...props 
}: IButtonProps<T> &
{ buttonRef: React.Ref<HTMLButtonElement> }) =>
  <ButtonForwardRef {...props} ref={buttonRef} />;

export { Button, ButtonWithRef };

