import React, {
  ReactNode,
  HTMLProps,
  HTMLAttributes
} from 'react';
import {
  classNames
} from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperGapModifiers,
  HelperBackgroundModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps,
  HelperWidthModifiers
} from '../cavilha';

enum CollectionElements {
  'block' = 'collection',
  'item' = 'collection__item'
}

export type CollectionVariantModifiers =
'collection--is-horizontal' |
'collection--is-vertical';

export type CollectionDirectionModifier = 'horizontal' | 'vertical';

export type CollectionProps = {
  isDirection?: CollectionDirectionModifier
  variants?: (string)[]
  helpers?: (
    HelperMarginModifiers |
    HelperGapModifiers |
    HelperDisplayModifiers |
    HelperTextAlignModifiers |
    HelperBackgroundModifiers |
    HelperTextColorModifiers |
    HelperFlexAligmentModifiers
  )[]
  customCss?: string
  children?: ReactNode
} & ElementColorProps & HTMLAttributes<HTMLUListElement>;

export type ItemProps = {
  variants?: (string)[]
  helpers?: (
    HelperMarginModifiers |
    HelperGapModifiers |
    HelperDisplayModifiers |
    HelperTextAlignModifiers |
    HelperBackgroundModifiers |
    HelperTextColorModifiers |
    HelperFlexAligmentModifiers |
    HelperWidthModifiers
  )[]
  customCss?: string
  children?: ReactNode
} & ElementColorProps & HTMLAttributes<HTMLLIElement>;



function Collection({
  isDirection = "horizontal",
  variants,
  helpers,
  customCss,
  children,
  hasColor,
  hasBackground,
  ...props
}: CollectionProps) {
  const className = classNames(
    [CollectionElements.block, `collection--is-${isDirection}` as CollectionVariantModifiers],
    { variants, helpers, customCss, hasColor, hasBackground}
  )
  return (
    <div className="helper--has-margin-fix helper--is-full-height">
      <ul
        {...(props as HTMLProps<HTMLUListElement>)}
        className={className}
      >
        {children}
      </ul>
    </div>
  );
}

function Item({
  variants,
  helpers,
  customCss,
  children,
  hasColor,
  hasBackground,
  ...props
}: ItemProps) {
  const className = classNames([CollectionElements.item], {
    variants, helpers, customCss, hasColor, hasBackground
  })
  return (
      <li
        {...(props as HTMLProps<HTMLLIElement>)}
        className={className}
      >
        {children}
      </li>
  );
}

Collection.Item = Item

export { Collection };
