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
/userindex |ShowUser        | Usuario         | Te muestra la página del usuario, link a solicitudes propias de ayuda, link a lista de solicitudes de ayuda de otros, link a editar perfil y link a logout |
/userindex/edit | EditUser  | Usuario         | Te muestra la página del perfil del usuario para editarla |
/helpotherslist | HelpOthersList| Usuario         | Te muestra todas las solicitudes de ayuda de otros y link al detalle de cada una de ellas |
/helpothersdetail/:id | HelpOthersRequest | Usuario | Te muestra una solicitud de ayuda de otra persona en particular, link para aceptar ayudarle |
/helpothersdetail/senderform | SenderForm    |Usuario | Te muestra el formulario para poder ayudar a la persona que ha solicitado ayuda |
/userindex/helpmeform | HelpMeForm | Usuario  | Te muestra el formulario para solicitar ayuda.
/userindex/helpmeform/edit/:id |HelpMeFormEdit | Usuario | Te muestra el formulario para editar tu solicitud de ayuda o eliminarla. |



## Components:

* HomePage
* SignupPage
* LoginPage
* ShowUser
* EditUser
* HelpOthersList
* HelpOthersRequest
* SenderForm
* HelpMeForm
* HelpMeFormEdit









## ServerRoutes (Back-end):
**Método** |  **URL**       |   **Request-Body**    |      **Succes Status**   |     **Comportamiento**  |
-----------|-----------------|----------------------|--------------------------|-------------------------|
POST       | /auth/login      | {email. password}    |     200                 |  Autoriza al usuario para acceder  |                  
POST       | /auth/signup     | {username, email, password} | 201              |  Registra al usuario en la aplicación  |
POST       | /auth/me         | {email, password}           | 200              | Comprueba que el usuario está logueado en la sesión.  |
POST       | /auth/logout     |                             |    204           | Termina la sesión del usuario   |
GET        | /api/helprequest |                             |     200          | Muestra todas las solicitudes de ayuda            |
GET        | /api/helprequest/:id     | {userId, title, description, city, [ helpMessages ]} | 200|  Muestra los datos de una solicitud de ayuda en particular  |
POST       | /api/sendhelpform/:id | {sender, senderTel, senderEmail, message } |201 |  Envía los datos de contacto de la persona que ayuda al que ha solicitado dicha ayuda  |
POST       | /api/helprequest     |{title, description, city}        | 201          | Crea la solicitud de ayuda   |
PUT        | /api/helprequest/:id | { title, description, city }    |     201      | Modifica los datos de una solicitud de ayuda previa  |
PUT        | /api/users           | { userImage }                    |    201       | Modifica los datos del usuario  |
DELETE     | /api/helprequest/:id |                                  |   200       | Elimina una solicitud de ayuda previa |     








## Modelos
**Modelo User:**

```` 
{
 userName : type String,
 email : type String,
 password: type String,
 userImage: type String,
 helpMeRequests: [ { type: Schema.Types.ObjectId, ref: "HelpRequest" }],
 helpOthersRequests: [ { type: Schema.Types.ObjectId, ref: "HelpRequest" }],
 }
 ````

**Modelo HelpRequest:**

```` 
{
userId: { type: Schema.Types.ObjectId, ref: 'User' },
title: type String,
description: type String,
city: type String,
helpMessages: [ {
                sender: { type: Schema.Types.ObjectId, ref: "User" },
                senderTel: String,
                senderEmail: String,
                message: String } ],
               }
````


## Backlog:



## Links

Link a wireframes
[Miro](https://miro.com/app/board/o9J_knOMXgU=/)

Link url a los repositorio de Github: 
* [Github Memento Client](https://github.com/BielQuerol/MementoMori)
* [Github Memento Server](https://github.com/BielQuerol/mementomori-backend)

Link url al deploy:

Link a 
[Trello](https://trello.com/b/BNeRcowY/memento-mori)

Link url a la presentación de slides:

