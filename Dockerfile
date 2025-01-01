# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias
RUN npm install

# Construye la aplicación React
RUN npm run build

# Usa una imagen de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de la carpeta build de React a Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
