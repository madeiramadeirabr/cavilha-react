import React, { HTMLProps, HTMLAttributes } from 'react';
import { BaseButtonProps, baseButton } from './BaseButton';

function Button({
  ...props
}: BaseButtonProps & HTMLAttributes<HTMLButtonElement>) {
  const { content, buttonProps, className } = baseButton(props);
  const { type, href } = buttonProps;

  const Component = href ? 'a' : 'button';
  const componentProps = href
    ? buttonProps
    : {
        ...(buttonProps as HTMLProps<HTMLButtonElement>),
        type: type || 'button',
      };

  return (
    <Component {...componentProps} className={className}>
      {content}
    </Component>
  );
}

export { Button };
