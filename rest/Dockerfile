# Usa la imagen de Maven para construir la aplicación
FROM maven:3.8.4-openjdk-17-slim AS builder

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de configuración y el código fuente
COPY pom.xml .
COPY src ./src

# Empaqueta la aplicación como un JAR
RUN mvn clean package -DskipTests

# Segunda etapa para crear una imagen más ligera
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia solo el JAR construido desde la etapa anterior
COPY --from=builder /app/target/rest-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto 8080, que es el puerto predeterminado de Spring Boot
EXPOSE 8080

# Comando para ejecutar la aplicación cuando se inicia el contenedor
CMD ["java", "-jar", "app.jar"]
