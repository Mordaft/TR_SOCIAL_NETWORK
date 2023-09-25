# TR_SOCIAL_NETWORK

La humanidad ha evolucionado desde sus inicios mediante comunidades a las que se unían individuos que compartían intereses comunes. Una red social eSports/Gaming para un centro educativo puede fomentar los mismos valores presentes en los deportes tradicionales aumentando el alcance de la participación de la comunidad escolar mediante el uso de la tecnología. 


La red social que propongo tendrá un diseño centrado en el mundo de los juegos de ordenador, que hace relación a un movimiento muy popularizado que se conoce como Gaming o eSports. 

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

#### Otros elementos que decidimos eliminar:

- Menus superiores 
- Cesta de la compra
- Notificaciones (interesante para el futuro, pero lo despriorizamos por todo el trabajo que añade de gestión de eventos)

## Nota sobre la financiación de esta red social

Financiación: El modelo de financiación de esta red social se basaría en donaciones realizadas por la escuela y por la asociación de familias. (por ese motivo no se contempla la necesidad de buscar otros formatos como Marketplace y/o Publicidad).



 
