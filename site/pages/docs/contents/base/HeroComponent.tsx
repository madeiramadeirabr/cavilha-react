import React from 'react';
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Hero } from "../../../../../packages/hero/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { Intro } from '../../../../components/Heading';
import { Link } from 'react-router-dom';

export default function () {

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.container--is-full-width</CodeSpan>, <Text hasText="caption">Makes the container full width.</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Hero helpers={["helper--has-margin-bottom"]}>
          Hero
        </Hero>
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
