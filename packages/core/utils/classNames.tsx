import {
  Colors,
  HelperTextColorModifiers,
  HelperBackgroundColorModifiers
} from "../../cavilha"

export type PreType = (string)[];

export type ClassNamesType = {
  variants?: (string)[]
  helpers?: (string)[]
  customCss?: string
  hasColor?: Colors
  hasBackground?: Colors
};

export function classNames(
  pre: PreType,
  { variants, helpers, customCss, hasColor, hasBackground }: ClassNamesType
): string {
  return [
    [pre ? pre.join(' ') : null],
    [variants ? variants.join(' ') : null],
    [helpers ? helpers.join(' ') : null],
    [hasColor !== undefined ? colorHelper(hasColor) : null],
    [hasBackground !== undefined ? backgroundColorHelper(hasBackground) : null],
    [customCss || null],
  ].filter(Boolean).join(' ').trim();
}

export function colorHelper(
  color: Colors
  ): HelperTextColorModifiers {
  return `helper--has-color-${color}` as HelperTextColorModifiers
}

export function backgroundColorHelper(
  color: Colors
  ): HelperBackgroundColorModifiers {
  return `helper--has-background-${color}` as HelperBackgroundColorModifiers
}
