/// <reference types="react" />
declare type CodeProps = {
    code: string;
    language: 'html' | 'javascript' | 'typescript' | 'jsx';
};
export declare function Code({ code, language }: CodeProps): JSX.Element;
declare type CodeSpanProps = {
    children: any;
};
export declare function CodeSpan({ children }: CodeSpanProps): JSX.Element;
export {};
