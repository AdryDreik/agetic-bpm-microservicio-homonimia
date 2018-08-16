# Microservicio para interoperar con SERVICIOS WEB

## Requisitos

### Instalar node

* Instalar node 8.9.x o una mayor versión.
Se puede utilizar [nvm](https://github.com/creationix/nvm).

* Instalar MongoDB.

## Configuración

En la carpeta **config** buscar el archivo `app.json.sample` y copiarlo, renombrarlo por `app.json`.

Configurar el archivo `config/app.json` especificando las rutas para la base de datos:

**Ejemplo**

```
{
  "mongoUrl": "mongodb://localhost/microservicio-segip",
  "mongoUrlDev": "mongodb://localhost/microservicio-segip-dev",
  "mongoUrlTest": "mongodb://localhost/microservicio-segip-test"
}
```
## Instalar Dependencias

Instalar dependencias:

```sh
$ npm install
```


## Seeders

Para inicializar la base de datos:

```sh
$ npm run seeders
```

## Ejecutar tests

Para ejecutar los tests:

```sh
$ npm  run test
```

## Iniciar la aplicación:

Para ejecutar la aplicación

```sh
$ npm start
```

## Documentación:

Para ver el apidoc debe abrir el siguiente enlace en el navegador:
```
 http://localhost:3010
 ```


