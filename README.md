# c19-24-m-node-react

# FRONT:


# BACK:

### Introducción
Este informe proporciona una descripción general del back-end de un proyecto, incluyendo su arquitectura, tecnologías utilizadas, funcionalidades

### Para iniciar el servidor
1. cd back
2. npm install
3. node .\src\app.js 
4. opcion alternatica a 3. : node --watch .\src\app.js (Node JS V.18.11.0 o superior)

### Arquitectura
La arquitectura del back-end se basa en una arquitectura de microservicios, compuesta por una serie de servicios independientes y escalables. Esta arquitectura permite una mayor flexibilidad, modularidad y facilidad de mantenimiento.

Los servicios principales del back-end incluyen:

1. Servicio de autenticación: Responsable de la autenticación y autorización de usuarios.

2. Servicio de datos: Proporciona acceso a la base de datos y a los datos del proyecto.

3. Servicio de lógica de negocio: Implementa la lógica de negocio del proyecto.

4. Servicio de mensajería: Facilita la comunicación entre los microservicios.

### Tecnologías utilizadas
1. Lenguaje de programación: JavaScript
2. Framework web: React JS
3. Servidor: Node JS
4. Framework Back: Express JS
5. Base de datos: MongoDB Atlas
6. Mensajes: Nodemailer
7. Herramientas de testing: Postman

### Funcionalidades
1. Gestión de usuarios: Registro, autenticación y autorización de usuarios.
2. Gestión de datos: Almacenamiento, recuperación y actualización de datos.
3. Lógica de negocio: Implementación de la lógica de negocio del proyecto.
4. Comunicación: Facilita la comunicación entre los microservicios.
5. Manejo de errores: Facilita el manejo de errores

#### Package
1. bcrypt : Para la validacion y encriptacion de la contraseañas
2. cors : Para permitir el acceso al servidor desde otros puertos
3. dotenv (DEV) : Manejo de variables de entorno
4. jsonwebtoken : Manejo de token para guardar informacion no sensible del usuario
5. mongoose : Para la creacion de schemas y manejo de los datos de la DB
6. nodemailer : Manejo de mensajeria, evia emails con informacion sobre registro, adopcion, etc

## Manejo de errores 

## Función tryCatch para Manejo de Errores en Controladores

### Funcionamiento 

1. La función tryCatch acepta un controlador como argumento.
2. Dentro de tryCatch, se ejecuta el controlador proporcionado (await controller(req, 3. res, next)).
4. Si ocurre un error durante la ejecución del controlador, se captura en el bloque catch.
5. El error se pasa al siguiente middleware utilizando return next(error).

### Uso 

1. Importación: Asegúrate de importar la función tryCatch en tus archivos de rutas o controladores:

```javascript 
const tryCatch = require('./utils/tryCatch');
```

2. Uso en un Controlador: Utiliza tryCatch alrededor de tu lógica de controlador existente. Por ejemplo:

```javascript 
const myController = async (req, res, next) => {
    // Lógica del controlador aquí
};

const wrappedController = tryCatch(myController);
```

## Error Handler 

```javascript
import { ClientError } from "../errors/Errors.js";

export const errorHandler = (error, req, res, next) => {
  if (error instanceof ClientError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  console.log(error)

  return res.status(500).send("Something went wrong");
};
```

### Uso

1. Importación: Asegúrate de importar el manejador de errores en tus archivos de rutas o controladores:

```javascript 
import { errorHandler } from './ruta-a-errorHandler';
```

### En app.js 

```javascript 
app.use(errorHandler);
```

## Errores 

### Uso 

Ejemplo: 

```javascript 
  export class ClientError extends Error {
      constructor( message, status = 400) {
          super(message)
          this.statusCode = status
      }
  }
  ```

  1. Importación: Asegúrate de importar el manejador de errores en tus archivos de  controladores:

  ```javascript 
  import { ClientError } from "../errors/Errors.js";
  ```

  ### Uso en el controller 

  ```javascript 
   static ejemploManejoDeErrores = tryCatch(async(req,res)=>{
        const {username, password} = req.body
    
        if(!username) {
             throw new ClientError("username not found", 403)
        }
    
        res.json({message: "no errors"})
    })
    ```