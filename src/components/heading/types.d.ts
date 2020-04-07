import { ReactNode } from 'react';
import { 
  HelpersHeadingAvailable, 
  HelperHasMarginModifiers, 
  HelperIsFloatModifiers, 
  HelperIsDisplayModifiers, 
  HelperHasTextColorModifiers, 
  HelperHasTextAlignModifiers } from '../../cavilha';

export type HeadingProps = {
  variants?: (string)[]
  helpers?: (
    HelpersHeadingAvailable | 
    HelperHasMarginModifiers | 
    HelperIsFloatModifiers | 
    HelperIsDisplayModifiers | 
    HelperHasTextColorModifiers | 
    HelperHasTextAlignModifiers
  )[]
  others?: (string)[]
  children: ReactNode
};