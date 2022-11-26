![](http://c2001927.ferozo.com/cuadros/images/logo_blanco.png)

# Proyecto

**ENMARCO es una plataforma E-Commerce para la venta de cuadros, esta realizado en React Js y la información se almaceno en Firebase.**

## Funcionalidades

- **Sección HOME** con listado de productos nuevos.

- **Sección CATEGORIAS** con listado de todos los productos o filtrados por categoria desde MENU.

- **Sección DETALLE PRODUCTO**
  -- Previsualización de producto cargando con SKELETON.
  -- Detalle de producto con información general, precio normal y oferta en caso de estar disponible, calculo de cuotas s/interés, componente de cantidad y agregado.

- **Sección CARRITO** donde se visualizan los productos agregados con su imagen, precio, cantidad, subtotal y total general.
  -- Posibilidad de quitar productos.
  -- Vaciar el carrito.
  -- Ir al checkout.

- **Sección CHECKOUT** donde se procede al envío de la información del usuario y se muestra el resumen del pedido.
  -- Posee validación de campos completos.
  -- Posee validación de coincidencia de email.
  -- Modifica el precio si el ENVÍO es gratis superando los 6.000.
  -- Envío y obtención de número de orden.

- **Sección USUARIO** donde se busca ordenes realizadas.
  -- Validación de campo vacio.
  -- Validación de coincidencia de numero ingresado con el número en la base de datos.

## Base de Datos

Se utilizo **FIREBASE** para almacenar la información de las siguientes colecciones:
-- Productos
-- Categorías dinámicas
-- Colección de ordenes creadas por el usuario

## Librerias

- **React Js:** Es una biblioteca de JavaScript declarativa, eficiente y flexible para construir interfaces de usuario. Permite componer IUs complejas de pequeñas y aisladas piezas de código llamadas “componentes.

- **Node. js** Entorno de código abierto multiplataforma que ejecuta el código JavaScript fuera del navegador orientado a a eventos asíncronos.

- **Node Package Manager** - NPM Es el gestor de paquetes, módulos o librerías que nos proporciona Node.js.

- **React-Router-Dom** es una colección de componentes de navegación con la cual vamos obtener un enrutamiento dinámico gracias a los componentes, en otras palabras tenemos unas rutas que renderizan un componente.

`$ npm install react-router-dom`

- **Firebase** es una plataforma en la nube para el desarrollo de aplicaciones web y móvil. Está disponible para distintas plataformas (iOS, Android y web), con lo que es más rápido trabajar en el desarrollo.

`$ npm install firebase`

## Comenzar

Ejecutar el proyecto desde un editor de código(Vsc, Sublime, etc):
Ejecutar el proyecto en la consola del editor de código:

`$ npm start`

Este comando corre la aplicación en modo desarrollador.
Abri tu navegador en [http://localhost:3000](http://localhost:3000) para ver el proyecto.

El sitio se recargará cuando hagas cambios....

### Clonar

Clonar repositorio de forma local
Clonar el repositorio: **git clone** [https://github.com/jmr-root/comision-45060](https://github.com/jmr-root/comision-45060)

### Instalar las dependencias:

`$ npm install `

**Aprender más sobre React - Create React App**
Puedes aprender más en la Documentación de Create React App.

Para aprender React puedes chequear la Documentación de React.

- Support identification, interpretation, fliter of the HTML tags;
- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;
- Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins.
