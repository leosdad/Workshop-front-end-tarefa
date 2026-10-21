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
- A área de abas, que é responsiva horizontalmente. No momento faresmos somente a aba Clientes. Ignore a outra aba ("Stella Doro Alimentos Ltda").
- Um bloco alinhado à direita, contendo o avatar do cliente (com tooltip para o nome no mousaeover), um separador vertical, O nome do estabelecimento onde o cliente está logado, outro separador, e o logo do supermercado 140 x 40 (omitido no SVG), que é __refs\logo-super.png.

## Barra lateral esquerda

- A barra esquerda possui exatamente 248 pixels.
(Preencha aqui)

## Área de trabalho

(Preencha aqui)

## Implementação de código

- Stack: use React/Vite com TypeScript e Mantine (v. 9.7.3).
- Crie componentes reutilizáveis (pasta \`src/components\`) com um módulo CSS para cada um.
- Dê sempre preferência aos componentes Mantine em vez de nativos. **Não utilize componentes nativos HTML quando existir um equivalente Mantine**.
- Use um arquivo CSS separado que conterá as cores do cliente (no nosso exemplo, as cores são do supermercado "MercadoBom").

## Back-end

Por enquanto use dados mockados, mas deixe a estrutura preparada para conectar uma
API posteriormente. **Não implemente autenticação nem backend nesta primeira versão.**

Resolva as dúvidas comigo e salve o planejamento em *plan.md* (em memória) antes de prosseguir.