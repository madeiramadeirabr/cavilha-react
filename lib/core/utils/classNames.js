export function classNames(pre, _a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, hasColor = _a.hasColor, hasBackground = _a.hasBackground;
    return [
        [pre ? pre.join(' ') : null],
        [variants ? variants.join(' ') : null],
        [helpers ? helpers.join(' ') : null],
        [hasColor !== undefined ? colorHelper(hasColor) : null],
        [hasBackground !== undefined ? backgroundColorHelper(hasBackground) : null],
        [customCss || null],
    ].filter(Boolean).join(' ').trim();
}
export function colorHelper(color) {
    return "helper--has-color-" + color;
}
export function backgroundColorHelper(color) {
    return "helper--has-background-" + color;
}
//# sourceMappingURL=classNames.js.map