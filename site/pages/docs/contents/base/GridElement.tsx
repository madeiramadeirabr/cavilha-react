import React, { ReactNode } from 'react';
import { H1, H2 } from "../../../../../packages/heading/index"
import { Row, Column, ColumnSizes, ColumnSize } from "../../../../../packages/grid/index"
import { Text } from "../../../../../packages/text/index"
import { Code } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { ContentComponentProps } from '../types';

export default function ({version}: ContentComponentProps) {

  let columnTilesCode: string = ''
  let columnAutoSizesCode: string = ''

  function tiles(build: number) {
    const tiles: Array<ReactNode> = []
    for (let i = 1; i <= build; i++) {
      tiles.push(<Column hasSize="one" hasClassName="column column--is-tile">one</Column>)
      columnTilesCode += `  <div class="grid__column grid__column--is-one">one</div>\n`;
    }
    return tiles
  }

  function columns(build: number) {
    const tiles: Array<ReactNode> = []
    for (let i = 1; i <= build; i++) {
      tiles.push(<Column hasClassName="column column--is-auto">1/{build + 1}</Column>)
      columnAutoSizesCode += `  <div class="grid__column">1/${build + 1}</div>\n`;
    }
    return tiles
  }

  const columnTiles: Array<ReactNode> = []

  for (let i = 1; i <= 12; i++) {
    columnTilesCode += `<div class="grid__row">\n`
    columnTilesCode += `  <div class="grid__column grid__column--is-${ColumnSizes[i - 1] as ColumnSize}">${ColumnSizes[i - 1] as ColumnSize}</div>\n`;
    columnTiles.push(
      <Row helpers={["helper--has-margin-vertical"]}>
        <Column hasSize={ColumnSizes[i - 1] as ColumnSize} hasClassName="column column--is-tile">{ColumnSizes[i - 1] as ColumnSize}</Column>
        {tiles(12 - i)}
      </Row>
    )

    columnTilesCode += `</div>\n`
  }

  const columnAutoSizes: Array<ReactNode> = []

  for (let i = 1; i <= 6; i++) {
    columnAutoSizesCode += `<div class="grid__row">\n`
    columnAutoSizesCode += `  <div class="grid__column">1/${6 - (i - 1)}</div>\n`;
    columnAutoSizes.push(
      <Row helpers={["helper--has-margin-vertical"]}>
        <Column hasClassName="column column--is-auto">1/{6 - (i - 1)}</Column>
        {columns(6 - i)}
      </Row>
    )

    columnAutoSizesCode += `</div>\n`
  }

  const columnNesting = `<div class="grid__row">
  <div class="grid__column">
    <div class="grid__row">
      <div class="grid__column">
        1/2
      </div>
      <div class="grid__column">
        1/2
      </div>
    </div>
  </div>
  <div class="grid__column">
    <div class="grid__row">
      <div class="grid__column grid__column--is-four">
        four
      </div>
      <div class="grid__column grid__column--is-eight">
        eight
      </div>
    </div>
  </div>
</div>`

  return (
    <>
      <H2>TILE BASED</H2>
      <Text helpers={["helper--has-margin-vertical"]}>All the columns need be have the size specified.</Text>

      {columnTiles}

      <Block helpers={["helper--has-margin-vertical-extra-large"]}>
        <Code language="html" code={columnTilesCode} />
      </Block>

      <H2>AUTO SIZE</H2>
      <Text helpers={["helper--has-margin-vertical"]}>All the columns need be have the size specified.</Text>

      {columnAutoSizes}

      <Block helpers={["helper--has-margin-vertical-extra-large"]}>
        <Code language="html" code={columnAutoSizesCode} />
      </Block>

      <H2>NESTING</H2>
      <Text helpers={["helper--has-margin-vertical"]}>All the columns need be have the size specified.</Text>

      <Row hasClassName="row">
        <Column hasClassName="column">
          <Row hasClassName="row">
            <Column hasClassName="column">
            1/2
            </Column>
            <Column hasClassName="column">
            1/2
            </Column>
          </Row>
        </Column>
        <Column hasClassName="column">
          <Row hasClassName="row">
            <Column hasClassName="column" desktop="four">
              four
            </Column>
            <Column hasClassName="column" desktop="eight">
              eight
            </Column>
          </Row>
        </Column>
      </Row>

      <Block helpers={["helper--has-margin-vertical-extra-large"]}>
        <Code language="html" code={columnNesting} />
      </Block>

    </>
  );
};
