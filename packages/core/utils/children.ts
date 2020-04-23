import { ReactNode } from 'react';

export function childrenIsEmpty(children: string | ReactNode): boolean {
  if (!children || children.toString().length < 0) {
    return true;
  }

  return false;
}
