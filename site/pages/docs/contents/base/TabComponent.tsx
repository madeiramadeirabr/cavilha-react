import React from 'react';
import { Intro } from '../../../../components/Heading';
import { Code, CodeSpan } from "../../../../components/Code"
import { Tab } from "../../../../../packages/tab"
import { Text } from '../../../../../packages/text';
import { Block } from '../../../../../packages/block';
import { Badge } from '../../../../../packages/badge';
import { Row, Column } from '../../../../../packages/grid';
import { Table, TableDataProps } from "../../../../../packages/table/index"

export default function () {

  const tabDefaults = `<div class="tab">
  <div class="tabs">
    <button type="button" class="tab__item tab__item--is-active">Example tab one</button>
    <button type="button" class="tab__item">Example tab two</button>
    <button type="button" class="tab__item">Example tab thee</button>
  </div>
  <div class="tab__content tab__content--is-active">Content one</div>
  <div class="tab__content">Content two</div>
  <div class="tab__content">Content three</div>
</div>`

  const tabVertical = `<div class="grid__row">
  <div class="grid__column grid__column--is-four">
    <div class="tab tab--is-vertical">
      <button type="button" class="tab__item tab__item--is-active">Example tab one</button>
      <button type="button" class="tab__item">Example tab two</button>
      <button type="button" class="tab__item">Example tab thee</button>
    </div>
  </div>
  <div class="grid__column grid__column--is-eight">
    <div class="tab__content tab__content--is-active">Content one</div>
    <div class="tab__content">Content two</div>
    <div class="tab__content">Content three</div>
  </div>
</div>`

const tabBadge = `<div class="tab">
  <div class="tabs">
    <button type="button" class="tab__item tab__item--is-active">
      Example tab one
      <span class="badge badge--is-danger badge--is-pill helper--is-on-right">
        11
      </span>
    </button>
    <button type="button" class="tab__item">
      Example tab two
      <span class="badge badge--is-secondary badge--is-pill badge--is-outline helper--is-on-right">
        01
      </span>
    </button>
    <button type="button" class="tab__item tab__item--is-disabled">
      Example tab thee disabled
    </button>
  </div>
  <div class="tab__content tab__content--is-active">Content one</div>
  <div class="tab__content">Content two</div>
  <div class="tab__content">Content three</div>
</div>
`

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.tab--is-vertical</CodeSpan>, <Text hasText="caption">Change direction to tabs to vertical, changing <CodeSpan>flex-direction: row</CodeSpan> to <CodeSpan>flex-direction: column</CodeSpan>.</Text>],
      [<CodeSpan>.tab__item--is-active</CodeSpan>, <Text hasText="caption">Make tab item active.</Text>],
      [<CodeSpan>.tab__item--is-disabled</CodeSpan>, <Text hasText="caption">Disable user interaction with tab item.</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block>
        <Tab>
          <Tab.Tabs current={1}>
            <Tab.Item index={1}>Example tab one</Tab.Item>
            <Tab.Item index={2}>Example tab two</Tab.Item>
            <Tab.Item index={3}>Example tab thee</Tab.Item>
          </Tab.Tabs>
          <Tab.Content index={1}>Content one</Tab.Content>
          <Tab.Content index={2}>Content two</Tab.Content>
          <Tab.Content index={3}>Content three</Tab.Content>
        </Tab>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={tabDefaults} />
      </Block>

      <Intro title="Vertical" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block>
        <Tab isVertical>
          <Row>
            <Column desktop="four" tablet="six" mobile="six">
              <Tab.Tabs current={1}>
                <Tab.Item index={1}>Example tab one</Tab.Item>
                <Tab.Item index={2}>Example tab two</Tab.Item>
                <Tab.Item index={3}>Example tab thee</Tab.Item>
              </Tab.Tabs>
            </Column>
            <Column desktop="eight" tablet="six" mobile="six">
              <Tab.Content index={1}>Content one</Tab.Content>
              <Tab.Content index={2}>Content two</Tab.Content>
              <Tab.Content index={3}>Content three</Tab.Content>
            </Column>
          </Row>
        </Tab>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={tabVertical} />
      </Block>

      <Intro title="With Badge component" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block>
        <Tab>
          <Tab.Tabs current={1}>
            <Tab.Item index={1}>Example tab one<Badge hasColor="danger" isPill hasFloat="right">11</Badge></Tab.Item>
            <Tab.Item index={2}>Example tab two<Badge hasColor="secondary" isOutline isPill hasFloat="right">01</Badge></Tab.Item>
            <Tab.Item index={3} isDisabled>Example tab thee disabled</Tab.Item>
          </Tab.Tabs>
          <Tab.Content index={1}>Content one</Tab.Content>
          <Tab.Content index={2}>Content two</Tab.Content>
          <Tab.Content index={3}>Content three</Tab.Content>
        </Tab>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={tabBadge} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>

    </>
  );
};
