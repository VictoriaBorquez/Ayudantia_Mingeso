# <img src="https://user-images.githubusercontent.com/66185308/188510635-6dcedd41-cc12-48ac-a4f3-5685a892d169.png" width="100">   **+**  <img src="https://user-images.githubusercontent.com/66185308/188510650-5196a65d-6fd4-4061-bc8a-311ddf290fb1.png" width="100">  **+**  <img src="https://user-images.githubusercontent.com/66185308/188510672-82d8b4f3-a867-4f1c-93f3-52ebf4a8d766.png" width="100">


# Instalación (Windows, Linux, MacOS)

- Docker:
https://docs.docker.com/desktop/

- MySQL:
https://dev.mysql.com/doc/refman/5.7/en/installing.html

- Spring boot:
https://spring.io/tools

# Documentación oficial Docker

https://docs.docker.com/get-started/



# Comandos básicos Docker 

- Listar imágenes: `docker images`
- Listar contenedores: `docker ps`
- Listar networks: `docker networks ls`
- Borrar contenedor: `docker rm nombre_contenedor`
- Subir imagen a Docker Hub: `docker push nombre_cuenta/repositorio:tagname`
- Descargar imagen de Docker Hub: `docker pull nombre:tag`
- Correr imagen: `docker run nombre_imagen:tag` (ver documentación oficial imagenes Docker Hub)
- Ver logs: `docker logs nombre_container`
- Construir imagen: `docker build -t nombre_imagen .`
- Crear network: `docker network create nombre_network`
- Correr docker compose: `docker compose up`
