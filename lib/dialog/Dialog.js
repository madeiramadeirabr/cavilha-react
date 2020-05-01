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
var DialogElements;
(function (DialogElements) {
    DialogElements["block"] = "dialog";
    DialogElements["container"] = "dialog__container";
    DialogElements["header"] = "dialog__header";
    DialogElements["body"] = "dialog__body";
    DialogElements["footer"] = "dialog__footer";
})(DialogElements = exports.DialogElements || (exports.DialogElements = {}));
function Dialog(_a) {
    var { variants, helpers, hasClassName, children, isOpen, isTransparent, isAutoWidth, isViewport, isRelative } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "isOpen", "isTransparent", "isAutoWidth", "isViewport", "isRelative"]);
    const className = classNames_1.classNames([
        DialogElements.block,
        isOpen ? 'dialog--is-open' : null,
        isTransparent ? 'dialog--is-transparent' : null,
        isAutoWidth ? 'dialog--is-auto-width' : null,
        isViewport ? 'dialog--is-viewport' : null,
        isRelative ? 'dialog--is-relative' : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
exports.Dialog = Dialog;
function Element(_a, el) {
    var { variants, helpers, hasClassName, children, hasColor, hasBackground } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasColor", "hasBackground"]);
    const className = classNames_1.classNames([el], {
        variants,
        helpers,
        hasClassName,
        hasColor,
        hasBackground,
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
Dialog.Container = (props) => Element(props, DialogElements.container);
Dialog.Header = (props) => Element(props, DialogElements.header);
Dialog.Body = (props) => Element(props, DialogElements.body);
Dialog.Footer = (props) => Element(props, DialogElements.footer);
//# sourceMappingURL=Dialog.js.map