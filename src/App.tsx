import React, { useState, MouseEvent } from 'react';
import { Button } from './components/button/index';

export default function App() {
  const [loading, setLoading] = useState(false);

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget);
    setLoading(!loading);
  }

  return (
    <h1>
      <Button
        id="button-id"
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
