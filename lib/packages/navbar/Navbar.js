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
var react_router_dom_1 = require("react-router-dom");
var classNames_1 = require("../../core/utils/classNames");
var NavbarElements;
(function (NavbarElements) {
    NavbarElements["block"] = "navbar";
    NavbarElements["container"] = "navbar__container";
    NavbarElements["logo"] = "navbar__logo";
    NavbarElements["menu"] = "navbar__menu";
    NavbarElements["items"] = "navbar__items";
    NavbarElements["item"] = "navbar__item";
})(NavbarElements || (NavbarElements = {}));
function Navbar(_a) {
    var isFixedTop = _a.isFixedTop, variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, hasBackground = _a.hasBackground, props = __rest(_a, ["isFixedTop", "variants", "helpers", "customCss", "children", "hasBackground"]);
    var className = classNames_1.classNames([
        NavbarElements.block,
        isFixedTop ? 'navbar--is-fixed-top' : ''
    ], { variants: variants, helpers: helpers, customCss: customCss, hasBackground: hasBackground });
    return (react_1.default.createElement("nav", __assign({}, props, { className: className }), children));
}
exports.Navbar = Navbar;
Navbar.Container = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement("div", __assign({}, props, { className: classNames_1.classNames([NavbarElements.container], {}) }), children));
};
Navbar.Menu = function (_a) {
    var open = _a.open, helpers = _a.helpers, props = __rest(_a, ["open", "helpers"]);
    var className = classNames_1.classNames([NavbarElements.menu], { helpers: helpers });
    return (react_1.default.createElement("button", __assign({}, props, { type: "button", className: className, dangerouslySetInnerHTML: { __html: open ? '&times;' : '&#9776;' } })));
};
Navbar.Logo = function (_a) {
    var src = _a.src, title = _a.title, props = __rest(_a, ["src", "title"]);
    return (react_1.default.createElement("div", __assign({}, props, { className: classNames_1.classNames([NavbarElements.logo], {}) }),
        react_1.default.createElement("img", { src: src, alt: title || '' })));
};
Navbar.Items = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, props = __rest(_a, ["children", "isOpen"]);
    var hidden = isOpen ? [] : ['helper--is-hidden-tablet', 'helper--is-hidden-mobile'];
    var className = classNames_1.classNames([NavbarElements.items], {
        helpers: hidden
    });
    return (react_1.default.createElement("div", __assign({}, props, { className: className }), children));
};
Navbar.Item = function (_a) {
    var to = _a.to, isActive = _a.isActive, children = _a.children, props = __rest(_a, ["to", "isActive", "children"]);
    var className = classNames_1.classNames([
        NavbarElements.item, isActive ? 'navbar__item--is-active' : ''
    ], {});
    return (react_1.default.createElement(react_router_dom_1.Link, __assign({}, props, { className: className, to: to }), children));
};
//# sourceMappingURL=Navbar.js.map