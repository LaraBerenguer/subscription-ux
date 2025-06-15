# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo del servidor al contenedor
COPY server.js .

# Expone el puerto en el que escucha tu servidor (8080 por defecto)
EXPOSE 8080

# Comando para arrancar el servidor
CMD ["node", "server.js"]