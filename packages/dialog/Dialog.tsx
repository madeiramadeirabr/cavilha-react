import React, { HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperGapModifiers,
  HelperTextAlignModifiers,
  HelperFlexAligmentModifiers,
  ElementColorProps,
} from '../cavilha';

export enum DialogElements {
  'block' = 'dialog',
  'container' = 'dialog__container',
  'header' = 'dialog__header',
  'body' = 'dialog__body',
  'footer' = 'dialog__footer',
}

export type DialogVariants =
  | 'dialog--is-open'
  | 'dialog--is-transparent'
  | 'dialog--is-auto-width'
  | 'dialog--is-viewport'
  | 'dialog--is-relative';

export type DialogProps = {
  variants?: DialogVariants[];
  helpers?: string[];
  hasClassName?: string;
  isOpen?: boolean;
  isTransparent?: boolean;
  isAutoWidth?: boolean;
  isViewport?: boolean;
  isRelative?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Dialog({
  variants,
  helpers,
  hasClassName,
  children,
  isOpen,
  isTransparent,
  isAutoWidth,
  isViewport,
  isRelative,
  ...props
}: DialogProps) {
  const className = classNames(
    [
      DialogElements.block,
      isOpen ? ('dialog--is-open' as DialogVariants) : null,
      isTransparent ? ('dialog--is-transparent' as DialogVariants) : null,
      isAutoWidth ? ('dialog--is-auto-width' as DialogVariants) : null,
      isViewport ? ('dialog--is-viewport' as DialogVariants) : null,
      isRelative ? ('dialog--is-relative' as DialogVariants) : null,
    ],
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

export type DialogChildrenProps = {
  variants?: string[];
  helpers?: (
    | HelperGapModifiers
    | HelperTextAlignModifiers
    | HelperFlexAligmentModifiers
  )[];
  hasClassName?: string;
} & ElementColorProps &
  HTMLAttributes<HTMLDivElement>;

function Element(
  {
    variants,
    helpers,
    hasClassName,
    children,
    hasColor,
    hasBackground,
    ...props
  }: DialogChildrenProps,
  el: DialogElements
) {
  const className = classNames([el], {
    variants,
    helpers,
    hasClassName,
    hasColor,
    hasBackground,
  });
  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

Dialog.Container = (props: DialogChildrenProps) =>
  Element(props, DialogElements.container);
Dialog.Header = (props: DialogChildrenProps) =>
  Element(props, DialogElements.header);
Dialog.Body = (props: DialogChildrenProps) =>
  Element(props, DialogElements.body);
Dialog.Footer = (props: DialogChildrenProps) =>
  Element(props, DialogElements.footer);

export { Dialog };
