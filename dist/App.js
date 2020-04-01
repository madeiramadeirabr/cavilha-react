import React, { useState } from 'react';
import { Button } from './components/button/index';
import '@madeiramadeira/cavilha/cavilha.sass';
export default function App() {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    function handleClick(event) {
        event.preventDefault();
        setLoading(!loading);
    }
    return (React.createElement("h1", null,
        React.createElement(Button, { id: "button-id", modifiers: {
                type: ['button-is-primarye'],
                variants: [],
                helpers: []
            }, onClick: handleClick, loading: loading, loadingText: "loading..." }, "Test me")));
}
