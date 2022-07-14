
#### Fluxo de LOGIN


> **POST** account/login 
    faz o login com email e senha

> **POST** account/forgot-password/:email
    envia um email para o usuario com link e token de recuperacao de senha

> **POST** account/reset-password/:token
    recebe no body senha e token para recuperar senha

> **GET** account/my-account/:jwtToken  
    retorna dados do usuário logado
    
---

#### CRUD de CLIENTES

>  **GET** cliente/  
    Retorna listagem de cliente

> **GET**  cliente/:cliente_id 
    Retorna um cliente pelo seu id

>  **POST** cliente/
    cadastra um cliente

> **PUT** cliente/:cliente_id 
    edita um cliente pelo seu id

> **DELETE** cliente/:cliente_id  
    deleta um cliente pelo seu id

> **GET** cliente/agendamentos/:cliente_id 
    Retorna os agendamentos de um cliente pelo seu id

---

#### CRUD de SERVIÇOS

>  **GET** servicos/  
    Retorna listagem de servicos

> **GET**  servicos/:servicos_id 
    Retorna um servicos pelo seu id

>  **POST** servicos/
    cadastra um servicos

> **PUT** servicos/:servicos_id 
    edita um servicos pelo seu id

> **DELETE** servicos/:servicos_id  
    deleta um servicos pelo seu id

---


#### CRUD de PESSOA

>  **GET** pessoa/  
    Retorna listagem de pessoa

> **GET**  pessoa/:pessoa_id 
    Retorna um pessoa pelo seu id

> **GET**  pessoa/:CPF 
    Retorna um pessoa pelo seu CPF
    **OBS**, sendo assim consigo fazer um autopreenchimento de dados das entidades (clientes, funcionarios, usuarios, etc) pelo CPF

>  **POST** pessoa/
    cadastra um pessoa

> **PUT** pessoa/:pessoa_id 
    edita um pessoa pelo seu id

> **DELETE** pessoa/:pessoa_id  
    deleta um pessoa pelo seu id

---

#### CRUD de FUNCIONÁRIOS

>  **GET** funcionario/  
    Retorna listagem de funcionario

> **GET**  funcionario/:funcionario_id 
    Retorna um funcionario pelo seu id

>  **POST** funcionario/
    cadastra um funcionario

> **PUT** funcionario/:funcionario_id 
    edita um funcionario pelo seu id

> **DELETE** funcionario/:funcionario_id  
    deleta um funcionario pelo seu id

> **GET** funcionario/agendamentos/:funcionario_id 
    Retorna os agendamentos de um funcionario pelo seu id

---

#### CRUD de PRODUTOS

>  **GET** produto/  
    Retorna listagem de produto

> **GET**  produto/:produto_id 
    Retorna um produto pelo seu id

>  **POST** produto/
    cadastra um produto

> **PUT** produto/:produto_id 
    edita um produto pelo seu id

> **DELETE** produto/:produto_id  
    deleta um produto pelo seu id

---

#### CRUD de USUÁRIOS

>  **GET** usuario/  
    Retorna listagem de usuario

> **GET**  usuario/:usuario_id 
    Retorna um usuario pelo seu id

>  **POST** usuario/
    cadastra um usuario

> **PUT** usuario/:usuario_id 
    edita um usuario pelo seu id

> **DELETE** usuario/:usuario_id  
    deleta um usuario pelo seu id
    
---

#### CRUD de SALÃO

>  **GET** salao/  
    Retorna listagem de salao

> **GET**  salao/:salao_id 
    Retorna um salao pelo seu id

>  **POST** salao/
    cadastra um salao

> **PUT** salao/:salao_id 
    edita um salao pelo seu id

> **DELETE** salao/:salao_id  
    deleta um salao pelo seu id

> **GET** salao/agendamentos/:salao_id 
    Retorna os agendamentos de um salao pelo seu id

---


#### CRUD de AGENDAMENTOS

>  **GET** agendamento/  
    Retorna listagem de agendamento

> **GET**  agendamento/:agendamento_id 
    Retorna um agendamento pelo seu id

>  **POST** agendamento/
    cadastra um agendamento

> **PUT** agendamento/:agendamento_id 
    edita um agendamento pelo seu id

> **DELETE** agendamento/:agendamento_id  
    deleta um agendamento pelo seu id

---