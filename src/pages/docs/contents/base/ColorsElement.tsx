import React, { ReactNode } from 'react';
import { H1, H2, H3, H4, H5 } from "../../../../../packages/heading/index"
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Card } from "../../../../../packages/card/index"
import { Block } from "../../../../../packages/block/index"
import { Row, Column } from "../../../../../packages/grid/index"
import { Badge } from "../../../../../packages/badge/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { ContentComponentProps } from '../types';
import { HelperBackgroundColorModifiers } from '../../../../../packages/cavilha';

export default function ({version}: ContentComponentProps) {

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.helper--has-text-white</CodeSpan>, <Text hasText="caption">Text with color <CodeSpan>#fff</CodeSpan></Text>],
    ]
  }



  type Color = {
    name: string
    values: Array<Value>
  }

  type Value = {
    name: string
    hex: string
  }

  const colors: Array<Color> = [
    {
      name: "primary",
      values: [
        {
          name: "one",
          hex: "#ffA240"
        },
        {
          name: "two",
          hex: "#f58220"
        },
        {
          name: "three",
          hex: "#F66A26"
        },
        {
          name: "four",
          hex: "#dd3906"
        },
      ]
    },
    {
      name: "secondary",
      values: [
        {
          name: "one",
          hex: "#a3d5ff"
        },
        {
          name: "two",
          hex: "#4b9de4"
        },
        {
          name: "three",
          hex: "#1b78cd"
        },
        {
          name: "four",
          hex: "#004abe"
        },
      ]
    },
    {
      name: "success",
      values: [
        {
          name: "one",
          hex: "#2aa843"
        },
        {
          name: "two",
          hex: "#207f33"
        },
        {
          name: "three",
          hex: "#165623"
        },
        {
          name: "four",
          hex: "#0b2e12"
        },
      ]
    },
    {
      name: "danger",
      values: [
        {
          name: "one",
          hex: "#f2242f"
        },
        {
          name: "two",
          hex: "#d91620"
        },
        {
          name: "three",
          hex: "#b3121b"
        },
        {
          name: "four",
          hex: "#990b13"
        },
      ]
    },
    {
      name: "gray",
      values: [
        {
          name: "one",
          hex: "#f9f9f9"
        },
        {
          name: "two",
          hex: "#e6e6e6"
        },
        {
          name: "three",
          hex: "#cccccc"
        },
        {
          name: "four",
          hex: "#999999"
        },
        {
          name: "five",
          hex: "#808080"
        },
        {
          name: "six",
          hex: "#333333"
        },
        {
          name: "seven",
          hex: "#1f1f1f"
        },
      ]
    }
  ]

  const Colors: Array<ReactNode> = []

  colors.map(
    function(color) {
      const hexas: Array<ReactNode> = []
      color.values.map(
        function({name, hex}) {
          hexas.push(
            <Block helpers={[`helper--has-background-${color.name}-${name}` as HelperBackgroundColorModifiers]} style={{padding: '4px'}}>
              <CodeSpan>{hex}</CodeSpan>
            </Block>
          )
          helpersTableData.rows.push([<CodeSpan>.helper--has-text-{color.name}-{name}</CodeSpan>, <Text hasText="caption">Text with color <CodeSpan><span style={{width: '12px', borderRadius: '4px', height: '12px', display: 'inline-block', marginRight: '8px', backgroundColor: hex}}> </span>{hex}</CodeSpan></Text>],)
        }
      )
      Colors.push(
        <>
          <Block>
            <H4 helpers={["helper--has-margin-vertical"]}>
              {color.name.toUpperCase()}
            </H4>
          </Block>
          <Card>
            {hexas}
          </Card>
        </>
      )
    }
  )


  return (
    <>


            {Colors}



      <Block helpers={["helper--has-margin-vertical"]}>
        <H4>CSS Helper Classes</H4>
        <Text helpers={["helper--has-margin-vertical"]}>All the columns need be have the size specified.</Text>
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
