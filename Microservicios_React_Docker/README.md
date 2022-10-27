

# Microservicios Spring boot +  React + Postgresql + Docker

- Implementación de un backend simple con API Rest en Spring Boot, con dos **microservicios**.
- Comunicación entre microservicios usando **RestTemplate**. Todos los microservicios usan puertos estáticos (fijos).
- BD **postgresql** para los microservicios
- Encapsulación de microservicios en contenedores **docker**. Cada microservicio en un contenedor independiente y se comunican entre sí por networks.

# Encapsulación microservicios en Docker - Sin docker compose

1. Correr cada microservicio desde spring boot para generar .jar:  Run as maven install
2. Crear imágenes para cada microservicio `docker image build -t nombre-imagen .`
    - Listar imagenes `docker image ls`
3. Crear network `docker network create microservicios`
    - Listar network `docker network ls`
4. Conectar network con contenedores para cada microservicio `docker container run --network microservicios --name contenedor-1 -p 8002:8002 -d nombre-imagen1`
5. Conectar network con contenedores para postgresql `docker container run --network microservicios --name dbpostgresql -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=microservicio -d postgres:12`

# Docker Compose
  ```
  docker-compose up
  ```

# Documentación

https://docs.docker.com/compose/
