import React, { ReactNode } from "react";
import { H1, H2, H3 } from "../../packages/heading/index"
import { Text } from "../../packages/text/index"
import { Block } from "../../packages/block/index"

type Intro = {
  title: string | ReactNode
  description: string | ReactNode
}

type Heading = {
  children: ReactNode
}

export function Title({children}: Heading) {
  return <H1>{children}</H1>
}

export function Subtitle({children}: Heading) {
  return <H2>{children}</H2>
}

export function Intro({title, description}: Intro) {
  return (
    <Block helpers={["helper--has-margin-vertical"]}>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </Block>
  )
}

export function SectionTitle({children}: Heading) {
  return <H3>{children}</H3>
}


export function SectionDescription({children}: Heading) {
  return <Text hasText="body-two-regular" hasColor="gray-five">{children}</Text>
}
