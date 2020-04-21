import React from 'react';
import { Text } from "../../../../../packages/text/index"
import { Code, CodeSpan } from "../../../../components/Code"
import { Block } from "../../../../../packages/block/index"
import { Input } from "../../../../../packages/input/index"
import { Table, TableDataProps } from "../../../../../packages/table/index"
import { Intro } from '../../../../components/Heading';

export default function () {

  const inputRadioDefaults = `<label class="input input--is-inline">
  <div class="input__radio">
    <input type="radio" name="radio-test" checked value="1" />
    <span className="input__marker"></span>
    <span className="input__text">
      Lorem ipsum dolor sit amet
    </span>
  </div>
</label>
<label class="input input--is-inline">
  <div class="input__radio">
    <input type="radio" name="radio-test" value="2" />
    <span className="input__marker"></span>
    <span className="input__text">
    Venenatis lectus magna fringilla urna
    </span>
  </div>
</label>
`

const inputCheckboxDefaults = `<label class="input input--is-inline">
  <div class="input__checkbox">
    <input type="checkbox" name="checkbox-test[]" checked value="1" />
    <span className="input__marker"></span>
    <span className="input__text">
      Lorem ipsum dolor sit amet
    </span>
  </div>
</label>
<label class="input input--is-inline">
  <div class="input__checkbox">
    <input type="checkbox" name="checkbox-test[]" value="2" />
    <span className="input__marker"></span>
    <span className="input__text">
    Venenatis lectus magna fringilla urna
    </span>
  </div>
</label>
`

  const helpersTableData: TableDataProps = {
    columns: ["CSS Helper Classes", "Description"],
    rows: [
      [<CodeSpan>.input--is-inline</CodeSpan>, <Text hasText="caption">Position input at right of input like as inline mode.</Text>],
      [<CodeSpan>.input--is-block</CodeSpan>, <Text hasText="caption">Position input at bottom of input like as list mode.</Text>],
    ]
  }

  return (
    <>
      <Intro title="When to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <Intro title="Radio input" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Input hasType="radio" defaultChecked isInline name="radio-test" value="1">Lorem ipsum dolor sit amet</Input>
        <Input hasType="radio" isInline name="radio-test" value="2">Venenatis lectus magna fringilla urna</Input>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={inputRadioDefaults} />
      </Block>

      <Intro title="Checkbox input" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Block helpers={["helper--has-margin-vertical"]}>
        <Input hasType="checkbox" defaultChecked isInline name="checkbox-test[]" value="1">Lorem ipsum dolor sit amet</Input>
        <Input hasType="checkbox" isInline name="checkbox-test[]" value="2">Venenatis lectus magna fringilla urna</Input>
        <Input hasType="checkbox" isInline name="checkbox-test[]" value="3">Posuere urna nec</Input>
      </Block>
      <Block helpers={["helper--has-margin-top"]}>
        <Code language="html" code={inputCheckboxDefaults} />
      </Block>

      <Block helpers={["helper--has-margin-vertical"]}>
        <Intro title="CSS Helper Classes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Table isCompact data={helpersTableData} />
      </Block>
    </>
  );
};
