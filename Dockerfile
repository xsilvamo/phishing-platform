# Usa una imagen base de Node.js
FROM node:18 as builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos del proyecto
COPY . .

# Construye la aplicación React
RUN npm run build

# Usa una imagen de Nginx para servir la aplicación
FROM nginx:1.21-alpine

# Copia el archivo de configuración de Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de la carpeta build de React a Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
