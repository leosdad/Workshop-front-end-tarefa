# Plano: Protótipo de Gestão — Tela Clientes

## TL;DR

Criar o app na raiz do workspace com Vite + React 19 + TypeScript + Mantine 9.7.3, Noto Sans self-hosted e Material Symbols via npm. Layout fixo de 64px (topbar) + 248px (sidebar) com **largura mínima de 1280px**: abaixo disso a página inteira rola horizontalmente; abaixo de 768px apenas o aviso de incompatibilidade. A tela Clientes tem cabeçalho, toolbar, tabela ordenável com header sticky e rolagem vertical própria, paginação Mantine only-arrows e 128 registros mockados atrás de um serviço pronto para API.

## Decisões confirmadas

- **Largura mínima do app: 1280px.** Entre 768px e 1279px: UI completa com scroll horizontal da página. Abaixo de 768px: somente aviso mobile.
- **Status:** Ativo (`#79D05F`), Inativo (`#FF5454`) e Bloqueado (`#F1BE48`).
- **Interações:** apenas o menu "⋯" abre Menu Mantine. Módulos, busca, filtros, informações, colunas e botão extra emitem `console.info`. Itens de navegação não implementados emitem notificação e mantêm Clientes ativo.
- **Botão de colunas (`view_column`)** incluído como botão visual (console).
- **Tipografia:** Noto Sans via `@fontsource/noto-sans`; ícones via `@material-symbols/font-400` (offline após install).
- **Verificação:** `npm install` e `npm run build` (inclui `tsc`) autorizados. Playwright não será usado.
- **Escopo:** sem router, backend, autenticação, cadastro/edição, testes automatizados.

## Estratégia de layout

`AppShell` do Mantine posiciona header/navbar como `fixed`, o que impede a rolagem horizontal de toda a UI exigida abaixo de 1280px. O shell é um grid CSS próprio (com primitivas Mantine: Box/Paper/ScrollArea/Table):

- `html, body`: `overflow-x: auto; overflow-y: hidden` (barra horizontal no nível do documento).
- Root do app: `min-width: 1280px; height: 100%` (herdando 100% de html/body/#root).
- Grid: linha 1 = topbar 64px full-width; linha 2 = sidebar 248px + main.
- Sidebar ocupa toda a altura abaixo da topbar, cantos direitos arredondados 8px, sem rolagem horizontal; só a região de navegação rola.
- Main: padding 24px, fundo `#F2F2F6`, sem rolagem de página; card da tabela usa o espaço restante.
- Mobile (<768px): componente de aviso substitui todo o shell; sem min-width.

## Tokens visuais medidos da referência

- Primária `#1D4289`; primária suave `#CEDDF9` (90% no item ativo); acento/aviso `#F1BE48`; sucesso `#79D05F`; perigo `#FF5454`; superfície `#F2F2F6`; texto `#202023`.
- Divider fraco `rgba(32,32,35,.08)`; divider do header da tabela `rgba(47,47,47,.2)`; separadores da topbar `rgba(32,32,35,.2)`.
- Topbar: 64px; bloco do módulo 248px; separador 1x40 no x=248; aba ativa com underline 4px `#F1BE48`; avatar 32px; divisores de 24px em volta; logo 140x40.
- Sidebar: 248px; busca sem borda, placeholder itálico branco 64%; itens 216x40, raio 8; separador de grupo 1px branco 20%; logo do fabricante 36px centralizado no rodapé.
- Main: padding 24px; título 18px/600; toolbar 40px; gaps 16px (título→toolbar) e 24px (toolbar→tabela).
- Card: raio 8, branco, sombra sutil; header da tabela 40px; linhas 54px; largura 1070px em 1366.
- Colunas: Código 100px (inclui barra de status 6px), Nome flexível, Tipo 180px, Cidade 180px, coluna final 124px. Em 1280, Nome = 400px.
- Rodapé da listagem: 14px, alinhado ao conteúdo, altura 32px, margem superior 12px; controles de 40px com gap 12px.
- Scrollbar da tabela: 6px, thumb `rgba(47,47,47,.2)`, raio 3.

## Estrutura de arquivos

```
src/
  main.tsx, App.tsx, index.css, App.module.css
  assets/ (avatar.png, logo-super.png, logo-vendor.svg)
  theme/client-colors.css, theme/mantine-theme.ts
  components/
    AppHeader/ (tsx + module.css)
    AppSidebar/ (tsx + module.css)
    CustomersToolbar/ (tsx + module.css)
    CustomersTable/ (tsx + module.css)
    TablePagination/ (tsx + module.css)
    MaterialSymbol/ (tsx + module.css)
    UnsupportedDevice/ (tsx + module.css)
  pages/CustomersPage/ (tsx + module.css)
  hooks/useCustomers.ts
  services/customersService.ts
  mocks/customers.ts, mocks/navigation.ts, mocks/session.ts
  types/customer.ts, types/navigation.ts
  utils/prototypeLog.ts
```

## Etapas

### Fase 1 — Scaffold e tema

1. Projeto Vite react-ts na raiz, sem tocar em `__refs/` e `plans/`. Dependências: React 19.2, `@mantine/core|hooks|notifications` 9.7.3, `@fontsource/noto-sans`, `@material-symbols/font-400`. Scripts `dev`, `build`, `preview`.
2. `main.tsx`: importar estilos Mantine e Notifications, Noto Sans latin 400/500/600/700, Material Symbols outlined, tokens do cliente, `index.css`; `MantineProvider` + `Notifications` + StrictMode.
3. `client-colors.css` com os tokens; `mantine-theme.ts` com paleta `mercadoBom` de 10 tons, `primaryColor`, `primaryShade: 6`, Noto Sans e `defaultRadius: 8`.

### Fase 2 — Shell, topbar, sidebar e aviso mobile

4. `App.tsx`: `useMediaQuery('(max-width: 47.99em)', ...)` decide entre aviso e shell.
5. `AppHeader`: bloco de módulo de 248px com ícone `apps` e rótulo (console), divisor, `Tabs` Mantine de uma aba "Clientes" (64px, underline 4px acento, área flexível), bloco direito com Avatar 32 + Tooltip, divisor, estabelecimento em duas linhas, divisor e logo 140x40.
6. `AppSidebar`: fundo primário e raio direito; `TextInput` unstyled com busca (placeholder itálico, log no console); grupos de `mocks/navigation.ts`; `UnstyledButton` 216x40 raio 8; ativo com `#CEDDF9` 90%; divisor de 1px entre grupos; itens não implementados notificam; navegação em `ScrollArea` apenas vertical; logo do fabricante centralizado no rodapé (sem botão fechar).
7. `UnsupportedDevice`: tela cheia, fundo primário, ícone, título e texto de incompatibilidade.

### Fase 3 — Tela Clientes e dados

8. `CustomersPage`: título, `CustomersToolbar` e tabela. Toolbar esquerda: "Novo cliente" (notificação), Menu do kebab com itens mock que logam, ActionIcon extra que loga. Toolbar direita: "Todos os clientes", filtro e informações (logam).
9. Dados: tipos de cliente/ordenação; 128 registros determinísticos incluindo os 9 nomes da referência; serviço assíncrono `listCustomers({ page, pageSize, sort })` com implementação mock e ponto único de troca por `fetch`; hook com página/ordenação, reset para página 1 ao ordenar e loading/erro.
10. `CustomersTable`: `Table stickyHeader layout="fixed"` em `Table.ScrollContainer type="native"`; header 40px com headers ordenáveis (`aria-sort` + seta na coluna ativa) e `view_column`; linhas 54px; barra de status 6px na primeira célula; Código 600; larguras 100/auto/180/180/124; card branco com scrollbar customizada; reset do scroll ao trocar dados.
11. `TablePagination`: "X a Y de 128 clientes" à esquerda; `Pagination withPages={false} withEdges`, 4 controles de 40px, gap 12, ícones Material Symbols, aria-labels em português e disabled nativo. 30 itens por página.

### Fase 4 — Acabamento e verificação

12. Conferir medidas, estados e fidelidade em 1366x768.
13. `npm install`, `npm run build`, `npm run dev` e checklist manual.

## Matriz de interação

- Novo cliente → notificação "não implementado".
- Kebab → Menu Mantine; itens logam no console.
- Módulos, busca, filtros, informações, colunas, botão extra → `console.info`.
- Itens da sidebar não implementados → notificação; Clientes permanece ativo.
- Busca da sidebar não filtra (apenas log).
- Ordenação e paginação funcionam com os dados mock.
- Avatar → Tooltip.

## Verificação

1. `npm run build` sem erros de TS.
2. 1366x768: comparar com `__refs/Listagem.png` (topbar 64, sidebar 248, card, linhas 54, header 40, footer).
3. 1280x800: tudo cabe; Nome encolhe para ~400px.
4. 1024x768: UI completa, barra horizontal da página; sidebar e topbar rolam junto.
5. 767px: apenas aviso mobile.
6. Tabela: 30 linhas por página, header sticky, rolagem vertical só no card, ordenação asc/desc + seta, "1 a 30 de 128 clientes" e última página "121 a 128 de 128 clientes".
7. Sidebar: confirmar que só a navegação rola, sem scroll horizontal.
8. Console: mensagens esperadas apenas ao acionar controles mock; sem erros de runtime.

## Fora de escopo

Autenticação, backend, router, cadastro/edição real, filtros/busca funcionais, seletor de colunas funcional, tema escuro, testes E2E/Playwright.
