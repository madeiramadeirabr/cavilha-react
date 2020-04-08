import { ReactNode } from 'react';
import { 
  HelperHasMarginModifiers, 
  HelperIsDisplayModifiers, 
  HelperHasGapModifiers } from '../../cavilha';

export type GridRowVariantModifiers = 'grid__row--is-reverse' | 'grid__row--has-horizontal-scroll-mobile';

export type GridMarginHelperModifiers = 
Extract<HelperHasMarginModifiers, 'helper--has-margin-vertical-extra-small'> | 
Extract<HelperHasMarginModifiers, 'helper--has-margin-vertical-small'> | 
Extract<HelperHasMarginModifiers, 'helper--has-margin-vertical'> | 
Extract<HelperHasMarginModifiers, 'helper--has-margin-vertical-large'> | 
Extract<HelperHasMarginModifiers, 'helper--has-margin-vertical-extra-large' >;

export type GridGapHelperModifiers = 
Extract<HelperHasGapModifiers, 'helper--has-gap-vertical-extra-small'> | 
Extract<HelperHasGapModifiers, 'helper--has-gap-vertical-small'> | 
Extract<HelperHasGapModifiers, 'helper--has-gap-vertical'> | 
Extract<HelperHasGapModifiers, 'helper--has-gap-vertical-large'> | 
Extract<HelperHasGapModifiers, 'helper--has-gap-vertical-extra-large'>;

export type GridRowProps = {
  variants?: (GridRowVariantModifiers)[]
  helpers?: (
    GridMarginHelperModifiers | 
    GridGapHelperModifiers | 
    HelperIsDisplayModifiers 
  )[]
  others?: (string)[]
  children: ReactNode
};

export type GridColumnVariantModifiers = 
'grid__column--is-one' |
'grid__column--is-two' |
'grid__column--is-three' |
'grid__column--is-four' |
'grid__column--is-five' |
'grid__column--is-six' |
'grid__column--is-seven' |
'grid__column--is-eight' |
'grid__column--is-nine' |
'grid__column--is-ten' |
'grid__column--is-eleven' |
'grid__column--is-twelve' |

'grid__column--is-one-tablet' |
'grid__column--is-two-tablet' |
'grid__column--is-three-tablet' |
'grid__column--is-four-tablet' |
'grid__column--is-five-tablet' |
'grid__column--is-six-tablet' |
'grid__column--is-seven-tablet' |
'grid__column--is-eight-tablet' |
'grid__column--is-nine-tablet' |
'grid__column--is-ten-tablet' |
'grid__column--is-eleven-tablet' |
'grid__column--is-twelve-tablet' |

'grid__column--is-one-mobile' |
'grid__column--is-two-mobile' |
'grid__column--is-three-mobile' |
'grid__column--is-four-mobile' |
'grid__column--is-five-mobile' |
'grid__column--is-six-mobile' |
'grid__column--is-seven-mobile' |
'grid__column--is-eight-mobile' |
'grid__column--is-nine-mobile' |
'grid__column--is-ten-mobile' |
'grid__column--is-eleven-mobile' |
'grid__column--is-twelve-mobile';

export type GridColumnProps = {
  variants?: (GridColumnVariantModifiers)[]
  helpers?: (
    GridMarginHelperModifiers | 
    HelperHasGapModifiers | 
    HelperIsDisplayModifiers 
  )[]
  others?: (string)[]
  children?: ReactNode
};

export type GridElements = 'grid__row' | 'grid__columns' | 'grid__column';