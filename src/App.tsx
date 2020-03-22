import React, { useState, MouseEvent, useRef } from 'react';
import { Button } from './components/button/index';

export default function App() {
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef();

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setLoading(!loading);
  }

  return (
    <h1>
      <Button
        id="button-id"
        ref={buttonRef}
        modifiers={{
          type: 'button--is-primary',
          variants: ['button--is-large', 'button--is-outline'],
        }}
        onClick={handleClick}
        loading={loading}
        loadingText="aguarde"
      >
        Test me
      </Button>
    </h1>
  );
}
