/// <reference types="react" />
import { CardProps } from './types';
declare const Card: {
    (props: CardProps): JSX.Element;
    Header(props: CardProps): JSX.Element;
    Content(props: CardProps): JSX.Element;
    Footer(props: CardProps): JSX.Element;
};
export { Card };
