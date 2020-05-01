import React from 'react';
import { Intro } from '../../../../components/Heading';
import { Code, CodeSpan } from "../../../../components/Code"
import { Dialog } from "../../../../../packages/dialog"
import { H5 } from '../../../../../packages/heading';
import { Text } from '../../../../../packages/text';
import { Button } from '../../../../../packages/button';
import { Block } from '../../../../../packages/block';
import { Table, TableDataProps } from "../../../../../packages/table/index"

export default function () {

  function closeDialog() {
    alert('cancel button')
  }

  function confirmDialog() {
    alert('confirm button')
  }

  const dialogDefaults = `<div class="dialog dialog--is-open dialog--is-transparent dialog--is-relative">
  <div class="dialog__container">
    <div class="dialog__header">
      <h5 class="helper--has-color-secondary helper--has-text-semibold">Dialog header</h5>
    </div>
    <div class="dialog__body">
      <p class="text text--is-body-one-regular">Dialog body</p>
    </div>
    <div class="dialog__footer">
      <button type="button" class="button button--is-secondary  button--is-outline">Cancel</button>
      <button type="button" class="button button--is-primary">Ok</button>
    </div>
  </div>
</div>`

const dialogAutoWidth = `<div class="dialog dialog--is-open dialog--is-transparent dialog--is-relative dialog--is-auto-with">
  <div class="dialog__container">
    <div class="dialog__header">
      <h5 class="helper--has-color-secondary helper--has-text-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h5>
    </div>
    <div class="dialog__body">
      <p class="text text--is-body-one-regular">Lorem...</p>
    </div>
    <div class="dialog__footer">
      <button type="button" class="button button--is-secondary  button--is-outline">Cancel</button>
      <button type="button" class="button button--is-primary">Ok</button>
    </div>
  </div>
</div>`

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.dialog--is-open</CodeSpan>, <Text hasText="caption">Change to visible dialog.</Text>],
      [<CodeSpan>.dialog--is-transparent</CodeSpan>, <Text hasText="caption">Make dialog backdrop with transparent.</Text>],
      [<CodeSpan>.dialog--is-relative</CodeSpan>, <Text hasText="caption">Make dialog with relative position.</Text>],
      [<CodeSpan>.dialog--is-viewport</CodeSpan>, <Text hasText="caption">Make dialog <CodeSpan>container</CodeSpan> width 100% of viewport.</Text>],
      [<CodeSpan>.dialog--is-auto-width</CodeSpan>, <Text hasText="caption">Make dialog <CodeSpan>container</CodeSpan> with auto width.</Text>],
    ]
  }


  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-gap"]}>
        <Dialog isOpen isRelative isTransparent>
          <Dialog.Container>
            <Dialog.Header>
              <H5 hasWeight="semibold" hasColor="secondary">Dialog header</H5>
            </Dialog.Header>
            <Dialog.Body>
              <Text>Dialog body</Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Button isOutline hasColor="secondary" onClick={closeDialog}>Cancel</Button>
              <Button hasColor="primary" onClick={confirmDialog}>Ok</Button>
            </Dialog.Footer>
          </Dialog.Container>
        </Dialog>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={dialogDefaults} />
      </Block>


      <Intro title="Auto width" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-gap"]}>
        <Dialog isOpen isRelative isTransparent isAutoWidth>
          <Dialog.Container>
            <Dialog.Header>
              <H5 hasWeight="semibold" hasColor="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</H5>
            </Dialog.Header>
            <Dialog.Body>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Button isOutline hasColor="secondary" onClick={closeDialog}>Cancel</Button>
              <Button hasColor="primary" onClick={confirmDialog}>Ok</Button>
            </Dialog.Footer>
          </Dialog.Container>
        </Dialog>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={dialogAutoWidth} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>

    </>
  );
};
