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
var CardElements;
(function (CardElements) {
    CardElements["card"] = "card";
    CardElements["header"] = "card__header";
    CardElements["image"] = "card__image";
    CardElements["content"] = "card__content";
    CardElements["footer"] = "card__footer";
})(CardElements || (CardElements = {}));
function Wrapper(_a, el) {
    var { variants, helpers, hasClassName, hasBackground, hasColor, hasShadow, children } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "hasBackground", "hasColor", "hasShadow", "children"]);
    const className = classNames_1.classNames([
        el,
        hasShadow && hasShadow === 'no-shadow' ? `card--has-no-shadow` : null,
        hasShadow ? `card--has-shadow-${hasShadow}` : null
    ], {
        variants, helpers, hasClassName, hasBackground, hasColor
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
const Card = (props) => Wrapper(props, CardElements.card);
exports.Card = Card;
Card.Header = (props) => Wrapper(props, CardElements.header);
Card.Content = (props) => Wrapper(props, CardElements.content);
Card.Footer = (props) => Wrapper(props, CardElements.footer);
//# sourceMappingURL=Card.js.map