# Generar Paquete de Producción

Para realizar la compilación, seguimos estos pasos en la rama `feature/generate-builds`.

## Compilar Localmente

1. **Instalar Dependencias:**
    ```bash
    npm install
    ```

2. **Iniciar Servidor de Desarrollo:**
    ```bash
    npm start
    ```
3. **Abrir el Navegador:**
    Abrimos el navegador en [http://localhost:8080](http://localhost:8080) para verificar la implementación.

## Crear Paquete de Producción

1. **Compilar el proyecto:**
    ```bash
    npm run build
    ```
    Esto genera una carpeta `dist` con los archivos de producción.

2. **Asegurar Archivos Generados:**
    Nos aseguramos de que los archivos generados estén en la carpeta `dist`.

3. **Actualizar .gitignore:**
    Actualizamos el archivo `.gitignore` para excluir archivos innecesarios.

---

Esto genera la rama base para los 3 despliegues posteriores.

# Despliegue Manual en Render

Creamos una nueva rama desde Visual Studio a partir de `feature/generate-builds`.

## Rama: `feature/render-manual2`

### Pasos para el Despliegue Manual

1. **Instalar Dependencias:**
    - Ejecutamos `npm install` para instalar las dependencias necesarias.

2. **Compilar la Aplicación:**
    - Ejecutamos `npm run build` para compilar la aplicación.

3. **Copiar Archivos:**
    - Copiamos el contenido de la carpeta `dist` en la carpeta `public`.

4. **Configurar el Proyecto:**
    - Actualizamos el script `"start"` en `package.json`.
        - `"start": "node index.js"`

    Borramos archivos innecesarios del `.json`:
        - `"devDependencies"`

5.  **Cambiamos los imports:**
   
        - "#core/*.js": "./src/core/*.js"
   
        + "#core/*.js": "./core/*.js"
   
        - "#dals/*.js": "./src/dals/*.js"
   
        + "#dals/*.js": "./dals/*.js"
   
        - "#pods/*.js": "./src/pods/*.js"
   
        + "#pods/*.js": "./pods/*.js"

6. **Desplegar en Render:**
    - Ejecutamos los comandos de git para hacer commit y push.

7. **Crear Aplicación en Render:**
    - Creamos una nueva aplicación en Render.
    - Conectamos el repositorio de GitHub.

8. **Configurar Servicio Web en Render:**
    - Configuramos el servicio web en Render.
    - Especificamos la versión de Node.js.

9. **Configurar Variables de Entorno:**
    - Agregamos las variables de entorno necesarias en Render.
        + `API_MOCK`
        + `CORS_METHODS`
        + `CORS_ORIGIN`
        + `NODE_VERSION`
        + `PORT`
        + `STATIC_FILES_PATH`

10. **Desplegar la Aplicación:**
    - Hacemos clic en "Create Web Service".

11. **Verificar Despliegue:**
    - Abrimos la aplicación en [https://render-manual2.onrender.com](https://render-manual2.onrender.com).
   
      ----
   



# Despliegue manual-mongo

## Crear una Rama Nueva

1. **Crear una rama nueva en Visual Studio Code llamada `feature/manual-mongo` a partir de `feature/generate-builds`.**

## Despliegue de MongoDB en MongoDB Atlas

2. **Instalar Dependencias:**
    - Ejecutar `npm install` para instalar las dependencias necesarias.

3. **Configuración Inicial:**
    - Asegurarse de que la aplicación esté desplegada en en modo API mock y funcione correctamente.

4. **Desplegar MongoDB en MongoDB Atlas:**
    - Ingresar a MongoDB Atlas y seguir los siguientes pasos:

        a. Crear un clúster gratuito.
        b. Seleccionar el proveedor y la región.
        c. Seleccionar el nivel del clúster, en este caso, M0 Sandbox (nivel gratuito sin copias de seguridad).
        d. Dar un nombre (opcional) y crear el clúster.

5. **Configuración del Clúster en MongoDB Atlas:**
    - Acceder a la página principal del clúster, donde se verá:

        a. Configuración de acceso a la red.
        b. Configuración de acceso a la base de datos.
        c. URI de conexión de MongoDB.

6. **Configuración de Acceso a la Red en MongoDB Atlas:**
    - Añadir una nueva regla para permitir todas las IPs.

7. **Configuración de Acceso a la Base de Datos en MongoDB Atlas:**
    - Configurar un nuevo usuario con los privilegios necesarios.
    - Copiar la contraseña generada automáticamente.

8. **Actualizar Variable de Entorno en Local:**
    - Actualizar la variable de entorno `MONGODB_URI` en el archivo `.env` en la carpeta `

9. **Verificar Resultados en MongoDB Atlas:**
    - Acceder a MongoDB Atlas y verificar que los datos se hayan insertado correctamente.
10. **Actualizar Variables de Entorno en Render:**
    - Actualizar las variables de entorno en Render utilizando la URI de conexión de MongoDB Atlas.
      
11. **Subir la web-service como el anterior caso y verificar despliegue.

    - Abrimos la aplicación en: https://mongo-manual.onrender.com/
    


# Despliegue Automático en Render

A continuación, se describen los pasos para configurar un despliegue automático en Render utilizando Docker para una aplicación Node.js.

## Dockerfile

Primero, crearemos un Dockerfile para definir el entorno de ejecución de nuestra aplicación. Abre tu editor de texto y crea un archivo llamado Dockerfile en la raíz de tu proyecto con el siguiente contenido:


# Utilizamos la imagen de node en su versión 18 con Alpine como base.
```FROM node:18-alpine```

# Creamos el directorio donde copiaremos nuestra aplicación.
```RUN mkdir -p /usr/app```
```WORKDIR /usr/app```

# Copiamos todos los archivos de la aplicación al contenedor.
```COPY ./ ./```

# Ejecutamos las instalaciones y la construcción.
```RUN npm ci```
```RUN npm run build```

# Establecemos algunas variables de entorno.
```ENV PORT=3000```
```ENV STATIC_FILES_PATH=./public```
```ENV API_MOCK=true```

# Instalamos jq y actualizamos las importaciones en el package.json.
RUN apk update && apk add jq
RUN updatedImports="$(jq '.imports[]|=sub("./src"; "./dist")' ./package.json)" && echo "${updatedImports}" > ./package.json```



.dockerignore
Crearemos un archivo .dockerignore para especificar qué archivos y carpetas no deben incluirse en la imagen de Docker. Crea un archivo llamado .dockerignore en la raíz de tu proyecto con el siguiente contenido:
~~~
node_modules
dist
mongo-data
public
.editorconfig
.env
.env.example
.env.test
.gitignore
create-dev-env.sh
docker-compose.yml
globalConfig.json
jest-mongodb-config.js

~~~

Construir y Desplegar en Render
En la terminal, ejecutamos los siguientes comandos para construir la imagen de Docker y desplegarla en Render:

# Construir la imagen de Docker
```docker build -t nombre-de-tu-app:1 .```


# Ejecutar la aplicación en un nuevo contenedor
```docker run --name nombre-contenedor --rm -d -p 3001:3000 nombre-de-tu-app:1```

## Configuración en Render
### Para configurar el despliegue automático en Render, sigue estos pasos:

- Crea un nuevo servicio web en Render.
- Conecta el repositorio de GitHub y selecciona la rama correspondiente.
- Configura el entorno de ejecución en Render y asegúrate de agregar las variables de entorno necesarias (PORT, STATIC_FILES_PATH, API_MOCK) en la configuración de Render.
- Configura la ruta del Dockerfile:
~~~
./Dockerfile
~~~



Verifica el despliegue en: [https://auto-render-deploy-f58y.onrender.com](https://auto-render-deploy-f58y.onrender.com)
