import { Pagination, Text } from '@mantine/core';
import type { CSSProperties } from 'react';

import { MaterialSymbol } from '../MaterialSymbol/MaterialSymbol';
import classes from './TablePagination.module.css';

interface TablePaginationProps {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

function createPaginationIcon(name: string) {
  return function PaginationIcon({
    className,
    style,
  }: {
    className?: string;
    style?: CSSProperties;
  }) {
    return (
      <MaterialSymbol name={name} size={24} className={className} style={style} />
    );
  };
}

const FirstPageIcon = createPaginationIcon('keyboard_double_arrow_left');
const PreviousPageIcon = createPaginationIcon('keyboard_arrow_left');
const NextPageIcon = createPaginationIcon('keyboard_arrow_right');
const LastPageIcon = createPaginationIcon('keyboard_double_arrow_right');

const controlLabels = {
  first: 'Primeira página',
  previous: 'Página anterior',
  next: 'Próxima página',
  last: 'Última página',
} as const;

export function TablePagination({
  page,
  pageCount,
  pageSize,
  total,
  onChange,
}: TablePaginationProps) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  const rangeText =
    total === 0
      ? 'Nenhum cliente encontrado'
      : `${start} a ${end} de ${total} clientes`;

  return (
    <div className={classes.footer}>
      <Text className={classes.range}>{rangeText}</Text>

      <Pagination
        className={classes.pagination}
        total={pageCount}
        value={page}
        onChange={onChange}
        withPages={false}
        withEdges
        size={40}
        radius={8}
        gap={12}
        firstIcon={FirstPageIcon}
        previousIcon={PreviousPageIcon}
        nextIcon={NextPageIcon}
        lastIcon={LastPageIcon}
        getControlProps={(control) => ({
          'aria-label': controlLabels[control],
        })}
        classNames={{ control: classes.control }}
      />
    </div>
  );
}
