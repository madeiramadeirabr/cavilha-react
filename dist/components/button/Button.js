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
import React, { forwardRef } from 'react';
/**
 * Component
 */
var Button = forwardRef(function (_a, ref) {
    var children = _a.children, modifiers = _a.modifiers, loading = _a.loading, loadingText = _a.loadingText, props = __rest(_a, ["children", "modifiers", "loading", "loadingText"]);
    // eslint-disable-next-line no-param-reassign
    props.ref = ref;
    var sass = [
        'button',
        modifiers.type,
        [modifiers.variants ? modifiers.variants.join(' ') : ''],
        [modifiers.helpers ? modifiers.helpers.join(' ') : ''],
        [modifiers.misc ? modifiers.misc.join(' ') : ''],
    ]
        .filter(Boolean)
        .join(' ')
        .trim();
    if (loading) {
        // eslint-disable-next-line no-param-reassign
        props.disabled = true;
    }
    return (React.createElement("button", __assign({ type: "button", className: sass }, props), loading ? loadingText : children));
});
export { Button };
