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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
import { classNames } from '../core/utils/classNames';
var GridElements;
(function (GridElements) {
    GridElements["row"] = "grid__row";
    GridElements["columns"] = "grid__columns";
    GridElements["column"] = "grid__column";
})(GridElements || (GridElements = {}));
function Row(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, isReverse = _a.isReverse, props = __rest(_a, ["variants", "helpers", "customCss", "children", "isReverse"]);
    var className = classNames([GridElements.row, isReverse ? 'grid__row--is-reverse' : ''], {
        variants: variants,
        helpers: helpers,
        customCss: customCss
    });
    return (React.createElement("div", { className: "helper--has-margin-fix" },
        React.createElement("div", __assign({}, props, { className: className }), children)));
}
function Column(_a) {
    var variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, mobile = _a.mobile, tablet = _a.tablet, desktop = _a.desktop, props = __rest(_a, ["variants", "helpers", "customCss", "children", "mobile", "tablet", "desktop"]);
    var sizes = [];
    if (mobile)
        sizes.push(GridElements.column + "--is-" + mobile + "-mobile");
    if (tablet)
        sizes.push(GridElements.column + "--is-" + tablet + "-tablet");
    if (desktop)
        sizes.push(GridElements.column + "--is-" + desktop);
    return (React.createElement("div", __assign({}, props, { className: classNames(__spreadArrays([GridElements.column], sizes), { variants: variants, helpers: helpers, customCss: customCss }) }), children || ''));
}
export { Row, Column };
//# sourceMappingURL=Grid.js.map