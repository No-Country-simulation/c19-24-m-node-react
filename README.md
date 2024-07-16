# PetMatch 🐾 

Swipe, match y adopta con PetMatch 🐶🐱

## Plataforma de Adopción de Mascotas 🏠

### Descripción General 🌟
El objetivo principal del proyecto es desarrollar una aplicación web que agilice y promueva la adopción de mascotas en situación de abandono o maltrato, proporcionando a los usuarios una herramienta sencilla y accesible para encontrar a su nuevo compañero animal a través de un sistema de match entre usuarios y mascotas.

### Lo que se busca lograr 🎯
- Aumentar la tasa de adopción de mascotas mediante una plataforma fácil de usar y accesible.
- Reducir el número de mascotas en refugios conectándolas con hogares adecuados.
- Proveer a los usuarios de una experiencia personalizada que aumente las probabilidades de encontrar la mascota ideal.
- Fomentar la responsabilidad y el cuidado adecuado de las mascotas adoptadas.

### Alcance del proyecto 📋
- Búsqueda de mascotas por raza, edad, tamaño, sexo, ubicación y necesidades especiales.
- Visualización de perfiles detallados de cada mascota con fotos, información sobre vacunas, edad, género, tamaño, etc.
- Sistema de match que permite agilizar y facilitar el proceso de selección de la mascota.
- Gestión de solicitudes de adopción, incluyendo la posibilidad de revisar perfiles de adoptantes potenciales y contactar con ellos.
- Sistema de mensajería para facilitar la comunicación con los adoptantes.

### Aspectos No Incluidos en el Alcance 🚫
- La aplicación no se encargará del transporte de las mascotas ni de la gestión de los procesos legales de adopción.
- La aplicación no brindará servicios de atención veterinaria ni de adiestramiento animal.

### Entregables del Proyecto 📦
- Aplicación web compatible con todos los navegadores.
- Manual de usuario para ambas plataformas.
- Documentación técnica de la aplicación.

### Criterios de Aceptación ✔️
La aplicación se considerará completa cuando cumpla con los siguientes criterios:
- Funcionalidad completa de todas las características descritas en el alcance del proyecto.
- Diseño intuitivo y fácil de usar para todo tipo de usuarios.
- Rendimiento óptimo en diferentes dispositivos.
- Ausencia de errores críticos o fallos de funcionamiento.

### Aprobación del Alcance 📝
Este documento de alcance del proyecto debe ser revisado y aprobado por todas las partes involucradas antes de iniciar el desarrollo de la aplicación.

### Arquitectura del proyecto 🏗️

#### Diseño 🎨
- Diseño de la vista Home que permite ver información básica sobre la aplicación web.
- Diseño de la vista para el sistema de match de mascotas.
- Diseño del apartado de descripción completa sobre la mascota.
- Diseño de la vista para el sistema de administración de solicitudes.
- Diseño del formulario de adopción.

#### Front-end 🖥️
- Technologies: React JS, Tailwind CSS, Axios
- Components:
	- Auth: 
		- Login
		- Register
		- ResetPasword 
		- Forms
	- Home: 
		- Introduction view
	- Match: 
		- Catalogue
		- Filter 
		- Match 
	- Adoption: 
		- Adoption form
	- Admin: 
		- Admin panel for approval of requests

#### Backend ⚙️
- Technologies: Node JS, Express JS, MongoDB
- Architecture:
	- Controllers: 
		- Auth
		- User
		- Notification
		- Filter 
	- Database: 
		- MongoDB (using Mongo Atlas for cloud storage)
	- Models: 
		- User
		- Pet
		- FormAdoption 
	- Routes: 
		- Match
		- Auth
		- User (admin) 
		- Pets
		- Adoption
	- Middleware: 
		- Role checking
		- Error handling
	- Utilities: 
		- Email service for adoption notifications
	- Main: 
		- Express configuration
		- Server setup


### Team 🚀

#### Front-end ⚛️
- Franco (Líder) 
- Mariano
- Simon [LinkedIn](https://www.linkedin.com/in/simon-moreno-/)

#### Backend ⚙️
- Ulises (Líder) [LinkedIn](https://www.linkedin.com/in/ulises-rodriguez-desarrolloweb-fullstack)
- Pablo
- Marcelo [LinkedIn](http://linkedin.com/in/marcelo-grando-b2017320b)
- Gabriela [LinkedIn](https://www.linkedin.com/in/gabriela-coronel-43a0a4286/)
- Christopher [LinkedIn](http://www.linkedin.com/in/christopher-manzueta)

#### Diseño UX/UI 🎨
- Maria Fernanda (Líder)
- Franco
- Simon [LinkedIn](https://www.linkedin.com/in/simon-moreno-/)
