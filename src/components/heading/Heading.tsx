import React, {
  HTMLProps
} from 'react';
import { HeadingProps } from './types';
import { classNames } from '../../utils/classNames';


function H1({
  variants, helpers, others, children, ...props
}: HeadingProps) {
  return (
    <h1 
      {...(props as HTMLProps<HTMLHeadingElement>)} 
      className={classNames([], { variants, helpers, others })}
    >
      {children}
    </h1>
  );
}

function H2({
  variants, helpers, others, children, ...props
}: HeadingProps) {
  return (
    <h2 
      {...(props as HTMLProps<HTMLHeadingElement>)} 
      className={classNames([], { variants, helpers, others })}
    >
      {children}
    </h2>
  );
}

function H3({
  variants, helpers, others, children, ...props
}: HeadingProps) {
  return (
    <h3 
      {...(props as HTMLProps<HTMLHeadingElement>)} 
      className={classNames([], { variants, helpers, others })}
    >
      {children}
    </h3>
  );
}

function H4({
  variants, helpers, others, children, ...props
}: HeadingProps) {
  return (
    <h4 
      {...(props as HTMLProps<HTMLHeadingElement>)} 
      className={classNames([], { variants, helpers, others })}
    >
      {children}
    </h4>
  );
}

function H5({
  variants, helpers, others, children, ...props
}: HeadingProps) {
  return (
    <h5 
      {...(props as HTMLProps<HTMLHeadingElement>)} 
      className={classNames([], { variants, helpers, others })}
    >
      {children}
    </h5>
  );
}

export { H1, H2, H3, H4, H5 };