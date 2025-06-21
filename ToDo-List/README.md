# Sistema de Gerenciamento de Tarefas (TO-DO List)

## Visão Geral

Este projeto consiste na criação de um sistema de ***gerenciamento de tarefas (TO-DO List)*** com funcionalidades essenciais para organizar o dia a dia, além de alguns extras para aprimorar o controle e o acompanhamento do progresso das tarefas.

O objetivo é colocar em prática conceitos de ``CRUD, organização de dados, filtragem, categorização e histórico``, usando as ferramentas e tecnologias que você já domina.

---

## Funcionalidades Principais

1. **CRUD de Tarefas**
   - **Criar**: Permitir o cadastro de novas tarefas, com ao menos nome/título e descrição.
   - **Ler**: Listar todas as tarefas existentes.
   - **Atualizar**: Possibilitar edição dos dados de cada tarefa.
   - **Deletar**: Permitir a exclusão de tarefas.

2. **Categorias de Tarefas**
   - Cada tarefa pode pertencer a uma ou mais categorias (exemplo: "Estudos", "Trabalho", "Pessoal").
   - Deve ser possível listar tarefas por categoria.
   - O usuário pode criar, editar e excluir categorias.

3. **Filtros por Status**
   - Toda tarefa deve ter um status: **pendente**, **em andamento** ou **concluída**.
   - O usuário pode filtrar a lista de tarefas por status.

4. **Histórico de Alterações** (Extra)
   - Manter um histórico de alterações de cada tarefa: o que mudou, quando e, se aplicável, por quem.
   - Exemplo: Quando um status muda de "em andamento" para "concluída", registrar esta alteração.

---

## Requisitos Técnicos

- **Estrutura de Dados:** Use arrays, listas, objetos, banco de dados simples ou qualquer estrutura que preferir conforme seu conhecimento.
- **Interface:** Pode ser linha de comando, interface gráfica simples (web ou desktop), conforme sua preferência e domínio.
- **Persistência:** Opcional. Se souber, implemente um sistema para guardar as informações mesmo depois de fechar o programa (ex: salvar em arquivo ou banco de dados).
- **Organização:** Separe bem o código (por exemplo, funções para cada operação, organização em arquivos, etc).

---

## Requisitos Funcionais

- O usuário deve conseguir criar, visualizar, editar e excluir tarefas e categorias.
- O usuário deve conseguir filtrar tarefas por status e por categoria.
- Todas as mudanças relevantes em uma tarefa devem ser registradas no histórico.

---

## Pontos Extras (Opcional)

- Busca de tarefas por palavra-chave.
- Sistema de prioridade para tarefas.
- Possibilidade de marcar tarefas recorrentes.
- Exportar/importar tarefas (JSON, CSV etc).

---

## Entrega

- Código fonte organizado.
- README explicando como executar/testar o sistema.
- Comente no código suas decisões e pontos importantes.

---


### **`LEIA COMO EXECUTAR/TESTAR O SISTEMA no módulo INITIALIZATION.MD`**