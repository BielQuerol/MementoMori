# MementoMori

## Descripción

Memento Mori es una aplicación web de apoyo mutuo donde los usuarios pueden solcitar y dar ayuda a los demás. Para que esta red solidaria crezca se realiza de forma exponencial, es decir por cada ayuda recibida debes ayudar a 3 usuarios.

## User Stories
* **Homepage**: Como usuario deseo encontrar una página donde hacer log in y sign up.
* **Login**: Como usuario deseo poder realizar el sign up para poder registrarme y hacer uso de la aplicación.
* **Signup**: Como usuario deseo poder hacer log in para poder acceder a la aplicación web y hacer uso de ella.
* **Logout**:Como usuario deseo poder salir de la aplicación web y desloguearme para asegurarme que la sesión ha terminado.
* **Userindex**:Como usuario deseo poder acceder a mi página de perfil y pedir ayuda o ayudar a otros.
* **Helpmeform**:Como usuario deseo poder solicitar ayuda mediante el formulario "Help me".
* **HelpOthersList**:Como usuario deseo poder ver todas las llamadas de ayuda solicitadas por los demás usuarios.
* **HelpRequestDetails**:Como usuario deseo poder ver sobre qué trata cada solicitud de ayuda para decidir si quiero y puedo ayudar.

## ServerRoutes (Back-end):

**Método** |  **Ruta**       |   Descripción    |      Request-Body 
-----------|-----------------|------------------|-------------------
GET        | /               | Renderiza la HomePage |
GET        | /login          | Renderiza el formulario de login |
POST       | /login          | Envía los datos del formulario al servidor | {email. password} |
GET        | /signup         | Renderiza el formulario de signup |
POST       | /signup         | Envía los datos del formulario signup al servidor | {username, email, password, userImage} |
GET        | /userindex      | Renderiza la página del usuario | 
GET        | /helpmeform     | Renderiza el formulario de helprequest del usuario |                                       |
POST       | /helpmeform     | Envía los datos del formulario al servidor y te redirige a la página helprequests | {helpRequestTitle, helpRequestDescription, helpRequestTime}|


Link a wireframes 
[Miro](https://miro.com/app/board/o9J_knOMXgU=/)






## Modelos
**Modelo User:**

{
* userName : type String.
* email : type String.
* password: type String;
* userImage: type String,
* helpRequestId: { type: Schema.Types.ObjectId, ref: 'HelpRequest' }, }

**Modelo HelpRequest:**

{
* userId: { type: Schema.Types.ObjectId, ref: 'User' },
* helpRequestTitle: type String,
* helpRequestDescription: type String,
* helpRequestTime: type Number,}
