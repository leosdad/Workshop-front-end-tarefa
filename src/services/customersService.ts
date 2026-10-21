import { mockCustomers } from '../mocks/customers';
import type {
  Customer,
  CustomerListParams,
  CustomerListResult,
  CustomerSortField,
} from '../types/customer';

const collator = new Intl.Collator('pt-BR', {
  sensitivity: 'base',
  numeric: true,
});

const comparators: Record<CustomerSortField, (a: Customer, b: Customer) => number> = {
  code: (a, b) => Number(a.code) - Number(b.code),
  name: (a, b) => collator.compare(a.name, b.name),
  type: (a, b) => collator.compare(a.type, b.type),
  city: (a, b) =>
    collator.compare(a.city, b.city) || collator.compare(a.state, b.state),
};

/**
 * Contrato único da listagem. Para conectar a API, basta substituir o corpo
 * desta função por um `fetch`, mantendo o mesmo formato de retorno.
 */
export async function listCustomers({
  page,
  pageSize,
  sort,
}: CustomerListParams): Promise<CustomerListResult> {
  const direction = sort.direction === 'asc' ? 1 : -1;

  const sorted = [...mockCustomers].sort((a, b) => {
    const result = comparators[sort.field](a, b);
    return result !== 0 ? result * direction : collator.compare(a.name, b.name);
  });

  const start = (page - 1) * pageSize;

  return {
    items: sorted.slice(start, start + pageSize),
    total: sorted.length,
  };
}
