import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, ElementColorProps } from '../cavilha';
export declare type TableVariantModifiers = 'table--is-compact' | 'table--is-clean' | 'table--has-no-border';
export declare type TableValuesProps = Array<string | ReactNode>;
export declare type TableDataProps = {
    columns: Array<any>;
    rows: Array<TableValuesProps>;
};
export declare type TableProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperDisplayModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
    data: TableDataProps;
    isCompact?: boolean;
    isClean?: boolean;
    isBorderZero?: boolean;
} & ElementColorProps & HTMLAttributes<HTMLTableElement>;
declare function Table({ variants, helpers, hasClassName, children, data, isCompact, isClean, isBorderZero, ...props }: TableProps): JSX.Element;
export { Table };
