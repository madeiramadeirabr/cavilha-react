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
        The Badge is a pure CSS component used to add notifications, messages, or statuses in different shapes and sizes. The Badge component can be easily integrated with ListView, Avatar, and other container controls.
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