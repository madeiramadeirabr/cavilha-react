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
function H1(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, isHero = _a.isHero, children = _a.children, hasColor = _a.hasColor, props = __rest(_a, ["variants", "helpers", "customCss", "isHero", "children", "hasColor"]);
    var className = classNames_1.classNames([isHero ? 'h1--is-hero' : ''], {
        variants: variants, helpers: helpers, customCss: customCss, hasColor: hasColor
    });
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("h1", __assign({}, props, { className: className }), children)));
}
exports.H1 = H1;
function H2(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, isHero = _a.isHero, children = _a.children, hasColor = _a.hasColor, props = __rest(_a, ["variants", "helpers", "customCss", "isHero", "children", "hasColor"]);
    var className = classNames_1.classNames([isHero ? 'h2--is-hero' : ''], {
        variants: variants, helpers: helpers, customCss: customCss, hasColor: hasColor
    });
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("h2", __assign({}, props, { className: className }), children)));
}
exports.H2 = H2;
function H3(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, hasColor = _a.hasColor, props = __rest(_a, ["variants", "helpers", "customCss", "children", "hasColor"]);
    var className = classNames_1.classNames([''], {
        variants: variants, helpers: helpers, customCss: customCss, hasColor: hasColor
    });
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("h3", __assign({}, props, { className: className }), children)));
}
exports.H3 = H3;
function H4(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, hasColor = _a.hasColor, props = __rest(_a, ["variants", "helpers", "customCss", "children", "hasColor"]);
    var className = classNames_1.classNames([''], {
        variants: variants, helpers: helpers, customCss: customCss, hasColor: hasColor
    });
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("h4", __assign({}, props, { className: className }), children)));
}
exports.H4 = H4;
function H5(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, hasColor = _a.hasColor, props = __rest(_a, ["variants", "helpers", "customCss", "children", "hasColor"]);
    var className = classNames_1.classNames([''], {
        variants: variants, helpers: helpers, customCss: customCss, hasColor: hasColor
    });
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("h5", __assign({}, props, { className: className }), children)));
}
exports.H5 = H5;
//# sourceMappingURL=Heading.js.map