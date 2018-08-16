# Microservicio para interoperar con SERVICIOS WEB

## Objetivo
Este proyecto tiene la finalidad de interoperar y validar datos mediante servicios de interoperabilidad.

## Flujo

1. Se crea una configuración desde el plugin donde se especifica qué campos se enviará desde el cliente y qué datos devolverá el microservicio. 

2. Se recibe datos asociados con una configuración, el microservicio busca esta configuración y arma la petición  para los métodos del servicio web solicitado.

3. Se guarda cada respuesta desde los métodos del servicio web con una bandera indicando que el dato interoperado es válido o no.

4. Se valida cada respuesta para verificar la integridad de los datos que llegaran desde una aplicación cliente.

## Tecnologías Utilizadas

- Express.- como servidor web ejecutar como npm start.
- Ava.- para realizar pruebas.
- ApiDoc.- documentación del apiRest ejecutar como npm run apidoc.
- Mongo.- como base de datos.

## Configuración del Servidor

Para una correcta instalación, el servidor y la aplicación debe tener las configuraciones necesarias, para ello se recomienda revisar el siguiente enlace:

> [INSTALL.md](INSTALL.md)


## Actualziaciones del Servidor

Para actualizar la aplicación se recomienda revisar el siguiente enlace:

> Próximamente ...
