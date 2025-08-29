# AppDoc

AppDoc es una aplicación de gestión de usuarios con arquitectura de frontend y backend separada.

## Estructura del proyecto

```
AppDoc/
├── backend/
│   ├── app.js
│   ├── database.js
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── config.js
│       ├── controllers/
│       │   └── usersController.js
│       ├── models/
│       │   └── usersModel.js
│       └── routes/
│           └── users.js
├── frontend/
│   ├── App.js
│   ├── app.json
│   ├── index.js
│   ├── package.json
│   ├── assets/
│   └── src/
│       ├── components/
│       │   ├── DatePicker.js
│       │   ├── UserCard.js
│       │   └── UserForm.js
│       ├── config/
│       │   └── api.js
│       ├── hooks/
│       │   └── useUsers.js
│       ├── screens/
│       │   ├── CreateUserScreen.js
│       │   ├── EditUserScreen.js
│       │   ├── HomeScreen.js
│       │   ├── UserDetailScreen.js
│       │   └── UserListScreen.js
│       └── services/
│           └── userService.js
```

## Backend

- Node.js con Express
- Manejo de usuarios (modelo, controlador y rutas)
- Configuración en `.env` y `config.js`
- Conexión a base de datos en `database.js`

### Instalación y ejecución

```powershell
cd backend
npm install
npm start
```

## Frontend

- React (posiblemente con Expo para móvil)
- Componentes para gestión de usuarios
- Pantallas para crear, editar, listar y ver detalles de usuarios
- Servicios y hooks para consumir la API

### Instalación y ejecución

```powershell
cd frontend
npm install
npm start
```

## Configuración

- Asegúrate de configurar correctamente las variables en `.env` para el backend.
- El frontend debe apuntar a la URL del backend en `src/config/api.js`.

## Autor

Pablo

---

Este proyecto pertenece al trabajo de clase de la semana 8.
