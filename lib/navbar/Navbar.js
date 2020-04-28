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
        document
            .getElementsByTagName('body')[0]
            .setAttribute('style', 'padding-top: 60px');
    }
    return (react_1.default.createElement("nav", Object.assign({}, props, { className: className }), children));
}
exports.Navbar = Navbar;
Navbar.Container = function (_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement("div", Object.assign({}, props, { className: classNames_1.classNames([NavbarElements.container], {}) }), children));
};
Navbar.Menu = function (_a) {
    var { isOpen, helpers } = _a, props = __rest(_a, ["isOpen", "helpers"]);
    const className = classNames_1.classNames([NavbarElements.menu], { helpers });
    return (react_1.default.createElement("button", Object.assign({}, props, { type: "button", className: className, dangerouslySetInnerHTML: { __html: isOpen ? '&times;' : '&#9776;' } })));
};
Navbar.Logo = function (_a) {
    var { title, src } = _a, props = __rest(_a, ["title", "src"]);
    const className = classNames_1.classNames([NavbarElements.logo], {});
    return (react_1.default.createElement("a", Object.assign({}, props, { className: className }),
        react_1.default.createElement("img", { src: src, alt: title || '' })));
};
Navbar.Items = function (_a) {
    var { children, isOpen } = _a, props = __rest(_a, ["children", "isOpen"]);
    const hidden = isOpen
        ? []
        : ['helper--is-hidden-tablet', 'helper--is-hidden-mobile'];
    const className = classNames_1.classNames([NavbarElements.items], {
        helpers: hidden,
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
};
Navbar.Item = function (_a) {
    var { isActive, children } = _a, props = __rest(_a, ["isActive", "children"]);
    const className = classNames_1.classNames([
        NavbarElements.item,
        isActive ? 'navbar__item--is-active' : null
    ], {});
    return (react_1.default.createElement("a", Object.assign({}, props, { className: className }), children));
};
//# sourceMappingURL=Navbar.js.map