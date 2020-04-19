import React from 'react';
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Badge } from "../../../../../packages/badge/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { Intro } from '../../../../components/Heading';
import { Link } from 'react-router-dom';

export default function () {

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.badge--is-compact</CodeSpan>, <Text hasText="caption">Makes the table more compact.</Text>],
      [<CodeSpan>.badge--is-clean</CodeSpan>, <Text hasText="caption">Clean table styles.</Text>],
      [<CodeSpan>.badge--has-no-border</CodeSpan>, <Text hasText="caption">Drop table outside border.</Text>],
    ]
  }

  const tableData: TableDataProps = {
    columns: ["ID", "Tool", "Active", "Action"],
    rows: [
      [1, "Hammer", <Badge hasColor="success">true</Badge>, <Link to="#">Open</Link>],
      [2, "Handsaw", <Badge hasColor="success">true</Badge>, <Link to="#">Open</Link>],
      [3, "Electric Saw", <Badge hasColor="danger">false</Badge>, <Link to="#">Open</Link>],
    ]
  }

  const tableDefaults = `<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Tool</th>
      <th>Active</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Hammer</td>
      <td><span class="badge badge--is-success">true</span></td>
      <td><a href="#">Open</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Handsaw</td>
      <td><span class="badge badge--is-success">true</span></td>
      <td><a href="#">Open</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Electric Saw</td>
      <td><span class="badge badge--is-danger">false</span></td>
      <td><a href="#">Open</a></td>
    </tr>
  </tbody>
</table>
`;

const tableClean = `<table class="table table--is-clean">
  <thead>
    <tr>
      <th>ID</th>
      <th>Tool</th>
      <th>Active</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Hammer</td>
      <td><span class="badge badge--is-success">true</span></td>
      <td><a href="#">Open</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Handsaw</td>
      <td><span class="badge badge--is-success">true</span></td>
      <td><a href="#">Open</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Electric Saw</td>
      <td><span class="badge badge--is-danger">false</span></td>
      <td><a href="#">Open</a></td>
    </tr>
  </tbody>
</table>
`;

const tableCompact = `<table class="table table--is-compact">
  <thead>
    <tr>
      <th>ID</th>
      <th>Tool</th>
      <th>Active</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Hammer</td>
      <td><span class="badge badge--is-success">true</span></td>
      <td><a href="#">Open</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Handsaw</td>
      <td><span class="badge badge--is-success">true</span></td>
      <td><a href="#">Open</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Electric Saw</td>
      <td><span class="badge badge--is-danger">false</span></td>
      <td><a href="#">Open</a></td>
    </tr>
  </tbody>
</table>
`;

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <Intro title="Usage" description={<>To apply this component, add the <CodeSpan>.table</CodeSpan> class to a <CodeSpan>&lt;table&gt;</CodeSpan> element.</>} />

      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
      <Table data={tableData} />
      </Block>
      <Block>
        <Code language="html" code={tableDefaults} />
      </Block>

      <Intro title="Compact table" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
      <Table isCompact data={tableData} />
      </Block>
      <Block>
        <Code language="html" code={tableCompact} />
      </Block>

      <Intro title="Clean table" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
      <Table isClean data={tableData} />
      </Block>
      <Block>
        <Code language="html" code={tableClean} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
