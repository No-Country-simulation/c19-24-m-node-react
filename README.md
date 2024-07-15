# c19-24-m-node-react

# Manejo de errores 

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