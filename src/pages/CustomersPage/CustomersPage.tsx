import { Title } from '@mantine/core';

import { CustomersTable } from '../../components/CustomersTable/CustomersTable';
import { CustomersToolbar } from '../../components/CustomersToolbar/CustomersToolbar';
import { TablePagination } from '../../components/TablePagination/TablePagination';
import { useCustomers } from '../../hooks/useCustomers';
import classes from './CustomersPage.module.css';

export function CustomersPage() {
  const {
    customers,
    total,
    page,
    pageSize,
    pageCount,
    sort,
    isLoading,
    setPage,
    toggleSort,
  } = useCustomers();

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <Title order={1} size="h4" className={classes.title}>
          Clientes
        </Title>
        <CustomersToolbar />
      </div>

      <div className={classes.card}>
        <CustomersTable
          customers={customers}
          sort={sort}
          isLoading={isLoading}
          onSort={toggleSort}
        />
      </div>

      <TablePagination
        page={page}
        pageCount={pageCount}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
      />
    </div>
  );
}
