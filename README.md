![PetMatch Logo](./front/petmatch/src/Assets/Logos/logo.svg)

# PetMatch 🐾

Swipe, match y adopta con PetMatch 🐶🐱

## Plataforma de Adopción de Mascotas 🏠

### Descripción General 🌟

El objetivo principal del proyecto es desarrollar una aplicación web que agilice y promueva la adopción de mascotas en situación de abandono o maltrato, proporcionando a los usuarios una herramienta sencilla y accesible para encontrar a su nuevo compañero animal a través de un sistema de match entre usuarios y mascotas.

### Lo que se busca lograr 🎯

-   Aumentar la tasa de adopción de mascotas mediante una plataforma fácil de usar y accesible.
-   Reducir el número de mascotas en refugios conectándolas con hogares adecuados.
-   Proveer a los usuarios de una experiencia personalizada que aumente las probabilidades de encontrar la mascota ideal.
-   Fomentar la responsabilidad y el cuidado adecuado de las mascotas adoptadas.

### Alcance del proyecto 📋

-   Búsqueda de mascotas por raza, edad, tamaño, sexo, ubicación y necesidades especiales.
-   Visualización de perfiles detallados de cada mascota con fotos, información sobre vacunas, edad, género, tamaño, etc.
-   Sistema de match que permite agilizar y facilitar el proceso de selección de la mascota.
-   Gestión de solicitudes de adopción, incluyendo la posibilidad de revisar perfiles de adoptantes potenciales y contactar con ellos.
-   Sistema de mensajería para facilitar la comunicación con los adoptantes.

### Criterios de Aceptación ✔️

La aplicación se considerará completa cuando cumpla con los siguientes criterios:

-   Funcionalidad completa de todas las características descritas en el alcance del proyecto.
-   Diseño intuitivo y fácil de usar para todo tipo de usuarios.
-   Rendimiento óptimo en diferentes dispositivos.
-   Ausencia de errores críticos o fallos de funcionamiento.

### URL de la Aplicación 🌐

-   Frontend: [PetMatch Frontend](https://c19-24-m-react.onrender.com)
-   Backend: [PetMatch Backend](https://c19-24-m-node.onrender.com)

> **Nota:** Debido a que estamos usando la versión gratuita de Render, puede haber demoras en el cargado de datos.

### Arquitectura del proyecto 🏗️

#### Diseño 🎨

-   Diseño de la vista Home que permite ver información básica sobre la aplicación web.
-   Diseño de la vista para el sistema de match de mascotas.
-   Diseño del apartado de descripción completa sobre la mascota.
-   Diseño de la vista para el sistema de administración de solicitudes.
-   Diseño del formulario de adopción.

#### Front-end 🖥️

-   Technologies: React JS, Tailwind CSS, Axios
-   Components:
    -   Auth:
        -   Login
        -   Register
        -   Forms
    -   Home:
        -   Introduction view
    -   Match:
        -   Catalogue
        -   Filter
        -   Match
    -   Adoption:
        -   Adoption form
    -   Admin:
        -   Admin panel for approval of requests

#### Backend ⚙️

-   Technologies:
    -   Node JS
    -   Express JS
    -   MongoDB
-   Architecture:
    -   Controllers:
        -   Auth
        -   User
        -   Notification
        -   Filter
    -   Database:
        -   MongoDB (using Mongo Atlas for cloud storage)
    -   Models:
        -   User
        -   Pet
        -   FormAdoption
    -   Routes:
        -   Match
        -   Auth
        -   User (admin)
        -   Pets
        -   Adoption
    -   Middleware:
        -   Role checking
        -   Error handling
    -   Utilities:
        -   Email service for adoption notifications
    -   Main:
        -   Express configuration
        -   Server setup

### Team 🚀

#### Front-end ⚛️

| Nombre              | GitHub                                 | LinkedIn                                                           |
| ------------------- | -------------------------------------- | ------------------------------------------------------------------ |
| Franco Huayller     | [GitHub](https://github.com/fhuayller) | [LinkedIn](https://www.linkedin.com/in/franco-huayller-a80087235/) |
| Mariano Barrionuevo | [GitHub](https://github.com/HeepNite)  | [LinkedIn](https://www.linkedin.com/in/mariano-barrionuevo)        |
| Simón Moreno        | [GitHub](https://github.com/Simon-M20) | [LinkedIn](https://www.linkedin.com/in/simon-moreno-/)             |

#### Backend ⚙️

| Nombre      | GitHub                                            | LinkedIn                                                                         |
| ----------- | ------------------------------------------------- | -------------------------------------------------------------------------------- |
| Ulises      | [GitHub](https://github.com/Ulises-Rodriguez-809) | [LinkedIn](https://www.linkedin.com/in/ulises-rodriguez-desarrolloweb-fullstack) |
| Christopher | [GitHub](https://github.com/Chris-4-0-2)          | [LinkedIn](http://www.linkedin.com/in/christopher-manzueta)                      |

#### QA

| Nombre   | GitHub                                | LinkedIn                                                            |
| -------- | ------------------------------------- | ------------------------------------------------------------------- |
| Gabriela | [GitHub](https://github.com/lagabyok) | [LinkedIn](https://www.linkedin.com/in/gabriela-coronel-43a0a4286/) |

#### Diseño UX/UI 🎨

| Nombre         | Dribbble                                   | LinkedIn                                                                   |
| -------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| Maria Fernanda | [Dribbble](https://dribbble.com/mariacdev) | [LinkedIn](https://www.linkedin.com/in/maria-fernanda-gil-cueva-58bb11224) |

# Instrucciones del servidor:

### Introducción

Este informe proporciona una descripción general del back-end de un proyecto, incluyendo su arquitectura, tecnologías utilizadas, funcionalidades

### Para iniciar el servidor

1. cd back
2. npm install
3. node .\src\app.js
4. opcion alternatica a 3. : node --watch .\src\app.js (Node JS V.18.11.0 o superior)

### Arquitectura

La arquitectura del back-end se basa en una arquitectura monolítica, compuesta por una serie de servicios independientes y escalables. Esta arquitectura permite una mayor flexibilidad, modularidad y facilidad de mantenimiento.

Los servicios principales del back-end incluyen:

1. Servicio de autenticación: Responsable de la autenticación y autorización de usuarios.

2. Servicio de datos: Proporciona acceso a la base de datos y a los datos del proyecto.

3. Servicio de lógica de negocio: Implementa la lógica de negocio del proyecto.

4. Servicio de mensajería: Facilita la comunicación entre los servicios.

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
4. Comunicación: Facilita la comunicación entre los servicios.
5. Manejo de errores: Facilita el manejo de errores

#### Package

1. bcrypt : Para la validacion y encriptacion de la contraseañas
2. cors : Para permitir el acceso al servidor desde otros puertos
3. dotenv (DEV) : Manejo de variables de entorno
4. jsonwebtoken : Manejo de token para guardar informacion no sensible del usuario
5. mongoose : Para la creacion de schemas y manejo de los datos de la DB
6. nodemailer : Manejo de mensajeria, evia emails con informacion sobre registro, adopcion, etc

### Conclusión del MVP

El MVP de PetMatch ha sido exitosamente desarrollado con las funcionalidades clave que permiten a los usuarios buscar, ver y adoptar mascotas de manera eficiente. La aplicación ofrece un sistema intuitivo y amigable, optimizado para diferentes dispositivos, y cumple con los criterios de aceptación definidos. Aunque estamos utilizando la versión gratuita de Render, lo que puede causar demoras en el cargado de datos, la experiencia general del usuario sigue siendo positiva. Con futuras mejoras y optimizaciones, PetMatch está bien posicionada para hacer un impacto significativo en el aumento de adopciones de mascotas.
