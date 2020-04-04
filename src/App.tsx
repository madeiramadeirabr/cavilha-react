import React, { Ref, useState, createRef, MouseEvent } from 'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Button, ButtonWithRef } from './components/button/index';
import '@madeiramadeira/cavilha/cavilha.sass';
import { ButtonProps } from './components/button/types';

export default function App() {
  const [loading, setLoading] = useState(false);

  const myRef: Ref<HTMLButtonElement> = createRef<HTMLButtonElement>();

  function onClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setLoading(!loading);

    console.log(myRef);
  }

  const anchorProps: ButtonProps = {
    key:'button-id',
    href: '/teste',
    modifiers: {
      type: 'button--is-primary',
      variants: [],
      helpers: []
    },
    loading,
    iconLeft: loading || <AccessAlarm />,
    iconRight: loading ? <AccessAlarm /> : <ThreeDRotation />,
    children: loading ? 'loading...' : 'test me',
    onClick
  };

  const buttonProps: ButtonProps = {
    key:'button-id-button',
    modifiers: {
      type: 'button--is-primary',
      variants: [],
      helpers: []
    },
    loading,
    iconLeft: loading || <AccessAlarm />,
    iconRight: loading ? <AccessAlarm /> : <ThreeDRotation />,
    children: loading ? 'loading...' : 'test me',
    onClick
  };

  return (
    <div>
      <Button {...anchorProps} key="1" />
      <ButtonWithRef {...buttonProps} myRef={myRef} key="2" />
    </div>
  );
}
