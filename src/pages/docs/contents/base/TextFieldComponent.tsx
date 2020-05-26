import React from 'react';
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { TextField } from "../../../../../packages/text-field/index"
import { Intro } from '../../../../components/Heading';

export default function () {

  const inputNameDefault = `<div class="text-field">
  <label>
    <input type="text" required/>
    <span class="text-field__label">Your name</span>
    <span class="text-field__helper">Enter your full name</span>
  </label>
</div>`;

  const inputNameActive = `<div class="text-field text-field--is-active">
  <label>
    <input type="text" required value="Cavilha, The First of Your Name, Born from the Sawdust"/>
    <span class="text-field__label">Your name</span>
    <span class="text-field__helper">Your are typing your name</span>
  </label>
</div>`;

  const inputNameNegative = `<div class="text-field text-field--is-negative">
  <label>
    <input type="text" required value="Cavilha"/>
    <span class="text-field__label">Your name</span>
    <span class="text-field__helper">Please, enter your full name</span>
  </label>
</div>`;

  const inputNamePositive = `<div class="text-field text-field--is-positive">
  <label>
  <input type="text" required value="Cavilha, The First of Your Name, Born from the Sawdust"/>
    <span class="text-field__label">Your name</span>
    <span class="text-field__helper">Your name is valid</span>
  </label>
</div>`;

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.text-field--is-active</CodeSpan>, <Text hasText="caption" hasColor="primary">Makes the input text with focus style.</Text>],
      [<CodeSpan>.text-field--is-negative</CodeSpan>, <Text hasText="caption" hasColor="danger">Makes the input text with border and color danger to sinalize invalid.</Text>],
      [<CodeSpan>.text-field--is-positive</CodeSpan>, <Text hasText="caption" hasColor="success">Makes the input text with border and color danger to sinalize type is valid.</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <TextField
        label="Type your name"
        helper="Enter your fullname" />
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={inputNameDefault} />
      </Block>

      <Intro
      title="Active"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <TextField
        label="Type your name"
        hasModifier="active"
        defaultValue="Cavilha, The First of Your Name, Born from the Sawdust"
        helper="Your are typing your name" />
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={inputNameActive} />
      </Block>

      <Intro
      title="Negative"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <TextField
        label="Type your name"
        hasModifier="negative"
        defaultValue="Cavilha"
        helper="Please, enter your full name" />
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={inputNameNegative} />
      </Block>

      <Intro
      title="Positive"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <TextField
        label="Type your name"
        hasModifier="positive"
        defaultValue="Cavilha, The First of Your Name, Born from the Sawdust"
        helper="Your name is valid" />
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={inputNamePositive} />
      </Block>

      <Intro title="Textarea" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <TextField
        hasType="textarea"
        label="Type your name"
        helper="Enter your fullname" />
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={inputNameDefault} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
