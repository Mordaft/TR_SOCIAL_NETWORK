# TR_SOCIAL_NETWORK

La humanidad ha evolucionado desde sus inicios mediante comunidades a las que se unían individuos que compartían intereses comunes. Una red social eSports/Gaming para un centro educativo puede fomentar los mismos valores presentes en los deportes tradicionales aumentando el alcance de la participación de la comunidad escolar mediante el uso de la tecnología. 

La red social que propongo tendrá un diseño centrado en el mundo de los juegos de ordenador, que hace relación a un movimiento muy popularizado que se conoce como Gaming o eSports. 

Mi objetivo será dar vida a esta idea, para lo cual he consultado formaciones online que de una forma práctica te muestran ejemplos de como implementar aplicaciones de este tipo o similares y también he consultado a un experto en desarrollo de aplicaciones que es el padre de un compañero de nuestra escuela. Estos son los pasos que he podido identificar para realizar este trabajo:

- Buscar un diseño de red social que se aproxime a mi idea inicial. (Agradecimientos por el consejo del padre de Javier)
- Plasmar una descripción de mi aplicación con sus funcionalidades principales identificando que perfiles de usuario las utilizarán.
- Adaptar el diseño a mi idea, en otras palabras dar vida a mi aplicación. Este tercer punto será un viaje de aprendizaje y retos que me llevará a entregar una versión minima de mi producto (Del inglés: Minimal Valuable Product MVP) 
 

Utilización de la red con un navegador en el ordenador personal (PC):

![TR_SOCIAL_NETWORK](https://github.com/Mordaft/TR_SOCIAL_NETWORK/assets/20926834/beada036-e895-4284-9b91-ee80a0adf3eb)

Utilización con un navegador en un dispositivo movil o tableta:

![TR_SOCIAL_NETWORK_M](https://github.com/Mordaft/TR_SOCIAL_NETWORK/assets/20926834/6722cc25-653c-4de3-8058-ce7aeebc3db7)



## Perfiles de usuario (permisos en la aplicacion que se obtienen )

### Visitante:

    - Solo puede navegar por su propia información en la aplicación 
    - Si hemos accedido en modo Offline pero ya habíamos conectado en modo Online te mostrará la información que descargaste. 

### Usuario:

    - Crear post
    - Reaccionar a post de otros usuario
    - Comentar post de otros usuarios
    - Enviar petición de amistad / Aceptar o Denegar peticiones de amistad
    - Enviar solicitud para unirse a un Equipo o a un Grupo Especial (Día de la Familia). 
    - Enviar mensajes a otros usuarios

### Usuario Capitan de Equipo o Organizador de Grupo Especial:

    - Puede aceptar solicitudes para unirse a un equipo/grupo especial (limitado a un máximo) 
    - Puede crear eventos del Equipo

### Community Manager (todo lo de Usuarios) y lo siguente: 

    - Crear Grupos : Los grupos por edad , Grupos para crear equipos eSports (Juego + Categoria)
    - Asignar responsable de Grupo (Capitan del equipo )
    - Crear Eventos 
    - Asignar Premios que no sean automáticos
    - Crear nuevas Insignias + Quest (En realidad son lo mismo pero se muestran de distinta forma)
    - Borrar comentarios inapropiados
    - Bannear Usuarios que tienen un mal comportamiento (Un usuario banneado puede leer pero no puede realizar ninguna acción)




## Aplicacion (pantallas y sus acciones)

### Lista de pantallas (y acciones en cada pantalla)

- Acceso a la aplicación (landing.html)
    - Se autentica con Google (te da a acceso a la aplicación en modo local únicamente)
    - Se valida contra una lista blanca (si el usuario está en la lista: te da acceso al modo online , puedes enviar tu información y recibir la del resto de la comunidad, todos los servicios validan contra la lista blanca).
- Newsfeed (partials/newsfeed.html)
    - Crear Post
    - Acciones sobre lista de Post de otros (Reaccionar / Comentar)
- Group (Teams / Seguidores / Aficciones )
    - Unirme a Grupo
- Members (se muestran por experiencia)
    - Añadir amigo (enviar solicitud de amistad)
    - Iniciar Chat o Abrir Chat si ya lo tenías en la lista de la derecha
    - Viajar al "Timeline" de un usuario
- Insignias / Premios / Logros (Badges) : Se consiguen realizando Quest y te dan Experiencia (te muestra lo tuyo exclusivamente)
- Quest (Misiones): La actividad en la aplicación hace que se cumplan, por cada Logro se define una Quest (te muestra el dato agregado de toda la cumunidad)
- Eventos: Calendario de eventos de la comunidad
    - Un evento es un Post Especial que tiene: fecha de celebración, lugar físico o localización virtual como retrasmisión de un video-juego (url de acceso se puede añadir al iniciar la retrasmisión)  (acciones base: Reaccionar y Comentar ,  Accion adicional: Asistiré).
    -  

### Descartes : Patanllas que no hacemos del diseño original

- Overview: Estadisticas de actividad / gamificación / marketplace (no aporta mucho)
- Streams: Lista de streams de los usuarios
- Forum: Se pueden crear Post de Topics concretos, que se pueden consultar con esta forma de acceso. (muy interesante para el futuro)
- MarketPlace: Monetización de tu actividad en la Comunidad. (muy complejo y también muy alejado de una comunidad juvenil). El proveedor de la red social cobra una comisión en el marketplace que sirve para financiar la plataforma.

Nota.- Estas cuatro secciones en el diseño original suponen decenas de pantallas y acciones adicionales que debo descartar desde un inicio del MVP para poder centrar mis esfuerzos en lo que he considerado más importante. 


#### Otros elementos que decidimos eliminar:

- Menus superiores: (Opciones adicionales para mostrar otros tipos de servicios y de soporte técnico) 
- Cesta de la compra: (Relacionado con el marketplace, acceso muy extendido por los conceptos de monetización que incluía el diseño)
- Notificaciones (interesante para el futuro, pero lo despriorizamos por todo el trabajo que añade de gestión de eventos: si cualquier usuario hace algo sobre una publicación o mensaje o bien otro elemento que tu has creado entonces se tienen que hacer determinadas acciones ...)

## Nota sobre la financiación de esta red social

Financiación: El modelo de financiación de esta red social se basaría en donaciones realizadas por la escuela y por la asociación de familias. (por ese motivo no se contempla la necesidad de buscar otros formatos como Marketplace y/o Publicidad).


## Diseño de la aplicación

### Comprar o Construir

En un ejercicio inicial de análisis, en el que se tiene en cuenta el tiempo con el que se cuenta para desarrollar el proyecto y los costes de adquisición de algún componente que pudiera reducir este tiempo considerablemente, se consultan a expertos en desarrollo en distintas fuentes: Artículos de opinión relacionados con este tema, Foros de desarrollo donde hablan sobre estos aspectos, Desarrolladores independientes a los que se les formula directamente esta pregunta.  

Nuestro consultor/ colaborador nos explica lo siguiente: << En vuestro caso una Red Social mínima cuenta con un conjunto de funcionalidades muy amplio, solo desarrollar ess funciones podría requerir de un equipo de desarrollo muy amplio para poder realizar una entrega del producto final con garantías; Así mismo, el diseño de usuario es un factor crucial en vuestro objetivo que no es otro que conseguir una comunidad de usuarios lo más amplia posible. No se trata de obligar a la comunidad de estudiantes a utilizar la red social , se trata de que quieran utilizarla...>>

Se ha determinado que en nuestro caso para este TR sería recomendable comprar una plantilla de red social ya diseñada que se ajuste a como la hemos pensado / planteado para el contexto de Deportes e eSports en IPSE. La plantilla seleccionda se denomina Vikinger, la licencia para un la construcción de un site no comercial tiene un coste aproximado de 25€ y proporciona maquetas de pantallas para una red social centrada en el mundo Gamer / eSports con aspectos muy interesantes para fomentar la participación a través del concepto "Gamificación" aunque también incluye funcionalides de Marketplace que inicialmente no estaría alineadas con lo que consideramos adecuado en el ambito de la escuela.

## Diseño del modelo de datos

Las entidades identificadas son las siguientes:

- **Perfil**: Una entidad con información sobre el usuario conectado, util desde la perspectiva técnica para saber que mostrar a cada usuario, utíl también para implementar un control sobre la caducidad de los contenidos que tiene almacenados el usuario y también para tener infomación estadística de la actividad del usuario.
- **Miembros**: Los usuarios de la red social, pueden adoptar distintos roles
- **Grupos**: Grupos de miembros, asignados por administradores/moderadores del sistema o creados por los propios usuarios.
- **Publicaciones**: Mensajes públicos de miembro o de grupos de la red
- **Mensajes**: Mensajes privados entre personas 
- **Solicitudes de amistad o de pertenencia a grupos**: Acciones para conectar entre personas y asociarse en grupos de interés
- **Misiones o Aventuras**: Mecanismo para incentivar la participación
- **Premios**: Reconocimiento de participación en misiones de la red social
- **Reacciones**: Todos los contenidos de la red pueden ser susceptibles de generar distintos sentimientos, puede ser un mecanismo tanto de: participación / promoción (aparición en listas en primeras posiciones), como de reconocimiento (conseguir premios por recibir reaciones positivas), como de control (denuncias que alertan a moderadores de contenidos no apropiados)


 
