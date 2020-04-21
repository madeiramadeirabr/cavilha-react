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

  const UseHeadingElement = () => (<>Example using with <Link to={TYPOGRAPH_ELEMENT_ROUTE.name}>Heading</Link> Element</>)
  const UseButtonsComponent = () => (<>Example using with <Link to={BUTTON_COMPONENT_ROUTE.name}>Button</Link> Component</>)

  const badgeDefaults = `<span class="badge">default</span>
<span class="badge badge--is-primary">primary</span>
<span class="badge badge--is-secondary">secondary</span>
<span class="badge badge--is-danger">danger</span>
<span class="badge badge--is-success">success</span>
<span class="badge badge--is-white">white</span>
<span class="badge badge--is-dark">dark</span>`;

const badgeOutlineDefaults = `<span class="badge badge--is-outline">default</span>
<span class="badge badge--is-outline badge--is-primary">primary</span>
<span class="badge badge--is-outline badge--is-secondary">secondary</span>
<span class="badge badge--is-outline badge--is-danger">danger</span>
<span class="badge badge--is-outline badge--is-success">success</span>
<span class="badge badge--is-outline badge--is-white">white</span>
<span class="badge badge--is-outline badge--is-dark">dark</span>`;

const badgePillDefaults = `<span class="badge badge--is-pill">default</span>
<span class="badge badge--is-pill badge--is-primary">primary</span>
<span class="badge badge--is-pill badge--is-secondary">secondary</span>
<span class="badge badge--is-pill badge--is-danger">danger</span>
<span class="badge badge--is-pill badge--is-success">success</span>
<span class="badge badge--is-pill badge--is-white">white</span>
<span class="badge badge--is-pill badge--is-dark">dark</span>`;

const badgeWithHeading = `<h1>Example badge on Headline One <span class="badge">badge</span></h1>
<h2>Example badge on Headline Two <span class="badge">badge</span></h2>
<h3>Example badge on Headline Three <span class="badge">badge</span></h3>
<h4>Example badge on Headline Four <span class="badge">badge</span></h4>
<h5>Example badge on Headline Five <span class="badge">badge</span></h5>`;

const badgeWithButton = `<button class="button">
  Button<span class="badge helper--has-margin-left">1</span>
</button>
<button class="button button--is-primary">
  Button<span class="badge badge--is-dark helper--has-margin-left">99</span>
</button>
<button class="button button--is-secondary">
  Apply Filters<span class="badge badge--is-white badge--is-outline badge--is-pill helper--has-margin-left">1</span>
</button>
<button class="button button--is-danger">
  Remove selected<span class="badge badge--is-white badge--is-pill helper--has-margin-left">2</span>
</button>
`;

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.badge--is-primary</CodeSpan>, <Text hasText="caption" hasColor="primary">Makes badge as primary background color.</Text>],
      [<CodeSpan>.badge--is-secondary</CodeSpan>, <Text hasText="caption" hasColor="secondary">Makes badge as secondary background color.</Text>],
      [<CodeSpan>.badge--is-danger</CodeSpan>, <Text hasText="caption" hasColor="danger">Makes badge as danger background color.</Text>],
      [<CodeSpan>.badge--is-success</CodeSpan>, <Text hasText="caption" hasColor="success">Makes badge as success background color.</Text>],
      [<CodeSpan>.badge--is-white</CodeSpan>, <Text hasText="caption">Makes badge as white background color.</Text>],
      [<CodeSpan>.badge--is-dark</CodeSpan>, <Text hasText="caption" hasColor="gray-seven">Makes badge as dark background color.</Text>],
      [<CodeSpan>.badge--is-pill</CodeSpan>, <Text hasText="caption">Makes badge as pill style with border radius.</Text>],
      [<CodeSpan>.badge--is-outline</CodeSpan>, <Text hasText="caption">Makes badge as outlined style.</Text>],
      [<CodeSpan>.badge--is-floating</CodeSpan>, <Text hasText="caption">Badge has positioned in top right on negative top of inherit element.s</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Badge>default</Badge>
        <Badge hasColor="primary">primary</Badge>
        <Badge hasColor="secondary">secondary</Badge>
        <Badge hasColor="danger">danger</Badge>
        <Badge hasColor="success">success</Badge>
        <Badge hasColor="white">white</Badge>
        <Badge hasColor="dark">dark</Badge>
      </Block>
      <Block>
        <Code language="html" code={badgeDefaults} />
      </Block>

      <Intro title="Outline" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Badge isOutline>default</Badge>
        <Badge isOutline hasColor="primary">primary</Badge>
        <Badge isOutline hasColor="secondary">secondary</Badge>
        <Badge isOutline hasColor="danger">danger</Badge>
        <Badge isOutline hasColor="success">success</Badge>
        <Badge isOutline hasColor="white">white</Badge>
        <Badge isOutline hasColor="dark">dark</Badge>
      </Block>
      <Block>
        <Code language="html" code={badgeOutlineDefaults} />
      </Block>

      <Intro title="Pill" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Badge isPill>default</Badge>
        <Badge isPill hasColor="primary">primary</Badge>
        <Badge isPill hasColor="secondary">secondary</Badge>
        <Badge isPill hasColor="danger">danger</Badge>
        <Badge isPill hasColor="success">success</Badge>
        <Badge isPill hasColor="white">white</Badge>
        <Badge isPill hasColor="dark">dark</Badge>
      </Block>
      <Block>
        <Code language="html" code={badgePillDefaults} />
      </Block>

      <Intro title={<UseHeadingElement />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <H1>Example badge on Headline One <Badge>badge</Badge></H1>
        <H2>Example badge on Headline Two <Badge>badge</Badge></H2>
        <H3>Example badge on Headline Three <Badge>badge</Badge></H3>
        <H4>Example badge on Headline Four <Badge>badge</Badge></H4>
        <H5>Example badge on Headline Five <Badge>badge</Badge></H5>
      </Block>
      <Block>
        <Code language="html" code={badgeWithHeading} />
      </Block>

      <Intro title={<UseButtonsComponent />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Button><span>Button</span><Badge helpers={["helper--has-margin-left"]}>1</Badge></Button>
        <Button hasColor="primary"><span>Button</span><Badge hasColor="dark" helpers={["helper--has-margin-left"]}>99</Badge></Button>
        <Button hasColor="secondary"><span>Apply Filters</span><Badge hasColor="white" isPill isOutline helpers={["helper--has-margin-left"]}>1</Badge></Button>
        <Button hasColor="danger"><span>Remove Selected</span><Badge hasColor="white" isPill helpers={["helper--has-margin-left"]}>2</Badge></Button>
      </Block>
      <Block>
        <Code language="html" code={badgeWithButton} />
      </Block>

      <Intro title="Badge as link" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Badge hasColor="primary" isPill isLink to="#">clickable</Badge>
        <Badge hasColor="secondary" isLink to="#">clickable</Badge>
        <Badge hasColor="danger" isLink to="#">clickable</Badge>
        <Badge hasColor="success" isOutline isLink to="#">clickable</Badge>
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
