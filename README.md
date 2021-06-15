# Prueba Front Developer Aeroméxico

## Índice

- [1. Definición](#1-definición)
- [2. Objetivos](#2-objetivos)
- [3. Instrucciones](#3-instrucciones)
- [4. Lo que más me gustó](#4-lo-que-más-me-gustó)
- [5. Qué mejoraría](#5-qué-mejoraría)
- [6. Pain point](#6-pain-point)

---

## 1. Definición

La prueba consiste en desarrollar una aplicación 100% por encargo, en donde se nos proporcionaron los siguientes detalles de look & feel:

<div align='center'>
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202021-06-14%20a%20la(s)%2023.06.42.png?alt=media&token=1f2b21a4-1f39-4cde-bc94-85f25512f7d7"/> 
<img align='center' height='598px'src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202021-06-14%20a%20la(s)%2023.07.24.png?alt=media&token=eb7b0c49-59c6-46ac-add8-d3ba0577c066"/> <br></br>
  <div>
<img align='center' height='200px' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202021-06-14%20a%20la(s)%2023.07.45.png?alt=media&token=10065315-f39c-4e83-9f3f-b34886d7e80b"/> 
<img align='center' height='200px' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202021-06-14%20a%20la(s)%2023.08.02.png?alt=media&token=754bdca8-2115-459c-ada7-878d04311260"/> 
<img align='center' height='200px' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202021-06-14%20a%20la(s)%2023.08.10.png?alt=media&token=1f9a544b-0bcc-4721-93f5-42b837f3ceb5"/> 
  </div>
</div>

## 2. Objetivos

- [ ] Usar React en versión 15.6.2 o superior.
- [ ] SASS para el manejo de estilos
- [ ] Funcionalidad para agregar un nuevo personaje con [JSON Server](https://www.npmjs.com/package/json-server)
- [ ] Seguir requerimientos de look & feel
- [ ] Funcionalidad para agregar a favoritos con Redux
- [ ] Preferentemente incluir pruebas unitarias
- [ ] Readme

## 3. Instrucciones

- Bajar repositorio y **entrar a la carpeta harrypotter**
- `npm install`: para tener las librerías ocupadas en el proyecto
- `npm start`: Debe levantarse primero React, por lo general será en `http://localhost:3000/`
- Utilizar `json-server --watch src/data/hp-characters.json --port 3001` para poder agregar nuevos personajes
- `http://localhost:3001/data`: podemos acceder al puerto 3001 para poder ver la data que se esta trabajando
- Ahora que ya podemos ver el proyecto, es mejor verlo en inspeccionar Responsive con las siguientes especificaciones:
 <div align='center'>
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202021-06-14%20a%20la(s)%2023.35.46.png?alt=media&token=0e9d17f4-94e0-428d-b319-e3d3d10bfc43"/> 
  </div>
  
  Esto es porque decidí utilizar la técnica mobile first para que después no se trate de arrugar el diseño para que entre en pantallas más chicas. Así podemos partir de cómo se ve y comporta la aplicación en una pantalla y entorno móvil.
- `npm run test`: es para correr test realizados

## 4. Lo que más me gustó

En lo personal disfruté mucho este reto porque aprendí cosas nuevas como SAAS y Redux y reforcé lo que he estado haciendo. Me gustó organizarme en accionables pequeños y alcanzables para seguir avanzando y poder planear siguientes iteraciones. Con lo que más me quedo satisfecha es que mi app es fiel al look & feel y que las funcionalidades principales las logré

## 5. Qué mejoraría

Si hubiese tenido más tiempo me hubiera gustado realizar más test con React, utilizar Redux en mi proyecto y trabajar más la pantalla desktop para que quedara exactamente igual que el prototipo en todos los dispositivos y no solo en mobile como lo logré

## 6. Pain point

- En el modal para crear un nuevo personaje, en el prototipo no se consideró si el personaje estaba vivo o finado, lo que hice fue agregar esa opción con radio buttons para que también puedan indicar ese dato.
- En los archivos que contenían data, los objetos no tenían un id, lo que hice fue que para trabajar agregué un id a los personajes que ya existían (solo en el archivo que utilicé) para poder seguir agregando más personajes.
- Para las cards consumí la data local y no con json-server, esto con la finalidad de que si no pudieran correrse los dos servidores, siempre puedan mostrarse las tarjetas de los personajes.
