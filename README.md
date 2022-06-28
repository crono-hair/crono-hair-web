# Documentação

https://angular.io/cli



## Para rodar o projeto
ng serve --open


## Para instalar os pacotes
npm install

#### Use isso sempre que atualizar o github com pull


## Para gerar um componente
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### principais utilizados são:
component: componente que renderiza html
service: realiza as chamadas para as apis
module: carrega os components
guard: protege as rotas (urls) da aplicação (retorna true para guarda autorizada)
routing: organiza as rotas de um modulo
s
Obs: um modulo carrega vários componentes e outros módulos que carregam outros componentes
um módulo carrega as rotas e as rotas especificam quando um componente deve ser carregado

## Build
ng build


# Para a publicação

### ng build --base-href "https://crono-hair.github.io/crono-hair-web/"
### npx angular-cli-ghpages --dir=dist/crono-hair-web


# Referencias 
https://www.c-sharpcorner.com/blogs/a-guide-on-how-to-deploy-angular-applications-to-github-pages#:~:text=To%20deploy%20an%20Angular%20application%20to%20GitHub%20Pages%20you%20have,be%20deployed%20using%20GitHub%20Pages.
