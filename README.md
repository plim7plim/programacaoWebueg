# Programação Web - UEG

Exercícios de aula de Programação Web (HTML, CSS e JavaScript), **todos comentados linha por linha** para estudar para a prova.

## Como usar

1. Baixe/clone a pasta.
2. Abra qualquer `.html` no navegador (clique duas vezes) **ou** use a extensão **Live Server** no VS Code (botão direito > *Open with Live Server*).
3. Abra o mesmo arquivo no VS Code e leia os comentários `<!-- ... -->`. Eles explicam cada tag e cada atributo.
4. Para revisar tudo de uma vez, leia o **[`tecnicas.txt`](tecnicas.txt)**: é um resumo de todas as técnicas, com dicas de prova.

## O que tem em cada pasta

| Pasta | Arquivo | Assunto |
|---|---|---|
| `02-09` | `index.html` | `div`, `span`, `id`, CSS inline, cores, `<b>` |
| `02-09` | `tarefa.html` | Tags semânticas: `header`, `nav`, `main`, `section`, `article`, `footer` |
| `09-09` | `index.html` | Formulário completo: `form`, `fieldset`, `label`, todos os tipos de `input`, `select`, `radio`, `checkbox`, `textarea`, botões |
| `16-09` | `index.html` | Formulário simples (método GET) |
| `16-09` | `index2.html` | Formulário de cadastro (método POST) |
| `16-09` | `tarefa.html` | Cadastro completo: `pattern` de CPF/CEP, select com os estados, checkboxes, termo de aceite |
| `26` | `index.html` | Tabelas (`colspan`, `rowspan`, `thead`, `tbody`, `tfoot`) e listas (`ul`, `ol`, aninhada) |
| `26` | `tarefa.html` | CSS interno (`<style>`), seletores, imagens, links e tabela com `colgroup` |
| `outros` | `index.html` + `style.css` + `script.js` | CSS **externo**, JavaScript externo, `onclick`, `function`, `alert` |
| `outros` | `index2.html` | Títulos `h1` a `h6` e parágrafos |
| `outros` | `tarefaCasa.html` | Poema com `br`, imagens, `alt`/`title`/`width`, `target _blank` x `_self` |
| `tarefacasa` | `tarefaRoberto.html` | Página semântica com imagem que vira link e vídeo do YouTube (`iframe`) |

## Resumo rápido para a prova

| Isso | x | Aquilo |
|---|---|---|
| `div`: bloco (ocupa a linha) | | `span`: inline (no meio do texto) |
| `ul`: lista com bolinha | | `ol`: lista numerada |
| `th`: célula de cabeçalho | | `td`: célula de dado |
| `colspan`: junta **colunas** (horizontal) | | `rowspan`: junta **linhas** (vertical) |
| `GET`: dados na URL | | `POST`: dados escondidos |
| `radio`: escolhe **um** | | `checkbox`: escolhe **vários** |
| `#id`: único | | `.classe`: pode repetir |
| `margin`: espaço **fora** | | `padding`: espaço **dentro** |
| `target="_blank"`: nova aba | | `target="_self"`: mesma aba |
| `<head>`: configurações | | `<header>`: cabeçalho visível |

**3 jeitos de usar CSS:** inline (`style=""`), interno (`<style>` no head) e externo (`<link rel="stylesheet" href="style.css">`).

## Atenção

Alguns arquivos têm **pequenos erros que foram mantidos como estavam** (por exemplo: `label` com `for` diferente do `id`, `id` repetido, CEP com `type="number"`). Eles estão **marcados nos comentários** e listados na seção *Erros comuns* do `tecnicas.txt`. Vale a pena ler, porque é o tipo de coisa que o professor cobra.

Boa prova! 🍀
