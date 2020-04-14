import { Colors, HelperTextColorModifiers, HelperBackgroundColorModifiers } from "../../cavilha";
export declare type PreType = (string)[];
export declare type ClassNamesType = {
    variants?: (string)[];
    helpers?: (string)[];
    customCss?: string;
    hasColor?: Colors;
    hasBackground?: Colors;
};
export declare function classNames(pre: PreType, { variants, helpers, customCss, hasColor, hasBackground }: ClassNamesType): string;
export declare function colorHelper(color: Colors): HelperTextColorModifiers;
export declare function backgroundColorHelper(color: Colors): HelperBackgroundColorModifiers;
