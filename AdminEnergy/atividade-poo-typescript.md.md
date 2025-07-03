# Sistema de Gerenciamento de Consumo de Eletricidade

## Contexto

Você foi contratado pela empresa fictícia **EnergiaFácil S.A.** para desenvolver um **Sistema de Gerenciamento de Consumo de Eletricidade**. O objetivo é controlar e registrar o consumo dos contratantes, facilitar o atendimento (presencial e online), e permitir a geração de relatórios diários.

O projeto deve ser desenvolvido em **TypeScript**, utilizando **POO (Programação Orientada a Objetos)** com foco em Clean Code. A persistência de dados deve ser feita em **SQLite3** utilizando o pacote `better-sqlite3`.

---

## Funcionalidades obrigatórias

### 1. Cadastro e gerenciamento de contratantes

- Permitir o cadastro, consulta, atualização e exclusão de contratantes (clientes da empresa).
- Cada contratante deve possuir pelo menos: nome, CPF, endereço, código do contratante (único), e histórico de consumo.
- O sistema deve registrar o consumo de eletricidade **por hora** (exemplo: das 00:00 às 23:59 de cada dia).
- Geração de talões/faturas de consumo.
- Geração de **relatórios diários** de consumo para cada contratante.

### 2. Controle de acesso e autenticação

- O sistema deve possuir autenticação para **recepcionistas/atendentes** via login (usuário e senha).
- Contratantes podem ser identificados pelo CPF ou pelo código do contratante.
- Recepcionistas devem poder acessar dados e histórico de consumo dos clientes, gerar faturas e relatórios.

### 3. Sistema de filas de atendimento

- Implementar duas filas: **presencial** e **online**.
    - **Presencial:** O cliente pega uma senha física ao chegar e entra na fila de atendimento.
    - **Online:** O cliente entra na fila virtual para atendimento remoto.
- O sistema deve atribuir a senha ao próximo atendente disponível.
- Caso **não haja movimentação ou alteração na fila em 6 horas**, a fila deve ser reiniciada do zero.
- Clientes devem ser atendidos conforme a ordem de chegada.

### 4. Princípios de POO e Clean Code

- Use **herança**, **polimorfismo**, **encapsulamento** e **abstração** de forma explícita e clara.
- Utilize **interfaces** e **classes genéricas** para repositórios e entidades quando fizer sentido.
- Organize o código em camadas e módulos, facilitando a extensibilidade e manutenibilidade.
- Não utilize comentários explicativos no código: foque em nomes claros e na estrutura limpa.

### 5. Banco de dados

- Utilize **SQLite3** com `better-sqlite3` para persistência dos dados.
- As entidades principais devem ser persistidas no banco.
- Estruture o sistema para permitir fácil integração com outras fontes de dados, se necessário.

---

## Pontos extras (opcional)

- Criar uma **API REST** para expor as funcionalidades do sistema.
- Criar um **frontend simples** (pode ser CLI, web ou desktop) para facilitar o uso das funcionalidades.
- Implementar testes automatizados para as principais classes e fluxos.

---

## Observações

- Não é necessário fornecer dados de exemplo no código, mas se desejar testar, pode usar arquivos .json ou scripts para popular o banco.
- O foco principal é a arquitetura, o uso dos conceitos de POO, Clean Code e a persistência correta dos dados.
- Documente o sistema apenas com um **README.md** explicando como rodar e estruturar o projeto, se desejar.

---

## Entregáveis

- Código-fonte do sistema organizado em pastas e arquivos.
- Este arquivo de enunciado (**atividade-poo-typescript.md**).
- (Opcional) README.md com instruções de uso.

---

**Bom trabalho!**