# Generar Paquete de Producción 

Para realizar la compilación , he seguido estos pasos en la rama `feature/generate-builds`.

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

    Abre el navegador en [http://localhost:8080](http://localhost:8080) para verificar la implementación.

## Crear Paquete de Producción

1. **Compilar el proyecto:**

    ```bash
    npm run build
    ```

  Esto generará una carpeta `dist` con los archivos de producción.

3. **Asegurar Archivos Generados:**

    Asegurarse de que los archivos generados estén en la carpeta `dist`.

4. **Actualizar .gitignore:**

    Actualizar el archivo `.gitignore` para excluir archivos innecesarios.

---
Esto genera la rama base para los 3 deploy posteriores

# Despliegue Manual en Render

Crear una nueva rama desde visual studio a partir de `feature/generate-builds`

## Rama: `feature/render-manual2`


### Pasos para el Despliegue Manual

 **Instalar Dependencias:**
    - Ejecutar `npm install` para instalar las dependencias necesarias.

 **Compilar la Aplicación :**
    - Ejecutar `npm run build` para compilar la aplicación .

 **Copiar Archivos:**
    - Copiar el contenido de la carpeta `dist` en la carpeta `public`.

 **Configurar el Proyecto:**
    - Actualizar el script `"start"` en `package.json`.
    + "start": "node index.js"

    Para que se inicie a partir del index.js
**Borrar archivos innecesarios del .json
-"devDependencies"
**Cambiar los imports
-   "#core/*.js": "./src/core/*.js",
+   "#core/*.js": "./core/*.js",
-   "#dals/*.js": "./src/dals/*.js",
+   "#dals/*.js": "./dals/*.js",
-   "#pods/*.js": "./src/pods/*.js"
+   "#pods/*.js": "./pods/*.js"

7. **Desplegar en Render:**
    - Ejecutar comandos de git para hacer commit y push.

8. **Crear Aplicación en Render:**
    - Crear una nueva aplicación en Render.
    - Conectar el repositorio de GitHub.

9. **Configurar Servicio Web en Render:**
    - Configurar el servicio web en Render.
    - Especificar la versión de Node.js.

10. **Configurar Variables de Entorno:**
    - Agregar las variables de entorno necesarias en Render.
+API_MOCK
+CORS_METHODS
+CORS_ORIGIN
+NODE_VERSION
+PORT
+STATIC_FILES_PATH

**Desplegar la Aplicación:**
    - Hacer clic en "Create Web Service".

13. **Verificar Despliegue:**
    - Abrir la aplicación en https://render-manual2.onrender.com.

---





