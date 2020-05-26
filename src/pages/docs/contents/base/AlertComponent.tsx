import React from 'react';
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Alert } from "../../../../../packages/alert/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { Intro } from '../../../../components/Heading';

export default function () {

  function onClose() {
    alert('button close click')
  }

  const alertDefaults = `<span class="alert">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<button class="alert__button">&times;<button></span>
<span class="alert alert--is-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<button class="alert__button">&times;<button></span>
<span class="alert alert--is-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<button class="alert__button">&times;<button></span>
<span class="alert alert--is-danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<button class="alert__button">&times;<button></span>
<span class="alert alert--is-success">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<button class="alert__button">&times;<button></span>
<span class="alert alert--is-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<button class="alert__button">&times;<button></span>
<span class="alert alert--is-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<button class="alert__button">&times;<button></span>`;

const alertLargeText = `<span class="alert alert--is-danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...<button class="alert__button">&times;<button></span>`;

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.alert--is-primary</CodeSpan>, <Text hasText="caption" hasColor="primary">Makes alert as primary background color.</Text>],
      [<CodeSpan>.alert--is-secondary</CodeSpan>, <Text hasText="caption" hasColor="secondary">Makes alert as secondary background color.</Text>],
      [<CodeSpan>.alert--is-danger</CodeSpan>, <Text hasText="caption" hasColor="danger">Makes alert as danger background color.</Text>],
      [<CodeSpan>.alert--is-success</CodeSpan>, <Text hasText="caption" hasColor="success">Makes alert as success background color.</Text>],
      [<CodeSpan>.alert--is-white</CodeSpan>, <Text hasText="caption">Makes alert as white background color.</Text>],
      [<CodeSpan>.alert--is-dark</CodeSpan>, <Text hasText="caption" hasColor="gray-seven">Makes alert as dark background color.</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Alert onClose={onClose}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Alert>
        <Alert onClose={onClose} hasColor="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Alert>
        <Alert onClose={onClose} hasColor="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Alert>
        <Alert onClose={onClose} hasColor="danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Alert>
        <Alert onClose={onClose} hasColor="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Alert>
        <Alert onClose={onClose} hasColor="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Alert>
        <Alert onClose={onClose} hasColor="dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Alert>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={alertDefaults} />
      </Block>

      <Intro title="Large text" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Alert hasColor="danger" onClose={onClose}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Alert>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={alertLargeText} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
