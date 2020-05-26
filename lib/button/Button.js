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
exports.ButtonHOC = exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const BaseButton_1 = require("./BaseButton");
function Button(_a) {
    var props = __rest(_a, []);
    const { content, buttonProps, className } = BaseButton_1.baseButton(props);
    const { type, href } = buttonProps;
    const Component = href ? 'a' : 'button';
    const componentProps = href
        ? buttonProps
        : Object.assign(Object.assign({}, buttonProps), { type: type || 'button' });
    return (react_1.default.createElement(Component, Object.assign({}, componentProps, { className: className }), content));
}
exports.Button = Button;
const ButtonHOC = (props) => {
    const { content, buttonProps } = BaseButton_1.baseButton(props);
    return (Component) => (react_1.default.createElement(Component, Object.assign({}, buttonProps), content));
};
exports.ButtonHOC = ButtonHOC;
//# sourceMappingURL=Button.js.map