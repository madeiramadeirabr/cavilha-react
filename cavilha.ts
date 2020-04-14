export type Colors =
  'primary' |
  'primary-one' |
  'primary-two' |
  'primary-three' |
  'primary-four' |
  'secondary' |
  'secondary-one' |
  'secondary-two' |
  'secondary-three' |
  'secondary-four' |
  'danger' |
  'danger-one' |
  'danger-two' |
  'danger-three' |
  'danger-four' |
  'success' |
  'success-one' |
  'success-two' |
  'success-three' |
  'success-four' |
  'gray-one' |
  'gray-two' |
  'gray-three' |
  'gray-four' |
  'gray-five' |
  'gray-six' |
  'gray-seven' |
  'white' |
  'background' |
  'text' |
  'default' |
  'black';

/**
 * @helper Background color
 */
export type HelperBackgroundColorModifiers =
  'helper--has-background-primary' |
  'helper--has-background-primary-one' |
  'helper--has-background-primary-two' |
  'helper--has-background-primary-three' |
  'helper--has-background-primary-four' |
  'helper--has-background-secondary' |
  'helper--has-background-secondary-one' |
  'helper--has-background-secondary-two' |
  'helper--has-background-secondary-three' |
  'helper--has-background-secondary-four' |
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
  'helper--has-background-danger-four' |
  'helper--has-background-default' |
  'helper--has-background-black' |
  'helper--has-background-text' |
  'helper--has-background-white'
  ;

export type HelperBackgroundModifiers = HelperBackgroundColorModifiers | 'helper--has-background-fixed';

export enum BackgroundColor {
  'primary' = 'helper--has-background-primary',
  'secondary' = 'helper--has-background-secondary',
  'success' = 'helper--has-background-success',
  'danger' = 'helper--has-background-danger'
}

/**
 * @helper Padding (gap)
 */
export type HelperGapModifiers =
  'helper--has-no-gap' |
  'helper--has-gap' |
  'helper--has-gap-left' |
  'helper--has-gap-right' |
  'helper--has-gap-top' |
  'helper--has-gap-bottom' |
  'helper--has-gap-vertical' |
  'helper--has-gap-vertical-extra-small' |
  'helper--has-gap-vertical-small' |
  'helper--has-gap-vertical-large' |
  'helper--has-gap-vertical-extra-large' |
  'helper--has-gap-horizontal' |
  'helper--has-gap-horizontal-extra-small' |
  'helper--has-gap-horizontal-small' |
  'helper--has-gap-horizontal-large' |
  'helper--has-gap-horizontal-extra-large' |
  // tablet
  'helper--has-no-gap-tablet' |
  'helper--has-gap-tablet' |
  'helper--has-gap-left-tablet' |
  'helper--has-gap-right-tablet' |
  'helper--has-gap-top-tablet' |
  'helper--has-gap-bottom-tablet' |
  'helper--has-gap-vertical-tablet' |
  'helper--has-gap-vertical-extra-small-tablet' |
  'helper--has-gap-vertical-small-tablet' |
  'helper--has-gap-vertical-large-tablet' |
  'helper--has-gap-vertical-extra-large-tablet' |
  'helper--has-gap-horizontal-tablet' |
  'helper--has-gap-horizontal-extra-small-tablet' |
  'helper--has-gap-horizontal-small-tablet' |
  'helper--has-gap-horizontal-large-tablet' |
  'helper--has-gap-horizontal-extra-large-tablet' |
  // mobile
  'helper--has-no-gap-mobile' |
  'helper--has-gap-mobile' |
  'helper--has-gap-left-mobile' |
  'helper--has-gap-right-mobile' |
  'helper--has-gap-top-mobile' |
  'helper--has-gap-bottom-mobile' |
  'helper--has-gap-vertical-mobile' |
  'helper--has-gap-vertical-extra-small-mobile' |
  'helper--has-gap-vertical-small-mobile' |
  'helper--has-gap-vertical-large-mobile' |
  'helper--has-gap-vertical-extra-large-mobile' |
  'helper--has-gap-horizontal-mobile' |
  'helper--has-gap-horizontal-extra-small-mobile' |
  'helper--has-gap-horizontal-small-mobile' |
  'helper--has-gap-horizontal-large-mobile' |
  'helper--has-gap-horizontal-extra-large-mobile';

export type HelperGapVerticalModifiers =
  'helper--has-gap-vertical-extra-small' |
  'helper--has-gap-vertical-small' |
  'helper--has-gap-vertical' |
  'helper--has-gap-vertical-large' |
  'helper--has-gap-vertical-extra-large' |
  // tablet
  'helper--has-gap-vertical-extra-small-tablet' |
  'helper--has-gap-vertical-small-tablet' |
  'helper--has-gap-vertical-tablet' |
  'helper--has-gap-vertical-large-tablet' |
  'helper--has-gap-vertical-extra-large-tablet' |
  // mobile
  'helper--has-gap-vertical-extra-small-mobile' |
  'helper--has-gap-vertical-small-mobile' |
  'helper--has-gap-vertical-mobile' |
  'helper--has-gap-vertical-large-mobile' |
  'helper--has-gap-vertical-extra-large-mobile';

export type HelperGapHorizontalModifiers =
  'helper--has-gap-horizontal-extra-small' |
  'helper--has-gap-horizontal-small' |
  'helper--has-gap-horizontal' |
  'helper--has-gap-horizontal-large' |
  'helper--has-gap-horizontal-extra-large' |
  // tablet
  'helper--has-gap-horizontal-extra-small-tablet' |
  'helper--has-gap-horizontal-small-tablet' |
  'helper--has-gap-horizontal-tablet' |
  'helper--has-gap-horizontal-large-tablet' |
  'helper--has-gap-horizontal-extra-large-tablet' |
  // mobile
  'helper--has-gap-horizontal-extra-small-mobile' |
  'helper--has-gap-horizontal-small-mobile' |
  'helper--has-gap-horizontal-mobile' |
  'helper--has-gap-horizontal-large-mobile' |
  'helper--has-gap-horizontal-extra-large-mobile';

/**
 * @helper Margin
 */
export type HelperMarginModifiers =
  'helper--has-no-margin' |
  'helper--has-margin-fix' |
  'helper--has-margin' |
  'helper--has-margin-left' |
  'helper--has-margin-right' |
  'helper--has-margin-top' |
  'helper--has-margin-bottom' |
  'helper--has-margin-vertical' |
  'helper--has-margin-vertical-extra-small' |
  'helper--has-margin-vertical-small' |
  'helper--has-margin-vertical-large' |
  'helper--has-margin-vertical-extra-large' |
  'helper--has-margin-horizontal' |
  'helper--has-margin-horizontal-extra-small' |
  'helper--has-margin-horizontal-small' |
  'helper--has-margin-horizontal-large' |
  'helper--has-margin-horizontal-extra-large' |
  // tablet
  'helper--has-no-margin-tablet' |
  'helper--has-margin-tablet' |
  'helper--has-margin-left-tablet' |
  'helper--has-margin-right-tablet' |
  'helper--has-margin-top-tablet' |
  'helper--has-margin-bottom-tablet' |
  'helper--has-margin-vertical-tablet' |
  'helper--has-margin-vertical-extra-small-tablet' |
  'helper--has-margin-vertical-small-tablet' |
  'helper--has-margin-vertical-large-tablet' |
  'helper--has-margin-vertical-extra-large-tablet' |
  'helper--has-margin-horizontal-tablet' |
  'helper--has-margin-horizontal-extra-small-tablet' |
  'helper--has-margin-horizontal-small-tablet' |
  'helper--has-margin-horizontal-large-tablet' |
  'helper--has-margin-horizontal-extra-large-tablet' |
  // mobile
  'helper--has-no-margin-mobile' |
  'helper--has-margin-mobile' |
  'helper--has-margin-left-mobile' |
  'helper--has-margin-right-mobile' |
  'helper--has-margin-top-mobile' |
  'helper--has-margin-bottom-mobile' |
  'helper--has-margin-vertical-mobile' |
  'helper--has-margin-vertical-extra-small-mobile' |
  'helper--has-margin-vertical-small-mobile' |
  'helper--has-margin-vertical-large-mobile' |
  'helper--has-margin-vertical-extra-large-mobile' |
  'helper--has-margin-horizontal-mobile' |
  'helper--has-margin-horizontal-extra-small-mobile' |
  'helper--has-margin-horizontal-small-mobile' |
  'helper--has-margin-horizontal-large-mobile' |
  'helper--has-margin-horizontal-extra-large-mobile';

export type HelperMarginVerticalModifiers =
  'helper--has-no-margin' |
  'helper--has-margin-fix' |
  'helper--has-margin-vertical-extra-small' |
  'helper--has-margin-vertical-small' |
  'helper--has-margin-vertical' |
  'helper--has-margin-vertical-large' |
  'helper--has-margin-vertical-extra-large' |
  // tablet
  'helper--has-margin-vertical-extra-small-tablet' |
  'helper--has-margin-vertical-small-tablet' |
  'helper--has-margin-vertical-tablet' |
  'helper--has-margin-vertical-large-tablet' |
  'helper--has-margin-vertical-extra-large-tablet' |
  // mobile
  'helper--has-margin-vertical-extra-small-mobile' |
  'helper--has-margin-vertical-small-mobile' |
  'helper--has-margin-vertical-mobile' |
  'helper--has-margin-vertical-large-mobile' |
  'helper--has-margin-vertical-extra-large-mobile';

export type HelperMarginHorizontalModifiers =
  'helper--has-no-margin' |
  'helper--has-margin-fix' |
  'helper--has-margin-horizontal-extra-small' |
  'helper--has-margin-horizontal-small' |
  'helper--has-margin-horizontal' |
  'helper--has-margin-horizontal-large' |
  'helper--has-margin-horizontal-extra-large' |
  // tablet
  'helper--has-margin-horizontal-extra-small-tablet' |
  'helper--has-margin-horizontal-small-tablet' |
  'helper--has-margin-horizontal-tablet' |
  'helper--has-margin-horizontal-large-tablet' |
  'helper--has-margin-horizontal-extra-large-tablet' |
  // mobile
  'helper--has-margin-horizontal-extra-small-mobile' |
  'helper--has-margin-horizontal-small-mobile' |
  'helper--has-margin-horizontal-mobile' |
  'helper--has-margin-horizontal-large-mobile' |
  'helper--has-margin-horizontal-extra-large-mobile';


/**
 * @helper Font weight
 */
export type HelperTextWeightModifiers =
  'helper--has-text-light' |
  'helper--has-text-regular' |
  'helper--has-text-semibold' |
  'helper--has-text-bold';

/**
 * @helper Text align
 */
export type HelperTextAlignModifiers =
  'helper--has-text-left' |
  'helper--has-text-center' |
  'helper--has-text-right' |
  'helper--has-text-justify' |
  // tablet
  'helper--has-text-left-tablet' |
  'helper--has-text-center-tablet' |
  'helper--has-text-right-tablet' |
  'helper--has-text-justify-tablet' |
  // mobile
  'helper--has-text-left-mobile' |
  'helper--has-text-center-mobile' |
  'helper--has-text-right-mobile' |
  'helper--has-text-justify-mobile';

/**
 * @helper Text transformation
 */
export type HelperTextTransformedModifiers =
  'helper--has-text-upper' |
  'helper--has-text-italic' |
  'helper--has-text-truncated';

/**
 * @helper Color
 */
export type HelperTextColorModifiers =
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
  'helper--has-color-danger-four' |
  'helper--has-color-default' |
  'helper--has-color-black' |
  'helper--has-color-background' |
  'helper--has-color-text' |
  'helper--has-color-white';

/**
 * @helper Shadow
 */
export type HelperShadowModifiers =
  'helper--has-shadow' |
  'helper--has-shadow-large' |
  'helper--has-no-shadow';

/**
 * @helper Scroll
 */
export type HelperScrollModifiers =
  'helper--has-scroll' |
  'helper--has-scroll-horizontal' |
  'helper--has-scroll-vertical' |
  'helper--has-no-scroll';

/**
 * @helper Float
 */
export type HelperFloatModifiers =
  'helper--is-on-left' |
  'helper--is-on-right';

/**
 * @helper Display
 */
export type HelperDisplayModifiers =
'helper--is-clearfix' |
'helper--is-block' |
'helper--is-inline' |
'helper--is-relative' |
'helper--is-hidden' |
'helper--is-hidden-desktop' |
'helper--is-hidden-tablet' |
'helper--is-hidden-mobile';

/**
 * @helper Flex aligment
 */
export type HelperFlexAligmentModifiers =
  'helper--is-flex' |
  'helper--has-content-start' |
  'helper--has-content-center' |
  'helper--has-content-end' |
  'helper--has-items-start' |
  'helper--has-items-center' |
  'helper--has-items-end' |
  'helper--has-self-align-star' |
  'helper--has-self-align-center' |
  'helper--has-self-align-end' |
  'helper--has-no-wrap';

/**
 * @helper Width
 */
export type HelperWidthModifiers =
'helper--is-full-width' |
'helper--is-full-view-width';

/**
 * @helper Height
 */
export type HelperHeightModifiers =
'helper--is-full-height' |
'helper--is-full-view-height';

/**
 * @helper Cursor
 */
export type HelperCursorModifiers = 'helper--has-pointer';


export type HelperBorderModifiers =
  'helper--has-border' |
  'helper--has-no-border' |
  'helper--has-border-double' |
  'helper--has-border-dashed' |
  'helper--has-border-color-default' |
  'helper--has-border-color-text' |
  'helper--has-border-color-white' |
  'helper--has-border-color-black' |
  'helper--has-border-color-primary' |
  'helper--has-border-color-primary-one' |
  'helper--has-border-color-primary-two' |
  'helper--has-border-color-primary-three' |
  'helper--has-border-color-primary-four' |
  'helper--has-border-color-secondary' |
  'helper--has-border-color-secondary-one' |
  'helper--has-border-color-secondary-two' |
  'helper--has-border-color-secondary-three' |
  'helper--has-border-color-secondary-four' |
  'helper--has-border-color-gray-one' |
  'helper--has-border-color-gray-two' |
  'helper--has-border-color-gray-three' |
  'helper--has-border-color-gray-four' |
  'helper--has-border-color-gray-five' |
  'helper--has-border-color-gray-six' |
  'helper--has-border-color-gray-seven' |
  'helper--has-border-color-success' |
  'helper--has-border-color-success-one' |
  'helper--has-border-color-success-two' |
  'helper--has-border-color-success-three' |
  'helper--has-border-color-success-four' |
  'helper--has-border-color-danger' |
  'helper--has-border-color-danger-one' |
  'helper--has-border-color-danger-two' |
  'helper--has-border-color-danger-three' |
  'helper--has-border-color-danger-four';


export type ElementColorProps = {
  hasBackground?: Colors
  hasColor?: Colors
}

export type CavilhaProps = {
  variants?: (string)[]
  helpers?: (string)[]
}
