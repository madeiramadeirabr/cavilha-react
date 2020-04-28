"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_1 = require("react-router");
const react_router_dom_1 = require("react-router-dom");
const BaseButton_1 = require("./BaseButton");
const ButtonLink = (props) => {
    const { content, buttonProps, className } = BaseButton_1.baseButton(props);
    return (react_1.default.createElement(react_router_dom_1.Link, Object.assign({}, buttonProps, { to: buttonProps.to, className: className, ref: null }), content));
};
const ButtonWithRouter = react_router_1.withRouter(ButtonLink);
exports.ButtonWithRouter = ButtonWithRouter;
//# sourceMappingURL=ButtonWithRouter.js.map