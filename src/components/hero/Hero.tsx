import React, {
  HTMLProps
} from 'react';
import { HeroProps } from './types';
import { classNames } from '../../utils/classNames';


function Hero({
  variants, helpers, others, children, ...props
}: HeroProps) {
  return (
    <div 
      {...(props as HTMLProps<HTMLDivElement>)} 
      className={classNames(['hero'], { variants, helpers, others })}
    >
      {children}
    </div>
  );
}

export { Hero };