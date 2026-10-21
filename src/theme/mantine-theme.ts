import { createTheme, type MantineColorsTuple } from '@mantine/core';

/**
 * Paleta Mantine espelhando as cores do cliente definidas em
 * `client-colors.css` (fonte de verdade dos estilos).
 */
const mercadoBom: MantineColorsTuple = [
  '#eaf0fa',
  '#d2dff3',
  '#a8bfe5',
  '#7a9cd6',
  '#557fc8',
  '#3663b3',
  '#1d4289',
  '#17366f',
  '#112a58',
  '#0b1d3d',
];

export const theme = createTheme({
  primaryColor: 'mercadoBom',
  primaryShade: 6,
  colors: { mercadoBom },
  fontFamily: '"Noto Sans", system-ui, sans-serif',
  headings: {
    fontFamily: '"Noto Sans", system-ui, sans-serif',
    fontWeight: '600',
  },
  defaultRadius: 8,
});
