import { ReactNode } from 'react';
import { 
  HelperHasBackgroundModifiers
} from '../../cavilha';

export type ContainerVariantModifiers = 
'container--is-full-width' | 
'container--is-full-width-tablet' | 
'container--is-full-width-mobile';

export type ContainerProps = {
  variants?: (ContainerVariantModifiers)[]
  helpers?: (HelperHasBackgroundModifiers)[]
  others?: (string)[]
  children: ReactNode
};