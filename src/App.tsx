import React, { Ref, useState, createRef, MouseEvent } from 'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Button, ButtonWithRef } from './components/button/index';
import '@madeiramadeira/cavilha/cavilha.sass';
import { ButtonProps } from './components/button/types';

export default function App() {
  const [loading, setLoading] = useState(false);

  const buttonRef: Ref<HTMLButtonElement> = createRef<HTMLButtonElement>();

  function onClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setLoading(!loading);
  }

  const anchorProps: ButtonProps = {
    key:'button-id',
    href: '/teste',
    type: 'button--is-primary',
    variants: ['button--has-icon', 'button--is-small'],
    helpers: ['helper--is-clearfix'],
    loading,
    iconLeft: loading || <AccessAlarm />,
    iconRight: loading ? <AccessAlarm /> : <ThreeDRotation />,
    children: loading ? 'loading...' : 'test me',
    onClick
  };

  const buttonProps: ButtonProps = {
    key:'button-id-button',    
    type: 'button--is-secondary',
    loading,
    children: loading ? 'loading...' : 'test me',
    onClick
  };

  return (
    <div>
      <Button {...anchorProps} key="1" />
      <ButtonWithRef {...buttonProps} buttonRef={buttonRef} key="2" />
    </div>
  );
}
