import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { listCustomers } from '../services/customersService';
import type { Customer, CustomerSort, CustomerSortField } from '../types/customer';

const PAGE_SIZE = 30;

const DEFAULT_SORT: CustomerSort = { field: 'name', direction: 'asc' };

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<CustomerSort>(DEFAULT_SORT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    listCustomers({ page, pageSize: PAGE_SIZE, sort })
      .then((result) => {
        if (cancelled) {
          return;
        }

        setCustomers(result.items);
        setTotal(result.total);
      })
      .catch(() => {
        if (!cancelled) {
          notifications.show({
            title: 'Erro ao carregar clientes',
            message: 'Não foi possível carregar a listagem. Tente novamente.',
            color: 'red',
          });
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [page, sort]);

  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));

  useEffect(() => {
    if (page > pageCount) {
      setPage(pageCount);
    }
  }, [page, pageCount]);

  const toggleSort = (field: CustomerSortField) => {
    setSort((current) =>
      current.field === field
        ? {
            field,
            direction: current.direction === 'asc' ? 'desc' : 'asc',
          }
        : { field, direction: 'asc' },
    );
    setPage(1);
  };

  return {
    customers,
    total,
    page,
    pageSize: PAGE_SIZE,
    pageCount,
    sort,
    isLoading,
    setPage,
    toggleSort,
  };
}
