import { 
  ReactNode, 
  Ref, 
  MouseEvent, 
  AnchorHTMLAttributes, 
  ButtonHTMLAttributes, 
  ComponentElement, 
  ReactComponentElement } from 'react';
import { 
  HelperHasMarginModifiers, 
  HelperIsFloatModifiers, 
  HelperIsWidthModifiers, 
  HelperIsDisplayModifiers 
} from '../../cavilha';

export type ButtonTypeModifiers = 'button--is-primary' |
'button--is-secondary' |
'button--is-danger' |
'button--is-success';

export type ButtonVariantModifiers =
  | 'button--is-outline'
  | 'button--is-small'
  | 'button--is-large'
  | 'button--is-extra-large'
  | 'button--is-disabled'
  | 'button--has-icon';

export type ButtonElements = 'button__text';

export type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;

export type ButtonProps = {
  key: string | number
  buttonRef?: Ref<ButtonTypes>
  type?: string
  options?: Array<unknown>
  type: ButtonTypeModifiers
  variants?: (ButtonVariantModifiers)[]
  helpers?: (HelperHasMarginModifiers | HelperIsFloatModifiers | HelperIsWidthModifiers | HelperIsDisplayModifiers)[]
  others?: (string)[]
  loading?: boolean
  disabled?: boolean
  iconLeft?: ComponentElement
  iconRight?: ComponentElement
  children: ReactNode
  href?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
};

export interface IButtonProps<T extends ButtonTypes>
  extends
  Omit<AnchorHTMLAttributes<T>, 'disabled'>,
  ButtonHTMLAttributes<T>, ReactComponentElement, ButtonProps {
}
