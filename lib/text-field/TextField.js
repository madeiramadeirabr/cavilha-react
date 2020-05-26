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
exports.TextField = exports.TextFieldElements = void 0;
const react_1 = __importDefault(require("react"));
const classNames_1 = require("../core/utils/classNames");
var TextFieldElements;
(function (TextFieldElements) {
    TextFieldElements["block"] = "text-field";
    TextFieldElements["label"] = "text-field__label";
    TextFieldElements["helper"] = "text-field__helper";
    TextFieldElements["icon"] = "text-field__icon";
})(TextFieldElements = exports.TextFieldElements || (exports.TextFieldElements = {}));
function TextField(_a) {
    var { isDisabled, variants, helpers, hasClassName, hasType, inputMode, label, helper, hasModifier, hasIconLeft, hasIconRight } = _a, props = __rest(_a, ["isDisabled", "variants", "helpers", "hasClassName", "hasType", "inputMode", "label", "helper", "hasModifier", "hasIconLeft", "hasIconRight"]);
    const className = classNames_1.classNames([
        TextFieldElements['block'],
        hasModifier ? `text-field--is-${hasModifier}` : null,
        hasIconLeft ? `text-field--has-icon-left` : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    function Icon({ direction, children, }) {
        return (react_1.default.createElement("span", { className: `${TextFieldElements['icon']} ${TextFieldElements['icon']}--is-${direction}` }, children));
    }
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("label", null,
            hasIconLeft || react_1.default.createElement(Icon, { direction: "left" }, hasIconLeft),
            hasType === 'textarea' ? (react_1.default.createElement("textarea", Object.assign({}, props, { required: true }))) : (react_1.default.createElement("input", Object.assign({ type: inputMode || 'text' }, props, { required: true }))),
            react_1.default.createElement("span", { className: TextFieldElements['label'] }, label),
            helper ? (react_1.default.createElement("span", { className: TextFieldElements['helper'] }, helper)) : null,
            hasIconRight || react_1.default.createElement(Icon, { direction: "right" }, hasIconRight))));
}
exports.TextField = TextField;
//# sourceMappingURL=TextField.js.map