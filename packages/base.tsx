import React, { HTMLProps, HTMLAttributes } from 'react';

function MarginCollapse({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...(props as HTMLProps<HTMLDivElement>)}
      className="helper--has-margin-fix"
    >
      {children}
    </div>
  );
}

export { MarginCollapse };
