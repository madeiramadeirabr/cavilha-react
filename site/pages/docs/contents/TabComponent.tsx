import React from 'react';
import queryString from 'query-string';
import TabComponentBase from './base/TabComponent'
import { H1 } from "../../../../packages/heading/index"
import { Text } from "../../../../packages/text/index"

export default (props: any) => {
  // @ts-ignore
  const { version } = queryString.parse(props.location.search)

  const Container = ({children}: any) => (
    <>
      <H1 isHero>TAB {version || ''}</H1>
      <Text helpers={["helper--has-margin-vertical"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      {children}
    </>
  )

  switch(version) {
    case 'v1.0.0':
    default:
      return <Container><TabComponentBase /></Container>
  }

};
