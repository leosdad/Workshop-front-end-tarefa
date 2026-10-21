export const customerStatusLabels = {
  active: 'Ativo',
  inactive: 'Inativo',
  blocked: 'Bloqueado',
} as const;

export type CustomerStatus = keyof typeof customerStatusLabels;

export type CustomerType = 'Pessoa Física' | 'Pessoa Jurídica';

export interface Customer {
  code: string;
  name: string;
  type: CustomerType;
  city: string;
  state: string;
  status: CustomerStatus;
}

export type CustomerSortField = 'code' | 'name' | 'type' | 'city';

export type SortDirection = 'asc' | 'desc';

export interface CustomerSort {
  field: CustomerSortField;
  direction: SortDirection;
}

export interface CustomerListParams {
  page: number;
  pageSize: number;
  sort: CustomerSort;
}

export interface CustomerListResult {
  items: Customer[];
  total: number;
}
