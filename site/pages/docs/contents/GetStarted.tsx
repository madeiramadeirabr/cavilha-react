import React from 'react';
import { H1} from "../../../../packages/heading/index"
import { Text } from "../../../../packages/text/index"

export default function () {

  return (
    <>
      <H1 isHero>GET STARTED</H1>
      <Text helpers={["helper--has-margin-vertical"]}>
        The Badge is a pure CSS component used to add notifications, messages, or statuses in different shapes and sizes. The Badge component can be easily integrated with ListView, Avatar, and other container controls.
      </Text>
    </>
  );
};
