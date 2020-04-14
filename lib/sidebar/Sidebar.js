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
import React from 'react';
import { classNames } from '../core/utils/classNames';
var SidebarElements;
(function (SidebarElements) {
    SidebarElements["block"] = "sidebar";
    SidebarElements["button"] = "sidebar__button";
})(SidebarElements || (SidebarElements = {}));
var SIDEBAR_IS_FLOATING = 'sidebar--is-floating';
var SIDEBAR_IS_OPEN = 'sidebar--is-open';
var SIDEBAR_IS_HALF_WIDTH = 'sidebar--is-half-width';
var SIDEBAR_IS_FULL_WIDTH = 'sidebar--is-full-width';
var SIDEBAR_HAS_NAVBAR = 'sidebar--has-navbar';
var HELPER_FULL_VIEW_WIDTH = 'helper--is-full-view-width';
var HELPER_FULL_VIEW_HEIGHT = 'helper--is-full-view-height';
var HELPER_NO_SCROLL = 'helper--has-no-scroll';
function Sidebar(_a) {
    var isFloating = _a.isFloating, isOpen = _a.isOpen, hasNavbar = _a.hasNavbar, isHalfWidth = _a.isHalfWidth, isFullwidth = _a.isFullwidth, variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, hasBackground = _a.hasBackground, props = __rest(_a, ["isFloating", "isOpen", "hasNavbar", "isHalfWidth", "isFullwidth", "variants", "helpers", "customCss", "children", "hasBackground"]);
    var className = classNames([
        SidebarElements.block,
        isFloating ? SIDEBAR_IS_FLOATING : '',
        isOpen ? SIDEBAR_IS_OPEN : '',
        isHalfWidth ? SIDEBAR_IS_HALF_WIDTH : '',
        isFullwidth ? SIDEBAR_IS_FULL_WIDTH : '',
        hasNavbar ? SIDEBAR_HAS_NAVBAR : ''
    ], { variants: variants, helpers: helpers, customCss: customCss, hasBackground: hasBackground });
    if (isFullwidth) {
        var body = document.getElementsByTagName('body')[0];
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
    return (React.createElement("div", __assign({}, props, { className: className }), children));
}
function Button(_a) {
    var hasColor = _a.hasColor, isPosition = _a.isPosition, isBackButton = _a.isBackButton, props = __rest(_a, ["hasColor", "isPosition", "isBackButton"]);
    var className = classNames([
        SidebarElements.button
    ], { variants: ["sidebar__button--is-" + isPosition], hasColor: hasColor });
    return (React.createElement("button", __assign({}, props, { type: "button", className: className, dangerouslySetInnerHTML: { __html: isBackButton ? '&larr;' : '&times;' } })));
}
Sidebar.Button = Button;
export { Sidebar };
//# sourceMappingURL=Sidebar.js.map