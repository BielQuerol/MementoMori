# MementoMori

## Descripción

Memento Mori es una aplicación web de apoyo mutuo donde los usuarios pueden pedir ayuda y ayudar a los demás. Para que esta red de apoyo crezca se realiza de forma exponencial, es decir, por cada ayuda recibida debes ayudar a 3 usuarios más.

## User Stories
* **Homepage**: Como usuario deseo encontrar una página donde hacer log in y sign up.
* **Login**: Como usuario deseo poder realizar el sign up para poder registrarme y hacer uso de la aplicación.
* **Signup**: Como usuario deseo poder hacer log in para poder acceder a la aplicación web y hacer uso de ella.
* **Logout**:Como usuario deseo poder salir de la aplicación web y desloguearme para asegurarme que la sesión ha terminado.
* **Userindex**:Como usuario deseo poder acceder a mi página de perfil y pedir ayuda o ayudar a otros.
* **Helpmeform**:Como usuario deseo poder solicitar ayuda mediante el formulario "Help me". También deseo poder editarlo y borrarlo.
* **HelpOthersList**:Como usuario deseo poder ver todas las llamadas de ayuda solicitadas por los demás usuarios.
* **HelpRequestDetails**:Como usuario deseo poder ver sobre qué trata cada solicitud de ayuda para decidir si quiero y puedo ayudar.

## Client /Front-end:


**Path** | **Component**        |   **Permisos**  |       **Comportamiento** |
---------|----------------------|-----------------|--------------------------|
/        | HomePage             | Anonymous only  | Homepage                 |
/signup  | SignupPage           | Anon            | Formulario signup, link a login. Te dirige a userindex una vez registrado|
/login   | LoginPage            | Anon            | Formulario login, link a signup. Te dirige a userindex una vez logueado.|
/logout  | n/a                  | Usuario         | Te redirige a HomePage después del logout y termina la sesión |
/userindex/:id |ShowUser        | Usuario         | Te muestra la página del usuario, link a solicitudes propias de ayuda, link a lista de solicitudes de ayuda de otros, link a editar perfil y link a logout |
/userindex/edit/:id | EditUser  | Usuario         | Te muestra la página del perfil del usuario para editarla |
/helpotherslist | HelpOthersList| Usuario         | Te muestra todas las solicitudes de ayuda de otros y link al detalle de cada una de ellas |
/helpotherslist/:id | HelpOthersRequest | Usuario | Te muestra una solicitud de ayyuda de otra persona en particular, link a aceptar ayudarle |










## ServerRoutes (Back-end):
**Método** |  **Ruta**       |   **Descripción**    |      **Request-Body** 
-----------|-----------------|------------------|-------------------
GET        | /               | Renderiza la Homepage |
GET        | /login          | Renderiza el formulario de login |
POST       | /login          | Envía los datos del formulario al servidor | {email. password} |
GET        | /signup         | Renderiza el formulario de signup |
POST       | /signup         | Envía los datos del formulario signup al servidor y te redirige a la página del usuario /userindex | {username, email, password, userImage} |
GET        | /userindex      | Renderiza la página del usuario | 
GET        | /helpmeform     | Renderiza el formulario de help request del usuario |                                       |
POST       | /helpmeform     | Envía los datos del formulario helpme al servidor y te redirige a la página del usuario /userindex | {helpRequestTitle, helpRequestDescription, helpRequestCity}|
GET        | /helpotherslist   | Renderiza la página con todas las solicitudes (help requests) de los usuarios |
GET        | /helprequestdetails/:id | Renderiza una solicitud particular con sus detalles |
GET        |/helperform/:id | Renderiza el formulario helperform |
POST       | /helperform/:id | Envía los datos del formulario helperform al user que ha realizado la solicitud help request y te redirige a la página de usuario /userindex |
GET        | /helpmeform/:id | Renderiza el helpme form (help request solicitada por el propio usuario) para poder editarla o borrarla |
PUT        | /helpmeform/:id | Envía los datos modificados del formulario helpme al servidor y los actualiza, te redirige a la página del usuario /userindex | {helpRequestTitle, helpRequestDescription, helpRequestCity}|
DELETE     | /helpmeform/:id | Borra la help request solicitada anteriormente por el usuario. |
GET        | /edituser/:id   | Renderiza la página del usuario para editarla |
PUT        | /edituser/:id   | Actualiza la foto del usuario y te redirige a /userindex |
POST       | /logout         | Actualiza el estado de la sesión y la destruye, te redirige a Homepage |

## Routes (Front-end):

**Método** | **Ruta**        |   Descripción   |       Request



Link a wireframes
[Miro](https://miro.com/app/board/o9J_knOMXgU=/)

Link a 
[Trello](https://trello.com/b/BNeRcowY/memento-mori)





## Modelos
**Modelo User:**

{
* userName : type String.
* email : type String.
* password: type String;
* userImage: type String,
* helpMeRequests: [ { type: Schema.Types.ObjectId, ref: "HelpRequest" }],
* helpOthersRequests: [ { type: Schema.Types.ObjectId, ref: "HelpRequest" }]

**Modelo HelpRequest:**

{
* userId: { type: Schema.Types.ObjectId, ref: 'User' },
* helpRequestTitle: type String,
* helpRequestDescription: type String,
* helpRequestCity: type String,}
* helpMessages: [{
    sender: { type: Schema.Types.ObjectId, ref: "User"},
    senderTel: String,
    senderEmail: String,
    message: String}],}


## Backlog 


## Links

Link url a los repositorio de Github: 
* [Github Memento Client](https://github.com/BielQuerol/MementoMori)
* [Github Memento Server](https://github.com/BielQuerol/Mementoserver)

Link url al deploy:

Link url a la presentación de slides:

