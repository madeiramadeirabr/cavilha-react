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
export var CONTAINER_BLOCK = 'container';
function Container(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, hasBackground = _a.hasBackground, props = __rest(_a, ["variants", "helpers", "customCss", "children", "hasBackground"]);
    var className = classNames([CONTAINER_BLOCK], {
        variants: variants, helpers: helpers, customCss: customCss, hasBackground: hasBackground
    });
    return (React.createElement("div", __assign({}, props, { className: className }), children));
}
export { Container };
//# sourceMappingURL=Container.js.map