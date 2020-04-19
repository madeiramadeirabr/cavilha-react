import React from 'react';
import { H1 } from "../../../../packages/heading/index"
import { Text } from "../../../../packages/text/index"

export default function () {

  return (
    <>
      <H1 isHero>DOCUMENTATION</H1>
      <Text helpers={["helper--has-margin-vertical"]}>
        Everything you need to create a website with Bulma
      </Text>
    </>
  );
};
