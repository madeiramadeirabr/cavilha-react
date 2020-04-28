import React, { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  ElementColorProps,
} from '../cavilha';

export type TableVariantModifiers =
  | 'table--is-compact'
  | 'table--is-clean'
  | 'table--has-no-border';

export type TableValuesProps = Array<string | ReactNode>;

export type TableDataProps = {
  columns: Array<any>;
  rows: Array<TableValuesProps>;
};

export type TableProps = {
  variants?: string[];
  helpers?: (HelperMarginModifiers | HelperDisplayModifiers)[];
  hasClassName?: string;
  data: TableDataProps;
  isCompact?: boolean;
  isClean?: boolean;
  isBorderZero?: boolean;
} & ElementColorProps &
  HTMLAttributes<HTMLTableElement>;

function Table({
  variants,
  helpers,
  hasClassName,
  children,
  data,
  isCompact,
  isClean,
  isBorderZero,
  ...props
}: TableProps) {
  const className = classNames(
    [
      'table',
      isCompact ? ('table--is-compact' as TableVariantModifiers) : null,
      isClean ? ('table--is-clean' as TableVariantModifiers) : null,
      isBorderZero ? ('table--has-no-border' as TableVariantModifiers) : null,
    ],
    { variants, helpers, hasClassName }
  );

  const { columns, rows } = data;

  const tableRows: Array<ReactNode> = [];

  rows.map(function (row) {
    const rowValues: Array<ReactNode> = [];
    row.map(function (values, index) {
      rowValues.push(<td>{values}</td>);
    });
    tableRows.push(<tr>{rowValues}</tr>);
  });

  return (
    <table {...(props as HTMLProps<HTMLTableElement>)} className={className}>
      <thead>
        {columns.map((column) => (
          <th>{column}</th>
        ))}
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export { Table };
