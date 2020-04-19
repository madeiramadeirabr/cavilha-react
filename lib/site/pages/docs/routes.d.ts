import { ReactNode } from "react";
export declare type DocsRouteProps = {
    name: string;
    label: string;
    anchor: boolean;
    component: ReactNode | null;
    pages: Array<DocsRouteProps> | undefined;
};
export declare const DOCS_ROUTES: Array<DocsRouteProps>;
