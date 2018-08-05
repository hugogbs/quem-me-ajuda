# Quem me ajuda

#### Projeto desenvolvido para a disciplina Desenvolvimento de Aplicações Corporativas Avançadas (DACA)

O QUEM ME AJUDA (QMA) tem como objetivo aproximar alunos que precisam de ajuda em disciplinas dos demais alunos capacitados para oferecer ajuda. No QMA o aluno pode realizar seu cadastro e se colocar como tutor. O sistema deve dar suporte a listagem de alunos e tutores e deve permitir a criação de AJUDAS.

## User Stories

### US1 - Cadastrar Alunos

Como sistema, deve ser possível cadastrar alunos para que os mesmos fiquem registrados e possam ser recuperados pela matrícula.

Cada aluno é identificado unicamente pela matrícula e tem um nome, código do curso, telefone e e-mail.

### US2 - Definir papéis (Tutores)

Como aluno, quero poder me disponibilizar como tutor para que eu possa atender ajudas de outros alunos de acordo com minha proficiência.

### US3 - Disponibilizar e listar horários e locais

Como tutor, quero disponibilizar meus locais e horários para que eu possa atender alunos de acordo com minha disponibilidade.

Cada tutor deve cadastrar um conjunto de locais (identificados por nome) e um conjunto de dias disponíveis. O tutor deve indicar sua disponibilidade nos dias úteis da semana (seg, ter, qua, qui, sex).

### US4 - Cadastrar Pedidos de Ajuda (Presencial ou Online)

Como aluno, quero pedir ajuda presencial ou online de forma que um tutor possa me atender de acordo com a minha necessidade.

Um aluno (seja tutor ou não) pode cadastrar um pedido de ajuda. Existem dois tipos de pedidos, o pedido de ajuda presencial e o pedido de ajuda online.

Na ajuda presencial, o aluno indica a disciplina e dia que quer uma ajuda e o local que tem interesse. Ao realizar um pedido no sistema, o sistema deve associar um tutor a esse pedido. O tutor escolhido precisa ter proficiência na disciplina e disponibilidade no local e no horário/dia indicado. Caso mais de um tutor esteja disponível naquele dia o de maior pontuação deve ser retornado (ou o primeiro aluno cadastrado em caso de empate). O mesmo tutor pode ser retornado para vários pedidos de ajuda diferentes.

Na ajuda online, a interação irá acontecer via email (ou hangouts) sem necessidade de disponibilidade de horário. Há necessidade de especificar apenas a disciplina de interesse da ajuda. O tutor associado deve ter proficiência nessa disciplina e ser aquele de maior pontuação (ou o primeiro cadastrado em caso de empate).

Ao cadastrar um pedido, é retornado um ID referente a ajuda marcada. Deve ser possível pegar informações sobre esse pedido de ajuda (qual foi a disciplina, dia e local de interesse). Deve ser possível pegar a matrícula do tutor que atenderá aquela ajuda, bem como pegar informações sobre a ajuda em si (horário, dia, local e disciplina).