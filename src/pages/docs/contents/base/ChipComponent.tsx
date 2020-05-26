import React from 'react';
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Chip } from "../../../../../packages/chip/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { Intro } from '../../../../components/Heading';

export default function () {

  const chipDefaults = `<span class="chip">Default<button class="chip__button">&times;<button></span>
<span class="chip chip--is-primary">Primary<button class="chip__button">&times;<button></span>
<span class="chip chip--is-secondary">Secondary<button class="chip__button">&times;<button></span>
<span class="chip chip--is-danger">Danger<button class="chip__button">&times;<button></span>
<span class="chip chip--is-success">Success<button class="chip__button">&times;<button></span>
<span class="chip chip--is-white">White<button class="chip__button">&times;<button></span>
<span class="chip chip--is-dark">Dark<button class="chip__button">&times;<button></span>`;

  const chipOutlineDefaults = `<span class="chip chip--is-outline">Default<button class="chip__button">&times;<button></span>
<span class="chip chip--is-outline chip--is-primary">Primary<button class="chip__button">&times;<button></span>
<span class="chip chip--is-outline chip--is-secondary">Secondary<button class="chip__button">&times;<button></span>
<span class="chip chip--is-outline chip--is-danger">Danger<button class="chip__button">&times;<button></span>
<span class="chip chip--is-outline chip--is-success">Success<button class="chip__button">&times;<button></span>
<span class="chip chip--is-outline chip--is-white">White<button class="chip__button">&times;<button></span>
<span class="chip chip--is-outline chip--is-dark">Dark<button class="chip__button">&times;<button></span>`;

  const hrefDefaults = `<a class="chip">Default<button class="chip__button">&times;<button></a>
  <a class="chip chip--is-primary">Primary<button class="chip__button">&times;<button></a>
  <a class="chip chip--is-secondary">Secondary<button class="chip__button">&times;<button></a>
  <a class="chip chip--is-danger">Danger<button class="chip__button">&times;<button></a>
  <a class="chip chip--is-success">Success<button class="chip__button">&times;<button></a>
  <a class="chip chip--is-white">White<button class="chip__button">&times;<button></a>
  <a class="chip chip--is-dark">Dark<button class="chip__button">&times;<button></a>`;

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.chip--is-primary</CodeSpan>, <Text hasText="caption" hasColor="primary">Makes chip as primary background color.</Text>],
      [<CodeSpan>.chip--is-secondary</CodeSpan>, <Text hasText="caption" hasColor="secondary">Makes chip as secondary background color.</Text>],
      [<CodeSpan>.chip--is-danger</CodeSpan>, <Text hasText="caption" hasColor="danger">Makes chip as danger background color.</Text>],
      [<CodeSpan>.chip--is-success</CodeSpan>, <Text hasText="caption" hasColor="success">Makes chip as success background color.</Text>],
      [<CodeSpan>.chip--is-white</CodeSpan>, <Text hasText="caption">Makes chip as white background color.</Text>],
      [<CodeSpan>.chip--is-dark</CodeSpan>, <Text hasText="caption" hasColor="gray-seven">Makes chip as dark background color.</Text>],
      [<CodeSpan>.chip--is-outline</CodeSpan>, <Text hasText="caption">Makes chip as outlined style.</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Intro title="Default" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Chip>Default<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="primary">Primary<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="secondary">Secondary<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="danger">Danger<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="success">Success<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="white">White<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="dark">Dark<Chip.Close onClick={() => alert('close button click')} /></Chip>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={chipDefaults} />
      </Block>

      <Intro title="Outline" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Chip isOutline>Default<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip isOutline hasColor="primary">Primary<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip isOutline hasColor="secondary">Secondary<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip isOutline hasColor="danger">Danger<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip isOutline hasColor="success">Success<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip isOutline hasColor="white">White<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip isOutline hasColor="dark">Dark<Chip.Close onClick={() => alert('close button click')} /></Chip>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={chipOutlineDefaults} />
      </Block>

      <Intro title="Chip as link" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Chip href="#">Default<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="primary" href="#">Primary<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="secondary" href="#">Secondary<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="danger" href="#">Danger<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="success" href="#">Success<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="white" href="#">White<Chip.Close onClick={() => alert('close button click')} /></Chip>
        <Chip hasColor="dark" href="#">Dark<Chip.Close onClick={() => alert('close button click')} /></Chip>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={hrefDefaults} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
