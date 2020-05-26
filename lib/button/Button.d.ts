import { HTMLAttributes, ElementType } from 'react';
import { ButtonProps } from './types';
declare function Button({ ...props }: ButtonProps & HTMLAttributes<HTMLButtonElement>): JSX.Element;
declare const ButtonHOC: (props: ButtonProps) => (Component: ElementType) => JSX.Element;
export { Button, ButtonHOC };
