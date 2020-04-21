import React, { ReactNode } from 'react';
import { H1, H2, H3, H4, H5 } from "../../../../../packages/heading/index"
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Row, Column } from "../../../../../packages/grid/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { Card } from "../../../../../packages/card/index"
import { Image } from "../../../../../packages/image/index"
import { Intro } from '../../../../components/Heading';
import { TYPOGRAPH_ELEMENT_ROUTE, BUTTON_COMPONENT_ROUTE } from "../../routes"
import { Link } from 'react-router-dom';
import { Badge } from '../../../../../packages/badge';

export default function () {


  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.card--has-no-shadow</CodeSpan>, <Text hasText="caption">Drop shadow of card element.</Text>],
      [<CodeSpan>.card--has-no-radius</CodeSpan>, <Text hasText="caption">Make card with <CodeSpan>border-radius: 0</CodeSpan>.</Text>],
      [<CodeSpan>.card--has-shadow-extra-small</CodeSpan>, <Text hasText="caption">Create a extra small shadow around that card element.</Text>],
      [<CodeSpan>.card--has-shadow-small</CodeSpan>, <Text hasText="caption">Create a small shadow around that card element.</Text>],
      [<CodeSpan>.card--has-shadow-large</CodeSpan>, <Text hasText="caption">Create a large shadow around that card element.</Text>],
      [<CodeSpan>.card--has-shadow-extra-large</CodeSpan>, <Text hasText="caption">Create a extra large shadow around that card element.</Text>],

      [<CodeSpan>.helper--has-background-primary</CodeSpan>, <Text hasText="caption">Make the card background color primary.</Text>],
      [<CodeSpan>.helper--has-background-secondary</CodeSpan>, <Text hasText="caption">Make the card background color secondary.</Text>],
      [<CodeSpan>.helper--has-background-danger</CodeSpan>, <Text hasText="caption">Make the card background color danger.</Text>],
      [<CodeSpan>.helper--has-background-success</CodeSpan>, <Text hasText="caption">Make the card background color success.</Text>],
      [<CodeSpan>.helper--has-background-gray-one</CodeSpan>, <Text hasText="caption">Make the card background color gray one.</Text>],
    ]
  }

  const cardWithImage = `<div class="grid__row">
  <div class="grid__column">
    <div class="card">
      <div class="card__header">
        <img src="..." alt="" />
      </div>
      <div class="card__content">
        <h4>
          Lorem ipsum dolor sit amet
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
      <div class="card__footer">
        <span class="text--is-caption">22-04-2020 10:20 AM</span>
      </div>
    </div>
  </div>
  ...
</div>
`

const cardDefault = `<div class="grid__row">
  <div class="grid__column">
    <div class="card">
      <div class="card__content">
        <h2>
          Lorem ipsum dolor sit amet
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
      <div class="card__footer">
        <span class="text--is-caption">22-04-2020 10:20 AM</span>
      </div>
    </div>
  </div>
  ...
</div>
`

  const ImageCard = () => (
    <Column>
      <Card>
        <Card.Header>
          <Image src="https://madeirasgasometro.vteximg.com.br/arquivos/ids/166506-1000-1000/cavilha-8x40mm-dufra.jpg?v=636198141162770000" />
        </Card.Header>
        <Card.Content>
          <H3 hasWeight="light">Lorem ipsum dolor sit amet</H3>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
        </Card.Content>
        <Card.Footer>
        <Text hasText="caption">22-04-2020 10:20 AM</Text>
        </Card.Footer>
      </Card>
    </Column>
  );

  const DefaultCard = () => (
    <Column>
      <Card>
        <Card.Content>
          <H2>Lorem ipsum dolor sit amet</H2>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </Card.Content>
        <Card.Footer>
        <Text hasText="caption">22-04-2020 10:20 AM</Text>
        </Card.Footer>
      </Card>
    </Column>
  );

  const CardShadow = ({hasShadow}: any) => (
    <Column>
      <Card hasShadow={hasShadow}>
        <Card.Content>
          <Badge isOutline hasColor="primary">{hasShadow ? hasShadow : 'regular'}</Badge>
          <Text hasText="caption" helpers={["helper--has-margin-top"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card.Content>
      </Card>
    </Column>
  );

  const CardBackground = ({hasBackground}: any) => (
    <Column>
      <Card hasBackground={hasBackground}>
        <Card.Content>
          <Badge isOutline hasColor="white">{hasBackground}</Badge>
          <Text hasText="caption" hasColor="white" helpers={["helper--has-margin-top"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card.Content>
      </Card>
    </Column>
  );

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Row>
          <DefaultCard />
          <DefaultCard />
          <DefaultCard />
        </Row>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={cardDefault} />
      </Block>

      <Intro title="Shadow" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Row>
          <CardShadow hasShadow="extra-small" />
          <CardShadow hasShadow="small" />
          <CardShadow />
          <CardShadow hasShadow="large" />
          <CardShadow hasShadow="extra-large" />
        </Row>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={cardDefault} />
      </Block>

      <Intro title="With image" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Row>
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </Row>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={cardWithImage} />
      </Block>

      <Intro title="Background colors" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Row>
          <CardBackground hasBackground="primary" />
          <CardBackground hasBackground="secondary" />
          <CardBackground hasBackground="danger" />
          <CardBackground hasBackground="success" />
          <CardBackground hasBackground="gray-seven" />
        </Row>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={cardWithImage} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
