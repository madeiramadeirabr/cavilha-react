import React, { HTMLProps } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { BaseButtonProps, baseButton } from './BaseButton';

export type BookDetailProps = RouteComponentProps & BaseButtonProps;

const ButtonLink: React.FC<BookDetailProps> = (props) => {
  const { content, buttonProps, className } = baseButton(props);
  return (
    <Link
      {...(buttonProps as HTMLProps<HTMLAnchorElement>)}
      to={buttonProps.to}
      className={className}
      ref={null}
    >
      {content}
    </Link>
  );
};

const ButtonWithRouter = withRouter(ButtonLink);

export { ButtonWithRouter };
