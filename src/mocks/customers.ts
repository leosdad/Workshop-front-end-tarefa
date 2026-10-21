import type { Customer, CustomerStatus, CustomerType } from '../types/customer';

const referenceCustomers: Customer[] = [
  {
    code: '2452',
    name: 'Abelardo Ruiz Companhia Ltda.',
    type: 'Pessoa Jurídica',
    city: 'São Paulo',
    state: 'SP',
    status: 'active',
  },
  {
    code: '2453',
    name: 'Andreotti Comércio de Alimentos Ltda.',
    type: 'Pessoa Jurídica',
    city: 'Marília',
    state: 'SP',
    status: 'active',
  },
  {
    code: '2454',
    name: 'Adair de Almeida Souza',
    type: 'Pessoa Física',
    city: 'Curitiba',
    state: 'PR',
    status: 'active',
  },
  {
    code: '2455',
    name: 'Alberto Morais da Silva',
    type: 'Pessoa Física',
    city: 'Belo Horizonte',
    state: 'MG',
    status: 'active',
  },
  {
    code: '2456',
    name: 'Betani Comercial de Alimentos Ltda.',
    type: 'Pessoa Jurídica',
    city: 'Campinas',
    state: 'SP',
    status: 'inactive',
  },
  {
    code: '2457',
    name: 'Brimax Comércio de Alimentos Ltda.',
    type: 'Pessoa Jurídica',
    city: 'Rio de Janeiro',
    state: 'RJ',
    status: 'active',
  },
  {
    code: '2458',
    name: 'Bruno Fonseca de Almeida',
    type: 'Pessoa Física',
    city: 'São Paulo',
    state: 'SP',
    status: 'active',
  },
  {
    code: '2459',
    name: 'Castro & Lima Comércio Ltda.',
    type: 'Pessoa Jurídica',
    city: 'Salvador',
    state: 'BA',
    status: 'blocked',
  },
  {
    code: '2460',
    name: 'Cesto de Frutas Comércio Ltda.',
    type: 'Pessoa Jurídica',
    city: 'Porto Alegre',
    state: 'RS',
    status: 'active',
  },
];

const companyBases = [
  'Nova Era Distribuidora',
  'Vale Verde Alimentos',
  'Santa Clara Comercial',
  'Boa Safra Distribuidora',
  'Rio Claro Alimentos',
  'Casa do Campo Comercial',
  'Estrela do Sul Alimentos',
  'Ponto Certo Distribuidora',
  'Serra Azul Comercial',
  'Mercado Central Atacado',
  'Campo Belo Alimentos',
  'Horizonte Distribuidora',
];

const companySuffixes = ['Ltda.', 'ME', 'EIRELI', 'S.A.', 'Comércio Ltda.'];

const personFirstNames = [
  'Ana',
  'Carla',
  'Daniel',
  'Eduarda',
  'Felipe',
  'Gabriela',
  'Henrique',
  'Isabela',
  'João',
  'Larissa',
];

const personLastNames = ['Barbosa', 'Costa', 'Ferreira', 'Lima', 'Martins', 'Pereira'];

const cities: Array<[string, string]> = [
  ['São Paulo', 'SP'],
  ['Campinas', 'SP'],
  ['Rio de Janeiro', 'RJ'],
  ['Belo Horizonte', 'MG'],
  ['Curitiba', 'PR'],
  ['Porto Alegre', 'RS'],
  ['Salvador', 'BA'],
  ['Recife', 'PE'],
  ['Fortaleza', 'CE'],
  ['Goiânia', 'GO'],
  ['Brasília', 'DF'],
  ['Florianópolis', 'SC'],
  ['Vitória', 'ES'],
  ['Manaus', 'AM'],
  ['Belém', 'PA'],
  ['Marília', 'SP'],
];

const statusPattern: CustomerStatus[] = [
  'active',
  'active',
  'inactive',
  'active',
  'blocked',
  'active',
  'inactive',
];

const companyNames = companyBases.flatMap((base) =>
  companySuffixes.map((suffix) => `${base} ${suffix}`),
);

const personNames = personFirstNames.flatMap((firstName) =>
  personLastNames.map((lastName) => `${firstName} ${lastName}`),
);

const additionalCustomers: Customer[] = Array.from({ length: 119 }, (_, index) => {
  const isCompany = index % 2 === 0;
  const name = isCompany
    ? companyNames[index / 2]
    : personNames[(index - 1) / 2];
  const type: CustomerType = isCompany ? 'Pessoa Jurídica' : 'Pessoa Física';
  const [city, state] = cities[index % cities.length];

  return {
    code: String(2461 + index).padStart(4, '0'),
    name,
    type,
    city,
    state,
    status: statusPattern[index % statusPattern.length],
  };
});

/** 128 clientes determinísticos para demonstrar ordenação e paginação. */
export const mockCustomers: Customer[] = [...referenceCustomers, ...additionalCustomers];
