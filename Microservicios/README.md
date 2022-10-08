# <img src="https://user-images.githubusercontent.com/66185308/188510672-82d8b4f3-a867-4f1c-93f3-52ebf4a8d766.png" width="100">  **+** <img src="https://user-images.githubusercontent.com/66185308/188510635-6dcedd41-cc12-48ac-a4f3-5685a892d169.png" width="100">   **+** <img src="https://cdn.worldvectorlogo.com/logos/postman.svg" width="100">



# Microservicios Spring boot

- Implementación de un backend simple con API Rest en Spring Boot, con dos **microservicios**.
- Comunicación entre microservicios usando **RestTemplate**. Todos los microservicios usan puertos estáticos (fijos).
- Encapsulación de microservicios en contenedores **docker**. Cada microservicio en un contenedor independiente y se comunican entre sí por networks.
- GET/POST desde **Postman**.

# Encapsulación microservicios en Docker


1. Correr cada microservicio desde spring boot para generar .jar:  Run as maven install
2. Crear imágenes para cada microservicio `docker image build -t nombre-imagen .`
    - Listar imagenes `docker image ls`
3. Crear network `docker network create microservicios`
    - Listar network `docker network ls`
4. Conectar network con contenedores para cada microservicio `docker container run --network microservicios --name contenedor-1 -p 8002:8002 -d nombre-imagen1`

# Peticiones GET/POST con Postman 

- Listado de usuarios: `GET` localhost:8001/user/
- Guardar usuarios: `POST` localhost:8001/user/ 

    {"name":"Persona1", "email":"Persona1c@"}
- Listado de autos: `GET` localhost:8002/car/
- Guardar autos: `POST` localhost:8002/car/ 

    {"brand":"auto1", "model":"modelo1", "userId":1}
- Listado de autos por usuarios desde microservicio auto: `GET` localhost:8002/car/byuser/{id}
- Listado de autos por usuarios desde microservicio usuario: `GET` localhost:8001/user/cars/{id}

# Instalación (Windows, Linux, MacOS)

- Spring boot:
https://spring.io/tools

- Docker:
https://docs.docker.com/desktop/

- Postman
https://www.postman.com/downloads/
