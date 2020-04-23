import {
  Colors,
  HelperTextColorModifiers,
  HelperBackgroundColorModifiers,
} from '../../cavilha';

export type PreType = string[];

export type ClassNamesType = {
  variants?: string[];
  helpers?: string[];
  hasClassName?: string;
  hasColor?: Colors;
  hasBackground?: Colors;
  placeholder?: boolean;
};

export function classNames(
  pre: PreType,
  {
    variants,
    helpers,
    hasClassName,
    hasColor,
    hasBackground,
    placeholder,
  }: ClassNamesType
): string {
  return [
    [pre ? pre.join(' ') : null],
    [placeholder ? 'helper--has-loading-placeholder' : null],
    [variants ? variants.join(' ') : null],
    [helpers ? helpers.join(' ') : null],
    [hasColor !== undefined ? colorHelper(hasColor) : null],
    [hasBackground !== undefined ? backgroundColorHelper(hasBackground) : null],
    [hasClassName || null],
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
}

export function colorHelper(color: Colors): HelperTextColorModifiers {
  return `helper--has-color-${color}` as HelperTextColorModifiers;
}

export function backgroundColorHelper(
  color: Colors
): HelperBackgroundColorModifiers {
  return `helper--has-background-${color}` as HelperBackgroundColorModifiers;
}
