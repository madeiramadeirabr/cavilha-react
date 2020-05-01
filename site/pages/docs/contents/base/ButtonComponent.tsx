import React from 'react';
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Button, ButtonColorModifier } from "../../../../../packages/button/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { MarginCollapse } from "../../../../../packages/base"
import { Text } from "../../../../../packages/text/index"
import { ContentComponentProps } from '../types';
import { Intro } from '../../../../components/Heading';

export default function ({version}: ContentComponentProps) {

  const buttonDefaults = `<button class="button">Button</button>
<button class="button button--is-disabled">Disabled</button>
<button class="button button--is-outline">Outlined</button>
<button class="button button--is-outline button--is-disabled">Outlined Disabled</button>
<button class="button button--is-link">Link</button>
<button class="button button--is-link button--is-disabled">Link Disabled</button>`;

  const buttonColors = (color: string) => `<button class="button">Button</button>
<button class="button button--is-${color} button--is-disabled">Disabled</button>
<button class="button button--is-${color} button--is-outline">Outlined</button>
<button class="button button--is-${color} button--is-outline button--is-disabled">Outlined Disabled</button>`;

  const buttonSizes = `<button class="button button--is-extra-large">Extra Large</button>
<button class="button button--is-large">Large</button>
<button class="button">Regular</button>
<button class="button button--is-small">Small</button>
<button class="button button--is-extra-small">Extra Small</button>`;

const buttonShapes = `<!-- circle -->
<button class="button button--is-circle button--is-extra-large button--is-primary">×</button>
<button class="button button--is-circle button--is-large button--is-primary">×</button>
<button class="button button--is-circle button--is-primary">×</button>
<button class="button button--is-circle button--is-small button--is-primary">×</button>
<button class="button button--is-circle button--is-extra-small button--is-primary">×</button>
<!-- square -->
<button class="button button--is-square button--is-extra-large button--is-secondary">×</button>
<button class="button button--is-square button--is-large button--is-secondary">×</button>
<button class="button button--is-square button--is-secondary">×</button>
<button class="button button--is-square button--is-small button--is-secondary">×</button>
<button class="button button--is-square button--is-extra-small button--is-secondary">×</button>`;

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.button--is-primary</CodeSpan>, <Text hasText="caption" hasColor="primary">Makes button as primary background color.</Text>],
      [<CodeSpan>.button--is-secondary</CodeSpan>, <Text hasText="caption" hasColor="secondary">Makes button as secondary background color.</Text>],
      [<CodeSpan>.button--is-danger</CodeSpan>, <Text hasText="caption" hasColor="danger">Makes button as danger background color.</Text>],
      [<CodeSpan>.button--is-success</CodeSpan>, <Text hasText="caption" hasColor="success">Makes button as success background color.</Text>],
      [<CodeSpan>.button--is-outline</CodeSpan>, <Text hasText="caption">Makes button as outlined style.</Text>],
      [<CodeSpan>.button--is-link</CodeSpan>, <Text hasText="caption">Makes button as link style.</Text>],
      [<CodeSpan>.button--is-disabled</CodeSpan>, <Text hasText="caption">Disable button and disable pointer events.</Text>],
      [<CodeSpan>.button--is-hover</CodeSpan>, <Text hasText="caption">Set the state of button to hovered.</Text>],
      [<CodeSpan>.button--is-active</CodeSpan>, <Text hasText="caption">Set the state of button to activated.</Text>],
      [<CodeSpan>.button--is-extra-large</CodeSpan>, <Text hasText="caption">Change the button size.</Text>],
      [<CodeSpan>.button--is-large</CodeSpan>, <Text hasText="caption">Change the button size.</Text>],
      [<CodeSpan>.button--is-small</CodeSpan>, <Text hasText="caption">Change the button size.</Text>],
      [<CodeSpan>.button--is-extra-small</CodeSpan>, <Text hasText="caption">Change the button size.</Text>],
      [<CodeSpan>.button--is-has-icon</CodeSpan>, <Text hasText="caption">Prepare button to accept button inside.</Text>],
      [<CodeSpan>.button--is-square</CodeSpan>, <Text hasText="caption">Makes button to be like a square.</Text>],
      [<CodeSpan>.button--is-circle</CodeSpan>, <Text hasText="caption">Makes button to be like a circle.</Text>],
    ]
  }

  const colors: Array<ButtonColorModifier> = [
    'primary' as ButtonColorModifier, 'secondary' as ButtonColorModifier, 'danger' as ButtonColorModifier, 'success' as ButtonColorModifier
  ]

  enum ColorsDescription {
    "primary" = "Use in the cases of is need more highlight.",
    "secondary" = "Use in the cases of is need less highlight.",
    "success" = "Use in the cases of is need a positive action.",
    "danger" = "Use in the cases of is need a negative action."
  }

  return (
    <>
      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <MarginCollapse>
        <Block helpers={["helper--has-margin-vertical"]}>
          <Button>Button</Button>
          <Button isDisabled>Disabled</Button>
          <Button isOutline>Outlined</Button>
          <Button isOutline isDisabled>Outlined Disabled</Button>
          <Button isLink>Link</Button>
          <Button isLink isDisabled>Link Disabled</Button>
        </Block>
      </MarginCollapse>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={buttonDefaults} />
      </Block>

      {
        colors.map(
          (color) => (
            <>
              <Intro title={color} description={ColorsDescription[color]} />
              <MarginCollapse>
                <Block helpers={["helper--has-margin-vertical"]}>
                  <Button hasColor={color}>Button</Button>
                  <Button isDisabled hasColor={color}>Disabled</Button>
                  <Button isOutline hasColor={color}>Outlined</Button>
                  <Button isOutline isDisabled hasColor={color}>Outlined Disabled</Button>
                </Block>
              </MarginCollapse>
              <Block helpers={["helper--has-margin-top"]}>
                <Code language="html" code={buttonColors(color)} />
              </Block>
            </>
          )
        )
      }

      <Intro title="Sizes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <MarginCollapse>
        <Block helpers={["helper--has-margin-vertical"]}>
          <Button hasSize="extra-large" isOutline>Extra Large</Button>
          <Button hasSize="large" isOutline>Large</Button>
          <Button isOutline>Regular</Button>
          <Button hasSize="small" isOutline>Small</Button>
          <Button hasSize="extra-small" isOutline>Link</Button>
        </Block>
      </MarginCollapse>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={buttonSizes} />
      </Block>

      <Intro title="Shapes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <MarginCollapse>
        <Block helpers={["helper--has-margin-vertical"]}>
          <Button hasShape="circle" hasColor="primary" hasSize="extra-large">&times;</Button>
          <Button hasShape="circle" hasColor="primary" hasSize="large">&times;</Button>
          <Button hasShape="circle" hasColor="primary">&times;</Button>
          <Button hasShape="circle" hasColor="primary" hasSize="small">&times;</Button>
          <Button hasShape="circle" hasColor="primary" hasSize="extra-small">&times;</Button>
          <Button hasShape="square" hasColor="secondary" hasSize="extra-large">&times;</Button>
          <Button hasShape="square" hasColor="secondary" hasSize="large">&times;</Button>
          <Button hasShape="square" hasColor="secondary">&times;</Button>
          <Button hasShape="square" hasColor="secondary" hasSize="small">&times;</Button>
          <Button hasShape="square" hasColor="secondary" hasSize="extra-small">&times;</Button>
        </Block>
      </MarginCollapse>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={buttonShapes} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>

    </>
  );
};
