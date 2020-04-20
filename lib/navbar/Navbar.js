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
const classNames_1 = require("../core/utils/classNames");
const react_router_1 = require("react-router");
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
    var { isFixedTop, isTransparent, variants, helpers, hasClassName, children, hasBackground } = _a, props = __rest(_a, ["isFixedTop", "isTransparent", "variants", "helpers", "hasClassName", "children", "hasBackground"]);
    const className = classNames_1.classNames([
        NavbarElements.block,
        isFixedTop ? 'navbar--is-fixed-top' : '',
        isTransparent ? 'navbar--is-transparent' : '',
    ], { variants, helpers, hasClassName, hasBackground });
    if (isFixedTop) {
        document.getElementsByTagName('body')[0].setAttribute("style", "padding-top: 60px");
    }
    return (react_1.default.createElement("nav", Object.assign({}, props, { className: className }), children));
}
exports.Navbar = Navbar;
Navbar.Container = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement("div", Object.assign({}, props, { className: classNames_1.classNames([NavbarElements.container], {}) }), children));
};
Navbar.Menu = (_a) => {
    var { open, helpers } = _a, props = __rest(_a, ["open", "helpers"]);
    const className = classNames_1.classNames([NavbarElements.menu], { helpers });
    return (react_1.default.createElement("button", Object.assign({}, props, { type: "button", className: className, dangerouslySetInnerHTML: { __html: open ? '&times;' : '&#9776;' } })));
};
Navbar.Logo = (_a) => {
    var { src, title, to } = _a, props = __rest(_a, ["src", "title", "to"]);
    return (react_1.default.createElement(react_router_dom_1.Link, Object.assign({}, props, { to: to, className: classNames_1.classNames([NavbarElements.logo], {}) }),
        react_1.default.createElement("img", { src: src, alt: title || '' })));
};
Navbar.Items = (_a) => {
    var { children, isOpen } = _a, props = __rest(_a, ["children", "isOpen"]);
    const hidden = isOpen ? [] : ['helper--is-hidden-tablet', 'helper--is-hidden-mobile'];
    const className = classNames_1.classNames([NavbarElements.items], {
        helpers: hidden
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
};
function ItemWithRouter(_a) {
    var { to, isActive, children } = _a, props = __rest(_a, ["to", "isActive", "children"]);
    const className = classNames_1.classNames([NavbarElements.item], {});
    return (react_1.default.createElement(react_router_dom_1.NavLink, Object.assign({}, props, { className: className, activeClassName: "navbar__item--is-active", to: to }), children));
}
;
function Item(_a) {
    var { to, isActive, children } = _a, props = __rest(_a, ["to", "isActive", "children"]);
    const className = classNames_1.classNames([NavbarElements.item], {});
    return (react_1.default.createElement(react_router_dom_1.Link, Object.assign({}, props, { className: className, to: to }), children));
}
;
Navbar.Item = Item;
exports.NavbarItemWithRouter = react_router_1.withRouter(ItemWithRouter);
//# sourceMappingURL=Navbar.js.map