import { HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperBackgroundModifiers, ElementColorProps } from '../cavilha';
export declare type ImageVariantModifiers = 'image--is-cropped-extra-small' | 'image--is-cropped-small' | 'image--is-cropped' | 'image--is-cropped-large' | 'image--is-cropped-extra-large' | 'image--is-cropped-extra-small-tablet' | 'image--is-cropped-small-tablet' | 'image--is-cropped-tablet' | 'image--is-cropped-large-tablet' | 'image--is-cropped-extra-large-tablet' | 'image--is-cropped-extra-small-mobile' | 'image--is-cropped-small-mobile' | 'image--is-cropped-mobile' | 'image--is-cropped-large-mobile' | 'image--is-cropped-extra-large-mobile';
export declare type ImageProps = {
    variants?: ImageVariantModifiers[];
    helpers?: (HelperMarginModifiers | HelperDisplayModifiers | HelperBackgroundModifiers)[];
    hasClassName?: string;
    src: string;
    title?: string | null;
    withPlaceholder?: boolean;
} & Pick<ElementColorProps, 'hasBackground'> & HTMLAttributes<HTMLDivElement>;
declare function Image({ variants, helpers, hasClassName, hasBackground, src, title, withPlaceholder, ...props }: ImageProps): JSX.Element;
export { Image };
