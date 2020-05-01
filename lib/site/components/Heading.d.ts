import { ReactNode } from "react";
declare type Intro = {
    title: string | ReactNode;
    description: string | ReactNode;
};
declare type Heading = {
    children: ReactNode;
};
export declare function Title({ children }: Heading): JSX.Element;
export declare function Subtitle({ children }: Heading): JSX.Element;
export declare function Intro({ title, description }: Intro): JSX.Element;
export declare function SectionTitle({ children }: Heading): JSX.Element;
export declare function SectionDescription({ children }: Heading): JSX.Element;
export {};
