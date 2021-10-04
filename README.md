# Desafío Chedoc

### Instrucciones de configuración:
1. Estando ubicado dentro proyecto, ingresar el comando "npm install" en consola
2. Ingresar comando "npm start"

### Resumen y dinámica del proyecto:


Se creó el proyecto con create-react-app, secrearon dos componentes que aparecen en todas las pantallas.
Ellos son Footer.jsx y Header.jsx. 
De estos dos componentes, solo el Header tiene un poco de lógica: Recibe por props la palabra 'Titles'
o 'Series' o 'Movies', dependiendo de en qué pantalla se encuentre el usuario. La palabra que llegue se
ubicará después del texto 'Popular'.
Por otra parte, está el componente Home, el cual es el que se encuentra en la url '/'. Este renderiza Header,
Footer y un Content (componente creado con Styled-Components), el cual tiene dos tarjetas (creadas con la librería
Ant Design). Una tarjeta Series y otra Movies.
Al clickearse cualquiera de las dos opciones, el sistema redirigirá al usuario a la dirección que corresponda ('/series' o
'/movies').
Al ingresar por ejemplo al componente Movies, el sistema (useEffect mediante) ejecuta la acción getInfo, la cual realiza
un get (con axios) y trae información, que se almacenará en el store de Redux (especificamente en el estado 'info').
Dado que el componente Movies está suscripto al state info, es capaz de renderizar su contenido. Es así que el componente
extrae el arreglo de info que necesita (info.movies), hace un map, y devuelve una tarjeta (Card de Ant Design) por 
cada elemento de este arreglo.
Se utilizó además el componente Modal (Antd) para que este se desplegara al momento de ser clickeada cualquier tarjeta,
y expusiera en este modal más información sobre la serie o película clickeada (título, imagen, descripción y año de estreno).
Todos los estilos se hicieron con css y Styled-Components


