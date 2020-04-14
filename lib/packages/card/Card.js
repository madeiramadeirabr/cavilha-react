"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importDefault(require("react"));
var classNames_1 = require("../../core/utils/classNames");
var CardElements;
(function (CardElements) {
    CardElements["card"] = "card";
    CardElements["header"] = "card__header";
    CardElements["image"] = "card__image";
    CardElements["content"] = "card__content";
    CardElements["footer"] = "card__footer";
})(CardElements || (CardElements = {}));
function Wrapper(_a, el) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, hasBackground = _a.hasBackground, hasColor = _a.hasColor, children = _a.children, props = __rest(_a, ["variants", "helpers", "customCss", "hasBackground", "hasColor", "children"]);
    var className = classNames_1.classNames([el], {
        variants: variants, helpers: helpers, customCss: customCss, hasBackground: hasBackground, hasColor: hasColor
    });
    return (react_1.default.createElement("div", __assign({}, props, { className: className }), children));
}
var Card = function (props) { return Wrapper(props, CardElements.card); };
exports.Card = Card;
Card.Header = function (props) { return Wrapper(props, CardElements.header); };
Card.Content = function (props) { return Wrapper(props, CardElements.content); };
Card.Footer = function (props) { return Wrapper(props, CardElements.footer); };
//# sourceMappingURL=Card.js.map