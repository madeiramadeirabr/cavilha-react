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
exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const classNames_1 = require("../core/utils/classNames");
const children_1 = require("../core/utils/children");
function Text(_a) {
    var { hasElement, hasColor, hasBackground, hasText = 'body-one-regular', variants, helpers, hasClassName, children, withPlaceholder, hasFloat } = _a, props = __rest(_a, ["hasElement", "hasColor", "hasBackground", "hasText", "variants", "helpers", "hasClassName", "children", "withPlaceholder", "hasFloat"]);
    const className = classNames_1.classNames([
        'text',
        `text--is-${hasText}`,
        hasFloat ? `helper--is-on-${hasFloat}` : null,
    ], {
        variants,
        helpers,
        hasClassName,
        hasColor,
        hasBackground,
        placeholder: withPlaceholder ? children_1.childrenIsEmpty(children) : false,
    });
    let component = (react_1.default.createElement("p", Object.assign({}, props, { className: className }), children));
    if (hasElement === 'span') {
        component = (react_1.default.createElement("span", Object.assign({}, props, { className: className }), children));
    }
    if (hasElement === 'strong') {
        component = (react_1.default.createElement("strong", Object.assign({}, props, { className: className }), children));
    }
    if (hasElement === 'i') {
        component = (react_1.default.createElement("i", Object.assign({}, props, { className: className }), children));
    }
    return component;
}
exports.Text = Text;
//# sourceMappingURL=Text.js.map