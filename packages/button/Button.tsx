import React, { HTMLProps, HTMLAttributes, ElementType } from 'react';
import { baseButton } from './BaseButton';
import { ButtonProps } from './types';

function Button({ ...props }: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
  const { content, buttonProps, className } = baseButton(props);
  const { type, href } = buttonProps;
  const Component: ElementType = href ? 'a' : 'button';
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

const ButtonHOC = (props: ButtonProps) => {
  const { content, buttonProps } = baseButton(props);

  return (Component: ElementType) => (
    <Component {...buttonProps}>{content}</Component>
  );
};

export { Button, ButtonHOC };
