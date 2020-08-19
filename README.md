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
/helpothersrequest/:id | HelpOthersRequest | Usuario | Te muestra una solicitud de ayuda de otra persona en particular, link para aceptar ayudarle |
/helpothersrequest/senderform/:id | SenderForm    |Usuario | Te muestra el formulario para poder ayudar a la persona que ha solicitado ayuda |
/userindex/helpmeform/:id | HelpMeForm | Usuario  | Te muestra el formulario para solicitar ayuda.
/userindex/helpmeform/edit/:id |HelpMeFormEdit | Usuario | Te muestra el formulario para editar tu solicitud de ayuda o eliminarla. |
/userindex/helpmeform/edit/:id | HelpMe Form Delete | Usuario | Elimina la ayuda solicitada. |












## ServerRoutes (Back-end):
**Método** |  **URL**       |   **Request-Body**    |      **Succes Status**   |
-----------|-----------------|----------------------|--------------------------|
POST       | /auth/login     | {email. password}    |     200                  |
POST       | auth/signup     | {username, email, password} | 201               |
GET        | /user           |                      |     200                  |
GET        | /helpotherslist |     {title, userId}  |     200                  |
GET        | /helprequestdetails/:id | {userId, title, description, city} | 200|
GET        |/helperform/:id  |   {id}               |                    200   |
POST       | /helperform/:id | {sender, senderTel, senderEmail, message } | 201|
GET        | /helpmeform/:id | {userId}                         | 200          |
POST       | /helpmeform     |{title, description, city}        | 201          |
PUT        | /helpmeform/:id | {userId,title, description, city}|     201      |
DELETE     | /helpmeform/:id |                                  | 200          |
GET        | /edituser/:id   | Renderiza la página del usuario para editarla   |
PUT        | /edituser/:id   | { userImage }                    |    200       |
POST       | auth/logout     |                                  |    204       |

## Routes (Front-end):

**Método** | **Ruta**        |   Descripción   |       Request



Link a wireframes
[Miro](https://miro.com/app/board/o9J_knOMXgU=/)

Link a 
[Trello](https://trello.com/b/BNeRcowY/memento-mori)





## Modelos
**Modelo User:**

```` {
 userName : type String.
 email : type String.
 password: type String;
 userImage: type String,
 helpMeRequests: [ { type: Schema.Types.ObjectId, ref: "HelpRequest" }],
 helpOthersRequests: [ { type: Schema.Types.ObjectId, ref: "HelpRequest" }]
 ````

**Modelo HelpRequest:**

```` {
userId: { type: Schema.Types.ObjectId, ref: 'User' },
title: type String,
description: type String,
city: type String,}
helpMessages: [{
    sender: { type: Schema.Types.ObjectId, ref: "User"},
    senderTel: String,
    senderEmail: String,
    message: String}],}
````


## Backlog 


## Links

Link url a los repositorio de Github: 
* [Github Memento Client](https://github.com/BielQuerol/MementoMori)
* [Github Memento Server](https://github.com/BielQuerol/Mementoserver)

Link url al deploy:

Link url a la presentación de slides:

