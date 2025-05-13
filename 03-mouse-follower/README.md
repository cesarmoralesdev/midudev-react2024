
Ver suscripciones al elemento window

al ejecutar getEventListeners(window) en la consola del navegador

Permite detectar suscripciones, si se estan suscribiendo algun evento constantemente puede provocar menor rendimiento de la aplicacion

<StrictMode> hace que se ejecute 2 eveces el useffect, este bloque solo sirve para validar el montado de componentes, solo funciona en desarrollo en produccion lo ignora


Tener en cuenta en useeffect
[] -> solo se ejecuta una vez cuando se monta el componente
[enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
undefined -> se ejcuta cada vez que se renderiza el componente


tener cuidado usar setstae en el useffect, se puede generar un loop infinito


usar para publicar demos (averiguar)
Gratuitas:
- netlify drop
- vercel
- renderer

Paga:
- railway
- fly.io


cleanup entender bien su funcionamiento




