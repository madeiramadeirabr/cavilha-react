import React from 'react';
import queryString from 'query-string';
import ContainerElementBase from './base/ContainerElement'
import { H1 } from "../../../../packages/heading/index"
import { Text } from "../../../../packages/text/index"
import { CodeSpan } from '../../../components/Code';

export default (props: any) => {
  // @ts-ignore
  const { version } = queryString.parse(props.location.search)

  const Container = ({children}: any) => (
    <>
      <H1 isHero>CONTAINER {version || ''}</H1>
      <Text helpers={["helper--has-margin-vertical"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      {children}
    </>
  )

  switch(version) {
    case 'v1.0.0':
    default:
      return <Container><ContainerElementBase /></Container>
  }

};
