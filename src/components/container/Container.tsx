import React, {
  HTMLProps
} from 'react';
import { ContainerProps } from './types';
import { classNames } from '../../utils/classNames';
import { CONTAINER_BLOCK }from './constants';


function Container({
  variants, helpers, others, children, ...props
}: ContainerProps) {
  return (
    <div 
      {...(props as HTMLProps<HTMLDivElement>)} 
      className={classNames([CONTAINER_BLOCK], { variants, helpers, others })}
    >
      {children}
    </div>
  );
}

export { Container };