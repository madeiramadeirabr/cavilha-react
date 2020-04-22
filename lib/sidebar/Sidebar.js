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
var SidebarElements;
(function (SidebarElements) {
    SidebarElements["block"] = "sidebar";
    SidebarElements["button"] = "sidebar__button";
})(SidebarElements || (SidebarElements = {}));
const SIDEBAR_IS_FLOATING = 'sidebar--is-floating';
const SIDEBAR_IS_OPEN = 'sidebar--is-open';
const SIDEBAR_IS_HALF_WIDTH = 'sidebar--is-half-width';
const SIDEBAR_IS_FULL_WIDTH = 'sidebar--is-full-width';
const SIDEBAR_HAS_NAVBAR = 'sidebar--has-navbar';
const HELPER_FULL_VIEW_WIDTH = 'helper--is-full-view-width';
const HELPER_FULL_VIEW_HEIGHT = 'helper--is-full-view-height';
const HELPER_NO_SCROLL = 'helper--has-no-scroll';
function Sidebar(_a) {
    var { isFloating, isOpen, isNavbar, isHalfWidth, isFullwidth, variants, helpers, hasClassName, children, hasBackground } = _a, props = __rest(_a, ["isFloating", "isOpen", "isNavbar", "isHalfWidth", "isFullwidth", "variants", "helpers", "hasClassName", "children", "hasBackground"]);
    const className = classNames_1.classNames([
        SidebarElements.block,
        isFloating ? SIDEBAR_IS_FLOATING : '',
        isOpen ? SIDEBAR_IS_OPEN : '',
        isHalfWidth ? SIDEBAR_IS_HALF_WIDTH : '',
        isFullwidth ? SIDEBAR_IS_FULL_WIDTH : '',
        isNavbar ? SIDEBAR_HAS_NAVBAR : '',
    ], { variants, helpers, hasClassName, hasBackground });
    if (isFullwidth) {
        const body = document.getElementsByTagName('body')[0];
        if (isOpen && !body.classList.contains(HELPER_FULL_VIEW_WIDTH)) {
            body.classList.add(HELPER_FULL_VIEW_WIDTH);
        }
        else {
            body.classList.remove(HELPER_FULL_VIEW_WIDTH);
        }
        if (isOpen && !body.classList.contains(HELPER_FULL_VIEW_HEIGHT)) {
            body.classList.add(HELPER_FULL_VIEW_HEIGHT);
        }
        else {
            body.classList.remove(HELPER_FULL_VIEW_HEIGHT);
        }
        if (isOpen && !body.classList.contains(HELPER_NO_SCROLL)) {
            body.classList.add(HELPER_NO_SCROLL);
        }
        else {
            body.classList.remove(HELPER_NO_SCROLL);
        }
    }
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
exports.Sidebar = Sidebar;
function Button(_a) {
    var { hasColor, isPosition, isBackButton } = _a, props = __rest(_a, ["hasColor", "isPosition", "isBackButton"]);
    const className = classNames_1.classNames([SidebarElements.button], {
        variants: [
            `sidebar__button--is-${isPosition}`,
        ],
        hasColor,
    });
    return (react_1.default.createElement("button", Object.assign({}, props, { type: "button", className: className, dangerouslySetInnerHTML: { __html: isBackButton ? '&larr;' : '&times;' } })));
}
Sidebar.Button = Button;
//# sourceMappingURL=Sidebar.js.map