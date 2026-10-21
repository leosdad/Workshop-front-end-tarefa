import type { NavGroup } from '../types/navigation';

/**
 * Mock data da navegação principal. Novas telas devem ser adicionadas aqui,
 * sem alterar o componente visual da sidebar.
 */
export const navigationGroups: NavGroup[] = [
  {
    id: 'relacionamento',
    items: [
      { id: 'clientes', label: 'Clientes' },
      { id: 'devolucoes', label: 'Devoluções' },
    ],
  },
  {
    id: 'operacao',
    items: [
      { id: 'pedidos-de-compra', label: 'Pedidos de compra' },
      { id: 'fechamento-financeiro', label: 'Fechamento financeiro' },
    ],
  },
];
