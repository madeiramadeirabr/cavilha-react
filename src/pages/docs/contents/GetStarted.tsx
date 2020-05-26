import React from 'react';
import { H1} from "../../../../packages/heading/index"
import { Text } from "../../../../packages/text/index"

export default function () {

  return (
    <>
      <H1 isHero>GET STARTED</H1>
      <Text helpers={["helper--has-margin-vertical"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </>
  );
};
