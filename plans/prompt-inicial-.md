
# Protótipo funcional de sistema de gestão

## Tarefa

Vamos criar um protótipo funcional para o front-end para um pequeno sistema web de gestão para supermercados pequeno porte. Ele deve ser otimizado para desktop e tablets, e na versão mobile deve somente emitir um aviso de incompatibilidade.

## Referências

Veja a imagem __refs\Listagem.png e abra o SVG __refs\Listagem.svg para detalhes, observando os `id`s, que são os nomes dos layers utilizados.

A aplicação deve ter uma barra superior, uma barra lateral esquerda e uma área de trabalho.

## Barra superior

A barra superior possui, em ordem:

- Um botão para escolha dos módulos;
- um separador vertical exatamente a 248 pixels da borda esquerda;
- A área de abas, que é responsiva horizontalmente. No momento faremos somente a aba Clientes. Ignore a outra aba ("Stella Doro Alimentos Ltda").
- Um bloco alinhado à direita, contendo o avatar do cliente (com tooltip para o nome no mouseover) (use __refs\avatar.png), um separador vertical, o nome do estabelecimento onde o cliente está logado, outro separador, e o logo do supermercado 140 x 40 (omitido no SVG), que é __refs\logo-super.png.

## Barra lateral esquerda

- A barra esquerda possui exatamente 248 pixels.
- Ela ocupa toda a altura disponível abaixo da barra superior e possui fundo na cor principal definida no arquivo de cores do cliente (#1D4289).
- No topo da barra existe um campo de busca "Buscar por tela", com ícone de pesquisa, usado para localizar rapidamente telas ou opções do sistema.
- Abaixo da busca existe a navegação principal, organizada em grupos.
- O item atualmente selecionado deve ter um fundo contrastante, cantos arredondados e texto com destaque visual.
- Os itens visíveis neste protótipo são: Clientes, Devoluções, Separador horizontal, Pedidos de compra, e Fechamento financeiro.
- O grupo que contém "Clientes" e "Devoluções" deve ser visualmente separado do grupo que contém "Pedidos de compra" e "Fechamento financeiro".
- Os itens de navegação devem ser preparados como mock data, e não codificados diretamente dentro do componente visual, para permitir a inclusão posterior de novas telas.
- Na parte inferior da barra lateral existe uma área reservada para o logotipo do fabricante (__refs\logo-vendor.svg).
- O botão de fechar a barra lateral, que está à direita do logo do fabricante, não existirá no protótipo.
- A barra lateral não deve possuir rolagem horizontal. Caso a quantidade de itens de navegação ultrapasse a altura disponível, somente a área de navegação deve poder rolar verticalmente.

## Área de trabalho

- A área de trabalho ocupa todo o espaço restante à direita da barra lateral e abaixo da barra superior.
- Ela deve ter fundo em tom muito claro (#F2F2F6), conforme a referência visual.
- A tela Clientes é a única que vamos implementar por enquanto.
- O conteúdo da tela Clientes deve ser organizado em uma área de cabeçalho e uma área de listagem.
- O cabeçalho da área de trabalho deve conter:
  - O título "Clientes" em cima;
  - Uma barra de ferramentas com dois blocos:
    - O bloco esquerdo com:
        - um botão primário "Novo cliente";
        - um botão de ações adicionais representado por três pontos verticais;
        - um botão adicional (será ignorado no nosso protótipo)
    - À direita, o outro bloco com:
        - o indicador "Todos os clientes", que sinaliza que os filtros não estão ativos;
        - uma ação para filtros;
        - uma ação de informações.
- A listagem deve ocupar toda área disponível e ser apresentada como uma tabela.
- A tabela deve possuir as colunas: Código, Nome, Tipo e Cidade.
- As colunas devem permitir ordenação. Inicialmente, a listagem deve deve estar ordenada em ordem crescente de nome.
- As linhas devem apresentar dados mockados de clientes, suficientes para demonstrar rolagem vertical e paginação.
- A primeira coluna deve apresentar uma indicação visual vertical do estado do registro (coluna status), utilizando as cores definidas pelo tema.
- O código do cliente deve ter maior peso tipográfico que os demais dados da linha.
- A tabela deve ter cabeçalho fixo durante a rolagem vertical.
- A área da tabela deve possuir rolagem vertical própria, sem fazer a página inteira rolar.
- Na parte inferior da listagem deve existir uma área de paginação mostrando a quantidade de registros exibidos e controles para primeira página, página anterior, próxima página e última página. Como vamos usar o Mantine Pagination, deixaremos de fora as opções que ele não permite fazer nativamente.
- Abaixo ou junto à área de paginação, conforme a referência SVG, deve ser reservado espaço para ações e informações relacionadas à tabela ("1 a 30 de 128 clientes").
- O layout deve ser responsivo para diferentes larguras de desktop e tablet, preservando a barra lateral de 248 pixels e permitindo que a área de trabalho ocupe o espaço restante.
- Não é necessário implementar neste primeiro protótipo o cadastro ou edição efetiva de clientes. O botão "Novo cliente" deve apenas estar funcional o suficiente para demonstrar a interação, podendo apenas emitir uma notificação indicando que a operação ainda não está implementada.
- As ações de filtro, informações e ações adicionais também podem ser demonstradas por meio de componentes de interface, sem necessidade de implementar toda a lógica de negócio.
- A aparência geral deve seguir fielmente a hierarquia visual, espaçamentos, proporções, tipografia, bordas, ícones e alinhamentos observados em `__refs\Listagem.png` e `__refs\Listagem.svg`, sem introduzir elementos visuais que não sejam necessários ao protótipo.

## Implementação de código

- Stack: use React/Vite com TypeScript, Mantine v. 9.7.3, e ícones do Material Symbols.
- Crie componentes reutilizáveis (pasta `src/components/`) com um módulo CSS para cada um.
- Dê sempre preferência aos componentes Mantine em vez de nativos. **Não utilize componentes nativos HTML quando existir um equivalente Mantine**.
- Use um arquivo CSS separado que conterá as cores do cliente (no nosso exemplo, as cores são do supermercado "MercadoBom").

## Back-end

Por enquanto use dados mockados, mas deixe a estrutura preparada para conectar uma
API posteriormente. **Não implemente autenticação nem backend nesta primeira versão.**

Resolva as dúvidas comigo e salve o planejamento em `plan.md` antes de prosseguir.