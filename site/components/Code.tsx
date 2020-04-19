import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import sdsd from 'react-syntax-highlighter/dist/esm/styles/prism/vs';

type CodeProps = {
  code: string
  language: 'html' | 'javascript' | 'typescript' | 'jsx'
}

export function Code({code, language}: CodeProps) {
  return (
    <SyntaxHighlighter language={language} style={sdsd}>
      {code}
    </SyntaxHighlighter>
  );
}

type CodeSpanProps = {
  children: any
}

export function CodeSpan({children}: CodeSpanProps){
  return (
    <code className="code">{children}</code>
  );
}
