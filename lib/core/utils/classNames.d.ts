import { Colors, HelperTextColorModifiers, HelperBackgroundColorModifiers } from "../../cavilha";
export declare type PreType = (string)[];
export declare type ClassNamesType = {
    variants?: (string)[];
    helpers?: (string)[];
    hasClassName?: string;
    hasColor?: Colors;
    hasBackground?: Colors;
    placeholder?: boolean;
};
export declare function classNames(pre: PreType, { variants, helpers, hasClassName, hasColor, hasBackground, placeholder }: ClassNamesType): string;
export declare function colorHelper(color: Colors): HelperTextColorModifiers;
export declare function backgroundColorHelper(color: Colors): HelperBackgroundColorModifiers;
