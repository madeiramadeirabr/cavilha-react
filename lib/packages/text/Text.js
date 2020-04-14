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
function Text(_a) {
    var type = _a.type, hasColor = _a.hasColor, hasBackground = _a.hasBackground, _b = _a.isText, isText = _b === void 0 ? 'body-one-regular' : _b, variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, props = __rest(_a, ["type", "hasColor", "hasBackground", "isText", "variants", "helpers", "customCss", "children"]);
    var className = classNames_1.classNames(['text', "text--is-" + isText], {
        variants: variants, helpers: helpers, customCss: customCss, hasColor: hasColor, hasBackground: hasBackground
    });
    if (type instanceof HTMLSpanElement) {
        return (react_1.default.createElement("span", __assign({}, props, { className: className }), children));
    }
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("p", __assign({}, props, { className: className }), children)));
}
exports.Text = Text;
//# sourceMappingURL=Text.js.map