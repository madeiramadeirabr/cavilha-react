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
var BLOCK = 'image';
function Image(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, hasBackground = _a.hasBackground, src = _a.src, title = _a.title, props = __rest(_a, ["variants", "helpers", "customCss", "hasBackground", "src", "title"]);
    var className = classNames([BLOCK], {
        variants: variants, helpers: helpers, customCss: customCss, hasBackground: hasBackground
    });
    return (React.createElement("div", __assign({}, props, { className: className }),
        React.createElement("img", { src: src, alt: title || "" })));
}
export { Image };
//# sourceMappingURL=Image.js.map