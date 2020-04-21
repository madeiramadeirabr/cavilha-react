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
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_router_1 = require("react-router");
const classNames_1 = require("../core/utils/classNames");
const BUTTON_BLOCK = 'button';
const BUTTON_MODIFIER_DISABLED = 'button--is-disabled';
function Button(_a) {
    var { hasColor, isLink, hasSize, isOutline, isLoading, isDisabled, hasIconLeft, hasIconRight, variants, helpers, hasClassName, children, hasShape } = _a, props = __rest(_a, ["hasColor", "isLink", "hasSize", "isOutline", "isLoading", "isDisabled", "hasIconLeft", "hasIconRight", "variants", "helpers", "hasClassName", "children", "hasShape"]);
    const hasIcon = (hasIconLeft || hasIconRight);
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
        variants, helpers, hasClassName
    });
    const text = hasIcon ?
        react_1.default.createElement("span", { className: "button__text" }, children)
        : children;
    const content = react_1.default.createElement(react_1.default.Fragment, null,
        hasIconLeft || '',
        text,
        hasIconRight || '');
    return (react_1.default.createElement("button", Object.assign({}, props, { type: "button", className: className }), content));
}
exports.Button = Button;
;
function ButtonLink(_a) {
    var { hasColor, isLink, hasSize, isOutline, isLoading, isDisabled, hasIconLeft, hasIconRight, variants, helpers, hasClassName, children, hasShape } = _a, props = __rest(_a, ["hasColor", "isLink", "hasSize", "isOutline", "isLoading", "isDisabled", "hasIconLeft", "hasIconRight", "variants", "helpers", "hasClassName", "children", "hasShape"]);
    const hasIcon = (hasIconLeft || hasIconRight);
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
        variants, helpers, hasClassName
    });
    const text = hasIcon ?
        react_1.default.createElement("span", { className: "button__text" }, children)
        : children;
    const content = react_1.default.createElement(react_1.default.Fragment, null,
        hasIconLeft || '',
        text,
        hasIconRight || '');
    return (react_1.default.createElement(react_router_dom_1.Link, Object.assign({}, props, { className: className }), content));
}
;
Button.Link = ButtonLink;
Button.LinkWithRouter = react_router_1.withRouter(ButtonLink);
//# sourceMappingURL=Button.js.map