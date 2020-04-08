export type HelperHasBackgroundModifiers = 'helper--has-background-primary' |
'helper--has-background-primary-one' |
'helper--has-background-primary-two' |
'helper--has-background-primary-three' |
'helper--has-background-primary-four' |
'helper--has-background-secondary' |
'helper--has-background-secondary-one' |
'helper--has-background-secondary-two' |
'helper--has-background-secondary-three' |
'helper--has-background-secondary-four' |
'helper--has-background-white' |
'helper--has-background-gray-one' |
'helper--has-background-gray-two' |
'helper--has-background-gray-three' |
'helper--has-background-gray-four' |
'helper--has-background-gray-five' |
'helper--has-background-gray-six' |
'helper--has-background-gray-seven' |
'helper--has-background-success' |
'helper--has-background-success-one' |
'helper--has-background-success-two' |
'helper--has-background-success-three' |
'helper--has-background-success-four' |
'helper--has-background-danger' |
'helper--has-background-danger-one' |
'helper--has-background-danger-two' |
'helper--has-background-danger-three' |
'helper--has-background-danger-four';

export type HelperHasGapModifiers =
'helper--has-no-gap' |
'helper--has-gap' |
'helper--has-gap-left' |
'helper--has-gap-right' |
'helper--has-gap-top' |
'helper--has-gap-bottom' |
'helper--has-gap-vertical' |
'helper--has-gap-horizontal' |
'helper--has-no-gap-tablet' |
'helper--has-gap-tablet' |
'helper--has-gap-left-tablet' |
'helper--has-gap-right-tablet' |
'helper--has-gap-top-tablet' |
'helper--has-gap-bottom-tablet' |
'helper--has-gap-vertical-tablet' |
'helper--has-gap-horizontal-tablet' |
'helper--has-no-gap-mobile' |
'helper--has-gap-mobile' |
'helper--has-gap-left-mobile' |
'helper--has-gap-right-mobile' |
'helper--has-gap-top-mobile' |
'helper--has-gap-bottom-mobile' |
'helper--has-gap-vertical-mobile' |
'helper--has-gap-horizontal-mobile';


export type HelperHasMarginModifiers =
  'helper--has-no-margin' |
  'helper--has-margin' |
  'helper--has-margin-left' |
  'helper--has-margin-right' |
  'helper--has-margin-top' |
  'helper--has-margin-bottom' |
  'helper--has-margin-vertical' |
  'helper--has-margin-vertical-large' |
  'helper--has-margin-horizontal' |
  'helper--has-margin-horizontal-large' |
  'helper--has-no-margin-tablet' |
  'helper--has-margin-tablet' |
  'helper--has-margin-left-tablet' |
  'helper--has-margin-right-tablet' |
  'helper--has-margin-top-tablet' |
  'helper--has-margin-bottom-tablet' |
  'helper--has-margin-vertical-tablet' |
  'helper--has-margin-horizontal-tablet' |
  'helper--has-no-margin-mobile' |
  'helper--has-margin-mobile' |
  'helper--has-margin-left-mobile' |
  'helper--has-margin-right-mobile' |
  'helper--has-margin-top-mobile' |
  'helper--has-margin-bottom-mobile' |
  'helper--has-margin-vertical-mobile' |
  'helper--has-margin-horizontal-mobile';


export type HelperHasTextWeightModifiers =
'helper--has-text-light' |
'helper--has-text-regular' |
'helper--has-text-semibold' |
'helper--has-text-bold';

export type HelpersHeadingAvailable = 'helper--is-hero' | 
Extract<HelperHasTextWeightModifiers, 'helper--has-text-semibold'> | 
Extract<HelperHasTextWeightModifiers, 'helper--has-text-light'>;

export type HelperHasTextAlignModifiers =
'helper--has-text-left' |
'helper--has-text-center' |
'helper--has-text-right' |
'helper--has-text-left-mobile' |
'helper--has-text-center-mobile' |
'helper--has-text-right-mobile' |
'helper--has-text-justify';

export type HelperHasTextTransformedModifiers =
'helper--has-text-upper' |
'helper--has-text-italic' |
'helper--has-text-truncated';

export type HelperHasTextColorModifiers =
'helper--has-color-primary' |
'helper--has-color-primary-one' |
'helper--has-color-primary-two' |
'helper--has-color-primary-three' |
'helper--has-color-primary-four' |
'helper--has-color-secondary' |
'helper--has-color-secondary-one' |
'helper--has-color-secondary-two' |
'helper--has-color-secondary-three' |
'helper--has-color-secondary-four' |
'helper--has-color-white' |
'helper--has-color-gray-one' |
'helper--has-color-gray-two' |
'helper--has-color-gray-three' |
'helper--has-color-gray-four' |
'helper--has-color-gray-five' |
'helper--has-color-gray-six' |
'helper--has-color-gray-seven' |
'helper--has-color-success' |
'helper--has-color-success-one' |
'helper--has-color-success-two' |
'helper--has-color-success-three' |
'helper--has-color-success-four' |
'helper--has-color-danger' |
'helper--has-color-danger-one' |
'helper--has-color-danger-two' |
'helper--has-color-danger-three' |
'helper--has-color-danger-four';

export type HelperHasShadowModifiers = 'helper--has-shadow' |
'helper--has-shadow-large' |
'helper--has-no-shadow';

export type HelperHasScrollModifiers = 'helper--has-scroll-horizontal' |
'helper--has-no-scroll';

export type HelperIsFloatModifiers = 'helper--is-on-left' |
'helper--is-on-right';

export type HelperIsDisplayModifiers = 'helper--is-clearfix' |
'helper--is-block' |
'helper--is-inline' |
'helper--is-relative' |
'helper--is-hidden' |
'helper--is-hidden-desktop' |
'helper--is-hidden-tablet' |
'helper--is-hidden-mobile';

export type HelperIsWidthModifiers = 'helper--is-full-width';
export type HelperIsHeightModifiers = 'helper--is-full-height';
export type HelperHasCursorModifiers = 'helper--has-pointer';

export type HeroVariantModifiers = 'hero--has-no-radius' | 
'hero--is-medium' | 
'hero--is-large' | 
'hero--is-fullheight' | 
'hero--is-primary' | 
'hero--is-secondary' | 
'hero--is-danger' | 
'hero--is-success' | 
'hero--is-gray-one' | 
'hero--is-gray-two' | 
'hero--is-gray-three' | 
'hero--is-gray-four' | 
'hero--is-gray-five' | 
'hero--is-gray-six' | 
'hero--is-gray-seven';

export type CardVariantModifiers = 'card--no-border-radius';