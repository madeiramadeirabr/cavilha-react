"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backgroundColorHelper = exports.colorHelper = exports.classNames = void 0;
function classNames(pre, { variants, helpers, hasClassName, hasColor, hasBackground, placeholder, }) {
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
exports.classNames = classNames;
function colorHelper(color) {
    return `helper--has-color-${color}`;
}
exports.colorHelper = colorHelper;
function backgroundColorHelper(color) {
    return `helper--has-background-${color}`;
}
exports.backgroundColorHelper = backgroundColorHelper;
//# sourceMappingURL=classNames.js.map