import React, {
  HTMLProps, HTMLAttributes
} from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperBackgroundModifiers,
  ElementColorProps
} from '../cavilha';

const BLOCK = 'image'

export type ImageVariantModifiers =
  'image--is-cropped-extra-small' |
  'image--is-cropped-small' |
  'image--is-cropped' |
  'image--is-cropped-large' |
  'image--is-cropped-extra-large' |
  // tablet
  'image--is-cropped-extra-small-tablet' |
  'image--is-cropped-small-tablet' |
  'image--is-cropped-tablet' |
  'image--is-cropped-large-tablet' |
  'image--is-cropped-extra-large-tablet' |
  // mobile
  'image--is-cropped-extra-small-mobile' |
  'image--is-cropped-small-mobile' |
  'image--is-cropped-mobile' |
  'image--is-cropped-large-mobile' |
  'image--is-cropped-extra-large-mobile';


export type ImageProps = {
  variants?: (ImageVariantModifiers)[]
  helpers?: (
    HelperMarginModifiers |
    HelperDisplayModifiers |
    HelperBackgroundModifiers
  )[]
  customCss?: string
  src: string
  title?: string | null
} & Pick<ElementColorProps, 'hasBackground'> & HTMLAttributes<HTMLDivElement>;

function Image({
  variants,
  helpers,
  customCss,
  hasBackground,
  src,
  title,
  ...props
}: ImageProps) {
  const className = classNames([BLOCK], {
    variants, helpers, customCss, hasBackground
  })
  return (
    <div
      {...(props as HTMLProps<HTMLDivElement>)}
      className={className}
    >
      <img src={src} alt={title || ""} />
    </div>
  );
}

export { Image };
