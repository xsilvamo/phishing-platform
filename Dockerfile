# Etapa de construcción
FROM node:18 AS build

# Configura el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos necesarios para construir el proyecto
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente
COPY . .

# Construye el proyecto para producción
RUN npm run build

# Etapa de producción
FROM nginx:latest

# Copia los archivos estáticos generados por Vite al servidor Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]