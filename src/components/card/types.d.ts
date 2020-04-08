import { ReactNode } from 'react';
import { 
  HelperHasMarginModifiers, 
  HelperIsDisplayModifiers, 
  HelperHasGapModifiers 
} from '../../cavilha';

export type CardVariantModifiers = 'card--no-border-radius';

export type CardProps = {
  variants?: (CardVariantModifiers)[]
  helpers?: (
    HelperHasMarginModifiers | 
    HelperHasGapModifiers | 
    HelperIsDisplayModifiers 
  )[]
  others?: (string)[]
  children: ReactNode
};

export type CardHeaderProps = CardProps;
export type CardContentProps = CardProps;
export type CardFooterProps = CardProps;
export type CardImageProps = CardProps;

export type CardElements = 'card' | 'card__header' | 'card__content' | 'card__image' | 'card__footer';