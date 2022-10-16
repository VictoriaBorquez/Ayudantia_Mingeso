FROM openjdk:11
EXPOSE 8002
ADD target/car-service.jar car-service.jar
ENTRYPOINT ["java", "-jar", "/car-service.jar"]