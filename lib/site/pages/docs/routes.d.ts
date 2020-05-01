import { ReactNode } from "react";
export declare type DocsRouteProps = {
    name: string;
    label: string;
    anchor: boolean;
    component: ReactNode | null;
    pages: Array<DocsRouteProps> | undefined;
};
export declare const BUTTON_COMPONENT_ROUTE: DocsRouteProps;
export declare const BADGE_COMPONENT_ROUTE: DocsRouteProps;
export declare const CHIP_COMPONENT_ROUTE: DocsRouteProps;
export declare const ALERT_COMPONENT_ROUTE: DocsRouteProps;
export declare const TAB_COMPONENT_ROUTE: DocsRouteProps;
export declare const CHOICE_COMPONENT_ROUTE: DocsRouteProps;
export declare const CARD_COMPONENT_ROUTE: DocsRouteProps;
export declare const HERO_COMPONENT_ROUTE: DocsRouteProps;
export declare const TEXT_FIELD_COMPONENT_ROUTE: DocsRouteProps;
export declare const GRID_ELEMENT_ROUTE: DocsRouteProps;
export declare const TYPOGRAPH_ELEMENT_ROUTE: DocsRouteProps;
export declare const COLORS_ELEMENT_ROUTE: DocsRouteProps;
export declare const TABLE_ELEMENT_ROUTE: DocsRouteProps;
export declare const DIALOG_COMPONENT_ROUTE: DocsRouteProps;
export declare const PAGINATION_COMPONENT_ROUTE: DocsRouteProps;
export declare const DROPDOWN_COMPONENT_ROUTE: DocsRouteProps;
export declare const CONTAINER_ELEMENT_ROUTE: DocsRouteProps;
export declare const GET_STARTED_PAGE_ROUTE: DocsRouteProps;
export declare const DOCUMENTATION_ROUTE: DocsRouteProps;
export declare const DOCS_ROUTES: Array<DocsRouteProps>;
