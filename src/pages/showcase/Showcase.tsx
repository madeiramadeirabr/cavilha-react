import React from 'react';
import { Container} from "../../../packages/container/index"
import { H1 } from "../../../packages/heading/index"

export const Showcase = ({routerProps, ...props}: any) => {
  return (
    <>
      <Container>
        <H1 isHero helpers={["helper--has-margin-bottom"]}>Showcase</H1>
      </Container>
    </>
  );
};
