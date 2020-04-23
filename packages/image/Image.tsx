import React, { HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import { childrenIsEmpty } from '../core/utils/children';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperBackgroundModifiers,
  ElementColorProps,
} from '../cavilha';

const BLOCK = 'image';

export type ImageVariantModifiers =
  | 'image--is-cropped-extra-small'
  | 'image--is-cropped-small'
  | 'image--is-cropped'
  | 'image--is-cropped-large'
  | 'image--is-cropped-extra-large'
  // tablet
  | 'image--is-cropped-extra-small-tablet'
  | 'image--is-cropped-small-tablet'
  | 'image--is-cropped-tablet'
  | 'image--is-cropped-large-tablet'
  | 'image--is-cropped-extra-large-tablet'
  // mobile
  | 'image--is-cropped-extra-small-mobile'
  | 'image--is-cropped-small-mobile'
  | 'image--is-cropped-mobile'
  | 'image--is-cropped-large-mobile'
  | 'image--is-cropped-extra-large-mobile';

export type ImageProps = {
  variants?: ImageVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperDisplayModifiers
    | HelperBackgroundModifiers
  )[];
  hasClassName?: string;
  src: string;
  title?: string | null;
  withPlaceholder?: boolean;
} & Pick<ElementColorProps, 'hasBackground'> &
  HTMLAttributes<HTMLDivElement>;

function Image({
  variants,
  helpers,
  hasClassName,
  hasBackground,
  src,
  title,
  withPlaceholder,
  ...props
}: ImageProps) {
  const className = classNames([BLOCK], {
    variants,
    helpers,
    hasClassName,
    hasBackground,
    placeholder: withPlaceholder ? childrenIsEmpty(src) : false,
  });
  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      <img src={src} alt={title || ''} />
    </div>
  );
}

export { Image };
