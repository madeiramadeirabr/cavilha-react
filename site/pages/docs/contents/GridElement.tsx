import React from 'react';
import queryString from 'query-string';
import GridElementBase from './base/GridElement'
import { H1 } from "../../../../packages/heading/index"
import { Text } from "../../../../packages/text/index"

export default (props: any) => {
  // @ts-ignore
  const { version } = queryString.parse(props.location.search)

  const Container = ({children}: any) => (
    <>
      <H1 isHero>GRID {version || ''}</H1>
      <Text helpers={["helper--has-margin-vertical"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      {children}
    </>
  )

  switch(version) {
    case 'v1.0.0':
    default:
      return <Container><GridElementBase /></Container>
  }

};
