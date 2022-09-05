# <img src="https://user-images.githubusercontent.com/66185308/188510081-cc8f8f3d-73cb-4399-876b-4a369434f89d.png" width="100">   **+**   <img src="https://user-images.githubusercontent.com/66185308/188510270-df9f6ab4-0f09-4dd8-864e-3fcdf7bf8c21.png" width="100">


Creación de instancia EC2 en AWS con Terraform.



## Instalación (Windows, Linux, MacOS)

https://learn.hashicorp.com/tutorials/terraform/install-cli


## Comandos básicos Terraform

- Inicializar directorio: `terraform init`
- Aplicar configuración terraform: `terraform apply`
- Destruir instancia: `terraform destroy`


## Pasos para crear instancia en AWS con Terraform

1. Instalar Terraform
2. Crear cuenta en AWS
3. Crear y descargar par de claves en AWS, archivo .pem (Red y seguridad → Pares de clave → Crear par de claves), guardar en mismo directorio que archivo main.tf
4. Crear credenciales de seguridad en AWS (Credenciales de seguridad → Claves de acceso (ID de clave de acceso y clave de acceso secreta) → Crear una clave de acceso)
5. Crear archivo main.tf 
6. Inicializar directorio con terraform, en carpeta donde se encuentra archivo .tf y .pem, con `terraform init`
7. Aplicar configuración con `terraform apply` 
8. Conectarse a servidor (instancias → Seleccionar ID de la instancia → Conectar → Seguir pasos (chmod 400 clave.pem y ssh -i "clave.pem" ubuntu@ip.compute-1.amazonaws.com)
9. Para terminar/destruir instancia usar `terraform destroy`



## Documentación oficial

https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code?in=terraform/aws-get-started
