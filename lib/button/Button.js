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
;
var BUTTON_BLOCK = 'button';
var BUTTON_MODIFIER_DISABLED = 'button--is-disabled';
var Button = function (_a) {
    var isColor = _a.isColor, isLink = _a.isLink, isSize = _a.isSize, isOutline = _a.isOutline, isLoading = _a.isLoading, isDisabled = _a.isDisabled, iconLeft = _a.iconLeft, iconRight = _a.iconRight, variants = _a.variants, helpers = _a.helpers, customCss = _a.customCss, children = _a.children, href = _a.href, props = __rest(_a, ["isColor", "isLink", "isSize", "isOutline", "isLoading", "isDisabled", "iconLeft", "iconRight", "variants", "helpers", "customCss", "children", "href"]);
    var isAnchor = href || false;
    var hasIcon = (iconLeft || iconRight);
    var cavilha = [
        BUTTON_BLOCK,
        isColor ? "button--is-" + isColor : null,
        isSize ? "button--is-" + isSize : null,
        isOutline ? 'button--is-outline' : null,
        isLink ? 'button--is-link' : null,
        hasIcon ? 'button--has-icon' : null,
        isDisabled ? 'button--is-disabled' : null,
        [variants ? variants.join(' ') : null],
        [helpers ? helpers.join(' ') : null],
        customCss,
    ].filter(Boolean);
    var text = hasIcon ?
        React.createElement("span", { className: "button__text" }, children)
        : children;
    var content = React.createElement(React.Fragment, null,
        iconLeft || '',
        text,
        iconRight || '');
    if (isLoading) {
        if (!cavilha.includes(BUTTON_MODIFIER_DISABLED)) {
            cavilha.push(BUTTON_MODIFIER_DISABLED);
        }
    }
    var className = cavilha.join(' ').trim();
    if (isAnchor) {
        return (React.createElement("a", __assign({}, props, { href: href, className: className }), content));
    }
    return (React.createElement("button", __assign({}, props, { type: "button", className: className }), content));
};
export { Button };
//# sourceMappingURL=Button.js.map