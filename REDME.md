Principios SOLID:
    [OK] - Quais são os principios
    [Ok] - O que é cada um

MVC:
    [OK] - O que é
    [OK] - Como funciona

Projeto Prático - API de Produtos:
    [OK] - Inicialização do projeto e instalação do typescript
        npm init -y, npm i typescript ts-node @types/node --save-dev, npx tsc --init
    [OK] - Configuração do tsconfig.json e do package.json
    [OK] - Criação da entidade
    [] - Criação do repositório
        [OK] - Criação do contrado
        [] - Instalação e configuração do prisma + sqlite
        [] - Criação do repositório de produtos
    [OK] - Criação do serviço
        [OK] - Criação do contrato
        [OK] - Implementação concreta
    [] - Criação do controller
    [] - Criação da API
        [] - Criação do contrado
        [] - Implementação concreta




S - single responsability > toda classe deveria ter somente um motivo para existir/ser modificado
O - open-closed > toda classe deveria estar fechada para modificar e aberta oara extensão
L - liskov > toda classe deveria ser possível de ser substituida por uma de suas filhas
I - interface segregation > a implementação concreta de uma interface deveria implementar todos os metodos
D - dependecy inversion > uma classe deveria depender de uma abstração, e não de uma implementação concreta

VIEW  -> client/UI --> request HTTP/Json --> controller
CONTROLLER -> --> DTO
MODEL -> DTO --> (Entirty <-- Service --> Repository) --> (Entity <-- Repository --> DB)

sempre que se faz transição de camadas passa-se o DTO apenas