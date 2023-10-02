# Generar Paquete de Producción

Para realizar la compilación, sigue estos pasos en la rama `feature/generate-builds`.

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
    Esto genera una carpeta `dist` con los archivos de producción.

2. **Asegurar Archivos Generados:**
    Asegúrate de que los archivos generados estén en la carpeta `dist`.

3. **Actualizar .gitignore:**
    Actualiza el archivo `.gitignore` para excluir archivos innecesarios.

---

Esto genera la rama base para los 3 despliegues posteriores.

# Despliegue Manual en Render

Crea una nueva rama desde Visual Studio a partir de `feature/generate-builds`.

## Rama: `feature/render-manual2`

### Pasos para el Despliegue Manual

1. **Instalar Dependencias:**
    - Ejecuta `npm install` para instalar las dependencias necesarias.

2. **Compilar la Aplicación:**
    - Ejecuta `npm run build` para compilar la aplicación.

3. **Copiar Archivos:**
    - Copia el contenido de la carpeta `dist` en la carpeta `public`.

4. **Configurar el Proyecto:**
    - Actualiza el script `"start"` en `package.json`.
        - `"start": "node index.js"`

    Borra archivos innecesarios del `.json`:
        - `"devDependencies"`

    Cambia los imports:
   
        - "#core/*.js": "./src/core/*.js"
   
        + "#core/*.js": "./core/*.js"
   
        - "#dals/*.js": "./src/dals/*.js"
   
        + "#dals/*.js": "./dals/*.js"
   
        - "#pods/*.js": "./src/pods/*.js"
   
        + "#pods/*.js": "./pods/*.js"

6. **Desplegar en Render:**
    - Ejecuta los comandos de git para hacer commit y push.

7. **Crear Aplicación en Render:**
    - Crea una nueva aplicación en Render.
    - Conecta el repositorio de GitHub.

8. **Configurar Servicio Web en Render:**
    - Configura el servicio web en Render.
    - Especifica la versión de Node.js.

9. **Configurar Variables de Entorno:**
    - Agrega las variables de entorno necesarias en Render.
        + `API_MOCK`
        + `CORS_METHODS`
        + `CORS_ORIGIN`
        + `NODE_VERSION`
        + `PORT`
        + `STATIC_FILES_PATH`

10. **Desplegar la Aplicación:**
    - Haz clic en "Create Web Service".

11. **Verificar Despliegue:**
    - Abre la aplicación en [https://render-manual2.onrender.com](https://render-manual2.onrender.com).


