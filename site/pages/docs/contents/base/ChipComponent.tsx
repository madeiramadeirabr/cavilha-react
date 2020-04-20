import React, { ReactNode } from 'react';
import { H1, H2, H3, H4, H5 } from "../../../../../packages/heading/index"
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Badge } from "../../../../../packages/badge/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { Button } from "../../../../../packages/button/index"
import { Intro } from '../../../../components/Heading';
import { TYPOGRAPH_ELEMENT_ROUTE, BUTTON_COMPONENT_ROUTE } from "../../routes"
import { Link } from 'react-router-dom';

export default function () {

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.chip--is-primary</CodeSpan>, <Text hasText="caption" hasColor="primary">Makes chip as primary background color.</Text>],
      [<CodeSpan>.chip--is-secondary</CodeSpan>, <Text hasText="caption" hasColor="secondary">Makes chip as secondary background color.</Text>],
      [<CodeSpan>.chip--is-danger</CodeSpan>, <Text hasText="caption" hasColor="danger">Makes chip as danger background color.</Text>],
      [<CodeSpan>.chip--is-success</CodeSpan>, <Text hasText="caption" hasColor="success">Makes chip as success background color.</Text>],
      [<CodeSpan>.chip--is-white</CodeSpan>, <Text hasText="caption">Makes chip as white background color.</Text>],
      [<CodeSpan>.chip--is-dark</CodeSpan>, <Text hasText="caption" hasColor="gray-seven">Makes chip as dark background color.</Text>],
      [<CodeSpan>.chip--is-pill</CodeSpan>, <Text hasText="caption">Makes chip as pill style with border radius.</Text>],
      [<CodeSpan>.chip--is-outline</CodeSpan>, <Text hasText="caption">Makes chip as outlined style.</Text>],
      [<CodeSpan>.chip--is-floating</CodeSpan>, <Text hasText="caption">Badge has positioned in top right on negative top of inherit element.s</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count." />
      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
