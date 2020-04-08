import { ReactNode } from 'react';
import { 
  HelperHasMarginModifiers, 
  HelperHasGapModifiers,
  HelperIsDisplayModifiers, 
  HeroVariantModifiers } from '../../cavilha';

export type HeroProps = {
  variants?: (HeroVariantModifiers)[]
  helpers?: (
    HelperHasMarginModifiers | 
    HelperHasGapModifiers | 
    HelperIsDisplayModifiers 
  )[]
  others?: (string)[]
  children: ReactNode
};