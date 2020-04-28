import React from "react";
import { RouteComponentProps } from 'react-router';
import { BaseButtonProps } from './BaseButton';
export declare type BookDetailProps = RouteComponentProps & BaseButtonProps;
declare const ButtonWithRouter: React.ComponentClass<Pick<BookDetailProps, "variants" | "helpers" | "hasClassName" | "hasColor" | "isOutline" | "href" | "isLink" | "hasSize" | "isLoading" | "isDisabled" | "hasIconLeft" | "hasIconRight" | "hasShape" | "wrapper" | "to" | "type">, any> & import("react-router").WithRouterStatics<React.FunctionComponent<BookDetailProps>>;
export { ButtonWithRouter };
