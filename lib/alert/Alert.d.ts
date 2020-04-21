import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers } from '../cavilha';
export declare type AlertColorModifier = 'primary' | 'secondary' | 'danger' | 'success' | 'white' | 'dark';
export declare type AlertVariantModifiers = 'alert--is-primary' | 'alert--is-secondary' | 'alert--is-danger' | 'alert--is-sucess' | 'alert--is-white' | 'alert--is-dark' | 'alert--is-outline';
export declare type AlertProps = {
    variants?: (string)[];
    helpers?: (HelperMarginModifiers | HelperDisplayModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
    hasColor?: AlertColorModifier;
    hasIcon?: string | ReactNode;
    onClose?: any;
} & HTMLAttributes<HTMLDivElement>;
export declare type CloseProps = {} & HTMLAttributes<HTMLButtonElement>;
declare function Alert({ variants, helpers, hasClassName, children, hasColor, hasIcon, onClose, ...props }: AlertProps): JSX.Element;
export { Alert };
