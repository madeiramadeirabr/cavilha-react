import { ReactNode } from 'react';
import { 
  HelperHasMarginModifiers, 
  HelperIsFloatModifiers, 
  HelperIsDisplayModifiers, 
  HelperHasTextColorModifiers, 
  HelperHasTextAlignModifiers } from '../../cavilha';

export type TextAsType =
  'body-one-regular' | 
  'body-one-bold' |
  'body-two-regular'  | 
  'body-two-bold' |
  'caption' |
  'overline';

export type TextProps = {
  as?: TextAsType
  variants?: (string)[]
  helpers?: (
    HelperHasMarginModifiers | 
    HelperIsFloatModifiers | 
    HelperIsDisplayModifiers | 
    HelperHasTextColorModifiers | 
    HelperHasTextAlignModifiers
  )[]
  others?: (string)[]
  children: ReactNode
};