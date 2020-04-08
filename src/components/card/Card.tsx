import React, {
  HTMLProps
} from 'react';
import { CardProps, CardElements } from './types';
import { classNames } from '../../utils/classNames';
import { CARD_ELEMENT, CARD_HEADER_ELEMENT, CARD_CONTENT_ELEMENT, CARD_FOOTER_ELEMENT, CARD_IMAGE_ELEMENT } from './constants';


function Wrapper({
  variants, helpers, others, children, ...props
}: CardProps, el?: CardElements) {
  return (
    <div 
      {...(props as HTMLProps<HTMLDivElement>)} 
      className={classNames([el || 'card'], { variants, helpers, others })}
    >
      {children}
    </div>
  );
}

const Card = (props: CardProps) => Wrapper(props, CARD_ELEMENT);

Card.Header = (props: CardProps) => Wrapper(props, CARD_HEADER_ELEMENT);
Card.Content = (props: CardProps) => Wrapper(props, CARD_CONTENT_ELEMENT);
Card.Footer = (props: CardProps) => Wrapper(props, CARD_FOOTER_ELEMENT);
Card.Image = (props: CardProps) => Wrapper(props, CARD_IMAGE_ELEMENT);

export { Card };