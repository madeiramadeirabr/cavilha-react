import { ReactNode, HTMLAttributes } from 'react';
import { HelperDisplayModifiers, HelperMarginVerticalModifiers, HelperGapVerticalModifiers, HelperFlexAligmentModifiers } from '../cavilha';
export declare type GridRowVariantModifiers = 'grid__row--is-reverse' | 'grid__row--has-horizontal-scroll-mobile';
export declare type GridRowProps = {
    variants?: GridRowVariantModifiers[];
    helpers?: (HelperMarginVerticalModifiers | HelperGapVerticalModifiers | HelperDisplayModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
    children: ReactNode;
    isReverse?: boolean;
} & HTMLAttributes<HTMLDivElement>;
export declare type GridColumnVariantModifiers = 'grid__column--is-one' | 'grid__column--is-two' | 'grid__column--is-three' | 'grid__column--is-four' | 'grid__column--is-five' | 'grid__column--is-six' | 'grid__column--is-seven' | 'grid__column--is-eight' | 'grid__column--is-nine' | 'grid__column--is-ten' | 'grid__column--is-eleven' | 'grid__column--is-twelve' | 'grid__column--is-one-tablet' | 'grid__column--is-two-tablet' | 'grid__column--is-three-tablet' | 'grid__column--is-four-tablet' | 'grid__column--is-five-tablet' | 'grid__column--is-six-tablet' | 'grid__column--is-seven-tablet' | 'grid__column--is-eight-tablet' | 'grid__column--is-nine-tablet' | 'grid__column--is-ten-tablet' | 'grid__column--is-eleven-tablet' | 'grid__column--is-twelve-tablet' | 'grid__column--is-one-mobile' | 'grid__column--is-two-mobile' | 'grid__column--is-three-mobile' | 'grid__column--is-four-mobile' | 'grid__column--is-five-mobile' | 'grid__column--is-six-mobile' | 'grid__column--is-seven-mobile' | 'grid__column--is-eight-mobile' | 'grid__column--is-nine-mobile' | 'grid__column--is-ten-mobile' | 'grid__column--is-eleven-mobile' | 'grid__column--is-twelve-mobile';
export declare type ColumnSize = null | 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'eleven' | 'twelve';
export declare enum ColumnSizes {
    'one' = 0,
    'two' = 1,
    'three' = 2,
    'four' = 3,
    'five' = 4,
    'six' = 5,
    'seven' = 6,
    'eight' = 7,
    'nine' = 8,
    'ten' = 9,
    'eleven' = 10,
    'twelve' = 11
}
export declare type GridColumnProps = {
    variants?: GridColumnVariantModifiers[];
    helpers?: (HelperMarginVerticalModifiers | HelperGapVerticalModifiers | HelperDisplayModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
    hasSize?: ColumnSize;
    mobile?: ColumnSize;
    tablet?: ColumnSize;
    desktop?: ColumnSize;
} & HTMLAttributes<HTMLDivElement>;
declare function Row({ variants, helpers, hasClassName, children, isReverse, ...props }: GridRowProps): JSX.Element;
declare function Column({ variants, helpers, hasClassName, children, mobile, tablet, desktop, hasSize, ...props }: GridColumnProps): JSX.Element;
export { Row, Column };
