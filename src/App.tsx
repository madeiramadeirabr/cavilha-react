import React, { useState, MouseEvent } from 'react';
import { Button } from './components/button/index';
import '@madeiramadeira/cavilha/cavilha.sass';

export default function App() {
  const [loading, setLoading] = useState(false);

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setLoading(!loading);
  }

  return (
    <h1>
      <Button
        id="button-id"
        modifiers={{
          type: 'button--is-primary',
          variants: ['button--is-disabled', 'button--is-large'],
          helpers: ['helper--has-margin-top', 'helper--has-margin-top-mobile', 'helper--is-on-left']
        }}
        onClick={handleClick}
        loading={loading}
        loadingText="loading..."
      >
        Test me
      </Button>
    </h1>
  );
}
