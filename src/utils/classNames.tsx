import { ClassNamesType, PreType } from './types';

export function classNames(
  pre: PreType, 
  { variants, helpers, others }: ClassNamesType
) {
  return [
    [pre ? pre.join(' ') : null],
    [variants ? variants.join(' ') : null],
    [helpers ? helpers.join(' ') : null],
    [others ? others.join(' ') : null],
  ].filter(Boolean).join(' ').trim();

}