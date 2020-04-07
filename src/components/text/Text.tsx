import React, {
  HTMLProps
} from 'react';
import { TextProps } from './types';
import { classNames } from '../../utils/classNames';


function Text({
  as, variants, helpers, others, children, ...props
}: TextProps) {
  switch(as) {
    case 'body-one-bold':
    case 'body-one-regular':
    case 'body-two-regular':
    case 'body-two-bold':
    default:
      return (
        <p 
          {...(props as HTMLProps<HTMLParagraphElement>)} 
          className={classNames([], { variants, helpers, others })}
        >
          {children}
        </p>
      );

    case 'caption': 
    case 'overline': 
      return (
        <span 
          {...(props as HTMLProps<HTMLSpanElement>)} 
          className={classNames([], { variants, helpers, others })}
        >
          {children}
        </span>
      );
  }
  
}

export { Text };