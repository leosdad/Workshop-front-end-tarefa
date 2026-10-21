import { Table, UnstyledButton } from '@mantine/core';
import { useEffect, useRef } from 'react';

import {
  customerStatusLabels,
  type Customer,
  type CustomerSort,
  type CustomerSortField,
} from '../../types/customer';
import { logPrototypeAction } from '../../utils/prototypeLog';
import { MaterialSymbol } from '../MaterialSymbol/MaterialSymbol';
import classes from './CustomersTable.module.css';

const columns: Array<{
  field: CustomerSortField;
  label: string;
  widthClass: string;
}> = [
  { field: 'code', label: 'Código', widthClass: classes.thCode },
  { field: 'name', label: 'Nome', widthClass: classes.thName },
  { field: 'type', label: 'Tipo', widthClass: classes.thType },
  { field: 'city', label: 'Cidade', widthClass: classes.thCity },
];

interface CustomersTableProps {
  customers: Customer[];
  sort: CustomerSort;
  isLoading: boolean;
  onSort: (field: CustomerSortField) => void;
}

export function CustomersTable({
  customers,
  sort,
  isLoading,
  onSort,
}: CustomersTableProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [customers]);

  return (
    <Table.ScrollContainer
      ref={scrollRef}
      type="native"
      minWidth={0}
      maxHeight="100%"
      className={classes.scrollArea}
    >
      <Table
        className={classes.table}
        layout="fixed"
        stickyHeader
        withRowBorders={false}
        withTableBorder={false}
        aria-busy={isLoading}
      >
        <Table.Caption className="sr-only">Lista de clientes</Table.Caption>

        <Table.Thead>
          <Table.Tr>
            {columns.map((column) => {
              const isSorted = sort.field === column.field;
              const ariaSort = isSorted
                ? sort.direction === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none';

              return (
                <Table.Th
                  key={column.field}
                  className={column.widthClass}
                  aria-sort={ariaSort}
                >
                  <UnstyledButton
                    className={classes.sortButton}
                    aria-label={`Ordenar por ${column.label}`}
                    onClick={() => onSort(column.field)}
                  >
                    <span>{column.label}</span>
                    {isSorted && (
                      <MaterialSymbol
                        name={
                          sort.direction === 'asc'
                            ? 'arrow_drop_up'
                            : 'arrow_drop_down'
                        }
                        size={18}
                      />
                    )}
                  </UnstyledButton>
                </Table.Th>
              );
            })}

            <Table.Th className={classes.thAction}>
              <UnstyledButton
                className={classes.columnButton}
                aria-label="Escolher colunas"
                onClick={() => logPrototypeAction('Seleção de colunas')}
              >
                <MaterialSymbol name="view_column" size={24} />
              </UnstyledButton>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {customers.map((customer) => (
            <Table.Tr key={customer.code} className={classes.row}>
              <Table.Td
                className={classes.codeCell}
                data-status={customer.status}
              >
                <span className="sr-only">
                  Status: {customerStatusLabels[customer.status]}.
                </span>
                {customer.code}
              </Table.Td>
              <Table.Td className={classes.nameCell}>{customer.name}</Table.Td>
              <Table.Td className={classes.typeCell}>{customer.type}</Table.Td>
              <Table.Td className={classes.cityCell}>
                {customer.city} / {customer.state}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
