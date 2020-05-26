import { ReactNode, HTMLAttributes } from 'react';
import { ButtonProps } from './types';
declare function baseButton({ hasColor, isLink, hasSize, isOutline, isLoading, isDisabled, hasIconLeft, hasIconRight, variants, helpers, hasClassName, hasShape, wrapper, children, ...props }: ButtonProps & HTMLAttributes<HTMLElement>): {
    content: ReactNode;
    buttonProps: ButtonProps;
    className: string;
};
export { baseButton };
