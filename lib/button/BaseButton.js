"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseButton = void 0;
const react_1 = __importDefault(require("react"));
const classNames_1 = require("../core/utils/classNames");
const BUTTON_BLOCK = 'button';
function baseButton(_a) {
    var { hasColor, isLink, hasSize, isOutline, isLoading, isDisabled, hasIconLeft, hasIconRight, variants, helpers, hasClassName, hasShape, wrapper, children } = _a, props = __rest(_a, ["hasColor", "isLink", "hasSize", "isOutline", "isLoading", "isDisabled", "hasIconLeft", "hasIconRight", "variants", "helpers", "hasClassName", "hasShape", "wrapper", "children"]);
    const hasIcon = hasIconLeft || hasIconRight;
    const className = classNames_1.classNames([
        BUTTON_BLOCK,
        hasColor ? `button--is-${hasColor}` : null,
        hasSize ? `button--is-${hasSize}` : null,
        isOutline ? 'button--is-outline' : null,
        isLink ? 'button--is-link' : null,
        hasIcon ? 'button--has-icon' : null,
        isDisabled ? 'button--is-disabled' : null,
        hasShape ? `button--is-${hasShape}` : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    const text = hasIcon ? (react_1.default.createElement("span", { className: "button__text" }, children)) : (children);
    const content = (react_1.default.createElement(react_1.default.Fragment, null,
        hasIconLeft || '',
        text,
        hasIconRight || ''));
    return { content, buttonProps: props, className };
}
exports.baseButton = baseButton;
//# sourceMappingURL=BaseButton.js.map