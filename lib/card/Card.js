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
const classNames_1 = require("../core/utils/classNames");
const types_1 = require("./types");
function Wrapper(_a, el) {
    var { variants, helpers, hasClassName, hasBackground, hasColor, hasShadow, children, href } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "hasBackground", "hasColor", "hasShadow", "children", "href"]);
    const className = classNames_1.classNames([
        el,
        hasShadow && hasShadow === 'no-shadow'
            ? `card--has-no-shadow`
            : null,
        hasShadow
            ? `card--has-shadow-${hasShadow}`
            : null,
    ], {
        variants,
        helpers,
        hasClassName,
        hasBackground,
        hasColor,
    });
    if (href) {
        return (react_1.default.createElement("a", Object.assign({}, props, { href: href, className: className }), children));
    }
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
const Card = (props) => Wrapper(props, types_1.CardElements.card);
exports.Card = Card;
Card.Header = (props) => Wrapper(props, types_1.CardElements.header);
Card.Content = (props) => Wrapper(props, types_1.CardElements.content);
Card.Footer = (props) => Wrapper(props, types_1.CardElements.footer);
//# sourceMappingURL=Card.js.map