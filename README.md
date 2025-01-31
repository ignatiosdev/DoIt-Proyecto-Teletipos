Proyecto de una aplicación de gestión de tareas (ToDo List) desarrollada como parte de una prueba técnica para Teletipos. 

## **Requisitos Previos**


- **Node.js** (v20).
- **npm** (viene incluido con Node.js).
- Un navegador web.

---

## **Pasos para Ejecutar el Backend**

1. **Instalar dependencias**:
   - Abrir una terminal en la carpeta raiz del proyecto y navegar a la carpeta del backend:
     ```bash
     cd server
     ```
   - Instalar los paquetes necesarios:
     ```bash
     npm install
     ```

2. **Iniciar el servidor**:
   - Una vez instaladas las dependencias, iniciar el servidor con el siguiente comando:
     ```bash
     npm run server
     ```
   - El backend estará corriendo en `http://localhost:3000`.

---

## **Pasos para Abrir y Probar el Frontend**

1. **Instalar dependencias**:
   - Abrir una terminal (u otra pestaña) en la carpeta raiz del proyecto y navegar a la carpeta del frontend:
     ```bash
     cd app
     ```
   - Instalar los paquetes necesarios:
     ```bash
     npm install
     ```

2. **Iniciar la aplicación**:
   - Una vez instaladas las dependencias, iniciar la aplicación con el siguiente comando:
     ```bash
     npm run app
     ```
3. Ingresar a la dirección `http://localhost:3010` usando un navegador.



---

## **Detalles Adicionales**

### **Estructura del Proyecto**
- **`/server`**: Contiene el backend (APIs REST con Express.js).
- **`/app`**: Contiene el frontend (aplicación React).

### Objeto `task`

Este objeto consiste de 3 propiedades:

`description` : String que describe la tarea..

`completed` : Booleano que indica si la tarea fue completada o no.

`id`: Integer que funciona como identificador único de la tarea.

### Endpoints

`GET /tasks` : Retorna todas las tareas.  

`POST /tasks` : Crea una nueva tarea. Recibe un JSON con los datos.  

`DELETE /tasks/:id` : Elimina la tarea con el ID especificado.  

`PATCH /tasks/:id` : Actualiza un campo de la tarea. Recibe un JSON con `{ campo: valor }`.  


