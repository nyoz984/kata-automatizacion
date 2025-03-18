# BancoBogota
Este proyecto contiene la automatizacion de pruebas para la API [FakeStoreAPI](https://fakestoreapi.com/docs), utilizando Postman, Newman y JSON Server.

# Automatizacion de Pruebas - FakeStoreAPI

## Instalacion y Configuracion

### 1 Clonar el repositorio
```sh
git clone https://github.com/tu-usuario/kata-automatizacion.git
cd kata-automatizacion

### 2 Instalar dependencias
npm install

### 3 Iniciar JSON Server para leer datos de db.json
json-server --watch db.json --port 3000

Ejecucion de pruebas
Pruebas normales
npm run test

Generar reportes HTML
npm run test:html

Pruebas en paralelo
npm run test:parallel

---

## 4: Subir cambios al repositorio
Ejecuta estos comandos para confirmar y subir los cambios:

```sh
git add .
git commit -m "Organizaci¨®n del repositorio con buenas pr¨¢cticas"
git push origin feature/testing
