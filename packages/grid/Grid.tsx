import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperDisplayModifiers,
  HelperMarginVerticalModifiers,
  HelperGapVerticalModifiers,
  HelperFlexAligmentModifiers,
} from '../cavilha';

export type GridRowVariantModifiers =
  | 'grid__row--is-reverse'
  | 'grid__row--has-horizontal-scroll-mobile';

export type GridRowProps = {
  variants?: GridRowVariantModifiers[];
  helpers?: (
    | HelperMarginVerticalModifiers
    | HelperGapVerticalModifiers
    | HelperDisplayModifiers
    | HelperFlexAligmentModifiers
  )[];
  hasClassName?: string;
  children: ReactNode;
  isReverse?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type GridColumnVariantModifiers =
  | 'grid__column--is-one'
  | 'grid__column--is-two'
  | 'grid__column--is-three'
  | 'grid__column--is-four'
  | 'grid__column--is-five'
  | 'grid__column--is-six'
  | 'grid__column--is-seven'
  | 'grid__column--is-eight'
  | 'grid__column--is-nine'
  | 'grid__column--is-ten'
  | 'grid__column--is-eleven'
  | 'grid__column--is-twelve'
  | 'grid__column--is-one-tablet'
  | 'grid__column--is-two-tablet'
  | 'grid__column--is-three-tablet'
  | 'grid__column--is-four-tablet'
  | 'grid__column--is-five-tablet'
  | 'grid__column--is-six-tablet'
  | 'grid__column--is-seven-tablet'
  | 'grid__column--is-eight-tablet'
  | 'grid__column--is-nine-tablet'
  | 'grid__column--is-ten-tablet'
  | 'grid__column--is-eleven-tablet'
  | 'grid__column--is-twelve-tablet'
  | 'grid__column--is-one-mobile'
  | 'grid__column--is-two-mobile'
  | 'grid__column--is-three-mobile'
  | 'grid__column--is-four-mobile'
  | 'grid__column--is-five-mobile'
  | 'grid__column--is-six-mobile'
  | 'grid__column--is-seven-mobile'
  | 'grid__column--is-eight-mobile'
  | 'grid__column--is-nine-mobile'
  | 'grid__column--is-ten-mobile'
  | 'grid__column--is-eleven-mobile'
  | 'grid__column--is-twelve-mobile';

export type ColumnSize =
  | null
  | 'one'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'six'
  | 'seven'
  | 'eight'
  | 'nine'
  | 'ten'
  | 'eleven'
  | 'twelve';

export enum ColumnSizes {
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
}

export type GridColumnProps = {
  variants?: GridColumnVariantModifiers[];
  helpers?: (
    | HelperMarginVerticalModifiers
    | HelperGapVerticalModifiers
    | HelperDisplayModifiers
    | HelperFlexAligmentModifiers
  )[];
  hasClassName?: string;
  children?: ReactNode;
  hasSize?: ColumnSize;
  mobile?: ColumnSize;
  tablet?: ColumnSize;
  desktop?: ColumnSize;
} & HTMLAttributes<HTMLDivElement>;

enum GridElements {
  'row' = 'grid__row',
  'columns' = 'grid__columns',
  'column' = 'grid__column',
}

function Row({
  variants,
  helpers,
  hasClassName,
  children,
  isReverse,
  ...props
}: GridRowProps) {
  const className = classNames(
    [GridElements.row, isReverse ? 'grid__row--is-reverse' : ''],
    {
      variants,
      helpers,
      hasClassName,
    }
  );

  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

function Column({
  variants,
  helpers,
  hasClassName,
  children,
  mobile,
  tablet,
  desktop,
  hasSize,
  ...props
}: GridColumnProps) {
  const sizes = [];
  if (mobile) sizes.push(`${GridElements.column}--is-${mobile}-mobile`);
  if (tablet) sizes.push(`${GridElements.column}--is-${tablet}-tablet`);
  if (desktop) sizes.push(`${GridElements.column}--is-${desktop}`);
  if (hasSize) sizes.push(`${GridElements.column}--is-${hasSize}`);
  return (
    <div
      {...(props as HTMLProps<HTMLDivElement>)}
      className={classNames([GridElements.column, ...sizes], {
        variants,
        helpers,
        hasClassName,
      })}
    >
      {children || ''}
    </div>
  );
}

export { Row, Column };
