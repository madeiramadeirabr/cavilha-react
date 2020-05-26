import React, { ReactNode } from 'react';
import { H1, H2, H3, H4, H5 } from "../../../../../packages/heading/index"
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Badge } from "../../../../../packages/badge/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { ContentComponentProps } from '../types';

export default function ({version}: ContentComponentProps) {

  const headingTableData: TableDataProps = {
    columns: ["Element and Helper", "Preview"],
    rows: []
  }

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.helper--has-text-light</CodeSpan>, <Text hasText="caption">Makes font-weight: 100</Text>],
      [<CodeSpan>.helper--has-text-regular</CodeSpan>, <Text hasText="caption">Makes font-weight: 300</Text>],
      [<CodeSpan>.helper--has-text-semibold</CodeSpan>, <Text hasText="caption">Makes font-weight: 400</Text>],
      [<CodeSpan>.helper--has-text-bold</CodeSpan>, <Text hasText="caption">Makes font-weight: 700</Text>],
      [<CodeSpan>.helper--has-text-left</CodeSpan>, <Text hasText="caption">Align text on left</Text>],
      [<CodeSpan>.helper--has-text-right</CodeSpan>, <Text hasText="caption">Align text on right</Text>],
      [<CodeSpan>.helper--has-text-center</CodeSpan>, <Text hasText="caption">Align text on center</Text>],
      [<CodeSpan>.helper--has-text-justify</CodeSpan>, <Text hasText="caption">Text will be justified</Text>],
      [<CodeSpan>.helper--has-text-upper</CodeSpan>, <Text hasText="caption">Transform text to uppercase</Text>],
      [<CodeSpan>.helper--has-text-lower</CodeSpan>, <Text hasText="caption">Transform text to lowercase</Text>],
      [<CodeSpan>.helper--has-text-capitalized</CodeSpan>, <Text hasText="caption">Capitalize first letter of the text</Text>],
    ]
  }

  type Heading = {
    element: string
    variant?: string
    children: ReactNode
  }

  const TextRow = ({element, variant, children}: Heading) => {
    headingTableData.rows.push([
      <>
        <Badge hasColor="secondary">{element}</Badge>
        { variant ? <Badge>.{variant}</Badge> : null}
      </>,
      children
    ])
  }

  const typographs: Array<Heading> = [
    {
      element: "h1",
      variant: "h1--is-hero",
      children: <H1>Heading One Hero</H1>
    } as Heading,
    {
      element: "h1",
      children: <H1>Heading One</H1>
    } as Heading,
    {
      element: "h2",
      variant: "h2--is-hero",
      children: <H2>Heading Two Hero</H2>
    } as Heading,
    {
      element: "h2",
      children: <H2>Heading Two</H2>
    } as Heading,
    {
      element: "h3",
      children: <H3>Heading Three</H3>
    } as Heading,
    {
      element: "h4",
      children: <H4>Heading Four</H4>
    } as Heading,
    {
      element: "h5",
      children: <H5>Heading Five</H5>
    } as Heading,
    {
      element: "p",
      variant: "text--is-body-one-regular",
      children: <Text hasText="body-one-regular">Text body one regular</Text>
    } as Heading,
    {
      element: "p",
      variant: "text--is-body-one-bold",
      children: <Text hasText="body-one-bold">Text body one bold</Text>
    } as Heading,
    {
      element: "p",
      variant: "text--is-body-two-regular",
      children: <Text hasText="body-two-regular">Text body two regular</Text>
    } as Heading,
    {
      element: "p",
      variant: "text--is-body-two-bold",
      children: <Text hasText="body-two-bold">Text body two bold</Text>
    } as Heading,
    {
      element: "p",
      variant: "text--is-button",
      children: <Text hasText="button">Button</Text>
    } as Heading,
    {
      element: "span",
      variant: "text--is-caption",
      children: <Text hasText="caption">Text Caption</Text>
    } as Heading,
    {
      element: "span",
      variant: "text--is-overline",
      children: <Text hasText="overline">Text Overline</Text>
    } as Heading
  ];

  typographs.map((typo) => TextRow(typo))

  return (
    <>
      <Block helpers={["helper--has-margin-vertical"]}>
        <Table data={headingTableData} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <H4>CSS Helper Classes</H4>
        <Text helpers={["helper--has-margin-vertical"]}>All the columns need be have the size specified.</Text>
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
