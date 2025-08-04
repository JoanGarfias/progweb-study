# Fundamentos de Back-end

1. Diseñar APIs
2. Manejar persistencia (DB, Caché, memoización)
3. Saber autentificar y autorizar
4. Lógica de negocio
5. Optimización
6. Monitoreo de errores (logs)
7. Seguridad
8. Pruebas
9. Integrar servicios terceros
10. Saber que es HTTP

# HTTP

Hyper Text Transfer Protocol

Es un conjunto de instrucciones que debes de seguir para que un medio se pueda comunicar con otro medio.

- Es el protocolo fundamental de Internet.
- Es la base para intercambio de datos en Internet.
- Permite que un cliente se conecte a un servidor.
- Cada solicitud es independiente
- Tiene metodos dependiendo la situación
- Tiene códigos de respuesta
- Existe una versión llamada HTTPS

# Metodos HTTP

- GET: solicita un recurso.
- POST: envía datos al servidor.
- PUT: actualiza un recurso existente.
- DELETE: elimina un recurso.

# Otros metodos HTTP no tan conocidos

- HEAD: similar a GET pero solo obtiene los headers de respuesta.
- OPTIONS: obtiene las opciones de comunicación, saber si acepta CORS por ejemplo. (CORS es una verificación previa que se hace en los navegadores para evitar solicitudes maliciosas).
- CONNECT: establece una comunicación, utilizando comúnmente servidores proxy.
- TRACE: crea una prueba bucle, se utiliza para diagnosticar problemas de red.
- PATCH: similar a PUT, pero solo modifica parte del recurso.
- LINK: indicia relaciones entre dos recursos, parecido al link del HTML.
- UNLINK: elimina relación entre recursos.

# Contenido de solicitud HTTP

### Headers
Información sobre la solicitud de la respuesta:
- Content-Type: html, json, etc.
- Authorization: token
- User-Agent: Software del cliente.
- Content-Length: tamaño del body
- otros más...

### Códigos de respuesta HTTP
- 1xx: Informativas
- 2xx: Respuestas exitosas
- 3xx: Redirecciones
- 4xx: Errores del cliente
- 5xx: Errores del servidor