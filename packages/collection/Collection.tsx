import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperGapModifiers,
  HelperBackgroundModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps,
  HelperWidthModifiers,
  HelperHeightModifiers,
} from '../cavilha';

enum CollectionElements {
  'block' = 'collection',
  'item' = 'collection__item',
}

export type CollectionVariantModifiers =
  | 'collection--is-horizontal'
  | 'collection--is-vertical';

export type CollectionDirectionModifier = 'horizontal' | 'vertical';

export type CollectionProps = {
  hasDirection?: CollectionDirectionModifier;
  variants?: string[];
  helpers?: (
    | HelperMarginModifiers
    | HelperGapModifiers
    | HelperDisplayModifiers
    | HelperTextAlignModifiers
    | HelperBackgroundModifiers
    | HelperTextColorModifiers
    | HelperFlexAligmentModifiers
    | HelperWidthModifiers
    | HelperHeightModifiers
  )[];
  hasClassName?: string;
  children?: ReactNode;
} & ElementColorProps &
  HTMLAttributes<HTMLUListElement>;

export type ItemProps = {
  variants?: string[];
  helpers?: (
    | HelperMarginModifiers
    | HelperGapModifiers
    | HelperDisplayModifiers
    | HelperTextAlignModifiers
    | HelperBackgroundModifiers
    | HelperTextColorModifiers
    | HelperFlexAligmentModifiers
    | HelperWidthModifiers
    | HelperHeightModifiers
  )[];
  hasClassName?: string;
  children?: ReactNode;
} & ElementColorProps &
  HTMLAttributes<HTMLLIElement>;

function Collection({
  hasDirection = 'horizontal',
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  hasBackground,
  ...props
}: CollectionProps) {
  const className = classNames(
    [
      CollectionElements.block,
      `collection--is-${hasDirection}` as CollectionVariantModifiers,
      'helper--has-margin-fix',
      'helper--is-full-height',
    ],
    { variants, helpers, hasClassName, hasColor, hasBackground }
  );
  return (
    <ul {...(props as HTMLProps<HTMLUListElement>)} className={className}>
      {children}
    </ul>
  );
}

function Item({
  variants,
  helpers,
  hasClassName,
  children,
  hasColor,
  hasBackground,
  ...props
}: ItemProps) {
  const className = classNames([CollectionElements.item], {
    variants,
    helpers,
    hasClassName,
    hasColor,
    hasBackground,
  });
  return (
    <li {...(props as HTMLProps<HTMLLIElement>)} className={className}>
      {children}
    </li>
  );
}

Collection.Item = Item;

export { Collection };
