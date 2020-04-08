import React, {
  HTMLProps
} from 'react';
import { GridRowProps, GridColumnProps } from './types';
import { classNames } from '../../utils/classNames';
import { GRID_ROW_ELEMENT, GRID_COLUMN_ELEMENT } from './constants';


function Row({
  variants, helpers, others, children, ...props
}: GridRowProps) {
  return (
    <div 
      {...(props as HTMLProps<HTMLDivElement>)} 
      className={classNames([GRID_ROW_ELEMENT], { variants, helpers, others })}
    >
      {children}
    </div>
  );
}

function Column({
  variants, helpers, others, children, ...props
}: GridColumnProps) {
  return (
    <div 
      {...(props as HTMLProps<HTMLDivElement>)} 
      className={classNames([GRID_COLUMN_ELEMENT], { variants, helpers, others })}
    >
      {children || ''}
    </div>
  );
}

export { Row, Column };