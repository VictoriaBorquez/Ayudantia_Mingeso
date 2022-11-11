# Minikube

## Pasos

- Construir imagen en docker
  ```
    docker build -f 'Dockerfile' -t 'repositorio:tagname' .
  ```

- Subir imagen a Docker hub
  ```
  docker push repositorio:tagname
  ```
- Iniciar minikube
  ```
  minikube start
  ```
- Crear recurso "deployment"
  ```
  kubctl apply -f car-deployment.yml
  ```
  
- Crear recurso "service"
  ```
  kubectl apply -f car-service.yml
  ```

- Devolver URL kubernetes para service
  ```
  minikube service car-service
  ```

## Instalación (Windows, Linux, MacOS)
https://minikube.sigs.k8s.io/docs/start/
