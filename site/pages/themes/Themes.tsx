import React from 'react';
import { Container} from "../../../packages/container/index"
import { H1 } from "../../../packages/heading/index"

export const Themes = () => {
  return (
    <>
      <Container>
        <H1 isHero helpers={["helper--has-margin-bottom"]}>Themes</H1>
      </Container>
    </>
  );
};
