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
        Due to the widespread use of tables across third-party widgets like calendars and date pickers, we’ve designed our tables to be opt-in. Just add the base class .table to any <CodeSpan>&lt;table&gt;</CodeSpan>, then extend with custom styles or our various included modifier classes.
        All table styles are inherited in Cavilha UI, meaning any nested tables will be styled in the same manner as the parent.
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
