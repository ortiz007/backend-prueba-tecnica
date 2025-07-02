# Prueba Tecnica Backend - Gestion de Productos y Pedidos

Este proyecto es una API RESTful desarrollada con Node.js, Express y MongoDB usando Mongoose.
Soporta multiples empresas (multitenant) mediante un `tenandId` proporcionado en los headers.

---

## Tecnologias Utilizadas

- Nodejs con Express
- MongoDB con Mongoose
- Arquitectura en 3 capas (Controllers, Services, Models)
- ES6 Modules
- Variables de entorno con `dotenv`
- Git y Github
- Pruebas con Postman
- Middleware: CORS, Morgan
- Soporte **Multitenant** mediante el header `x-tenant-id`

---

## Estructura del Proyecto
```
src/
|____config/#Conexion a MongoDB
|____controllers/#Logica de controladores
|____models/#Modelos de Mongoose
|____routes/#Endpoints de la API
|____services/#Logica de negocio
|____app.js/#Archivo principal
```
---

## Instalacion

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
```
2. Instala las dependencias:
```
npm install 
```
3. Crea un archivo .env:
````
PORT=4000
MONGODB_URI=mongodb://localhost:27017/miapp
````
4. Asegurate de tener MongoDB corriendo:
````
mongod --dbpath="C:\data\db"
````
## Ejecutar el servidor
````
npm run dev
````
El servidor estara disponible en: http://localhost:4000

## Pruebas con Postman
Headers Obligatorios
````
x-tenant-id: empresa123
````
## Endpoints disponibles 
Productos

| Metodo | Endpoint            | Descripcion                            |
|--------|---------------------|----------------------------------------|
| GET    | `/api/productos`    | Obtiene la lista de todos los productos|
| GET    | `/api/productos/:id`| Obtener producto por ID                |
| POST   | `/api/productos`    | Crea un Producto                       |
| PUT    | `/api/productos/:id`| Actualizar Producto                    |
| DELETE | `/api/productos/:id`| Eliminar Producto                      |

Pedidos

| Metodo | Endpoint          | Descripcion              |
|--------|-------------------|--------------------------|
| GET    | `/api/pedidos`    | Obtener todos los pedidos|
| GET    | `/api/pedidos/:id`| Obtener pedido por ID    |
| POST   | `/api/pedidos`    | Crear pedido             |
| PUT    | `/api/pedidos/:id`| Actualizar pedido        |
| DELETE | `/api/pedidos/:id`| Elimina pedido           |

# Coleccion Postman
Puede importar la coleccion de Postman desde el archivo `Prueba-tecnica-backend.postman_collection.json` incluido en el repositorio.

# Autor
- Nombre: Amilcar Ortiz
- GitHub: https://github.com/ortiz007

## Estado
Proyecto completo y funcional.