"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classNames(pre, _a) {
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
exports.classNames = classNames;
function colorHelper(color) {
    return "helper--has-color-" + color;
}
exports.colorHelper = colorHelper;
function backgroundColorHelper(color) {
    return "helper--has-background-" + color;
}
exports.backgroundColorHelper = backgroundColorHelper;
//# sourceMappingURL=classNames.js.map