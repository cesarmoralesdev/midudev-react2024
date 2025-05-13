https://github.com/midudev/aprendiendo-react/tree/master/projects

Componetes en PascalCase: HeaderComponent
Propiedades en CamelCase: backgroundColor

No aplicar margenes a componentes, porque en una seccion de la pagina puede verse bien pero en otra no, Lo que se hace es envolver el componente en una section y aplicarle el estilo a la section, es decir personalizado para ese caso y en optro se puede poner o no otro margen

Diferencia entre componente y elemento
Un componente es la factoria de los elementos y el elemento es lo que renderiza

Props deberian ser inmutables, es decir no se debe modificar, porque sino la fuente original se modifica, lo que se debe hacer es crear una nueva variable y copiar el contenido de la variable que requerimos trabajar

Hooks
useState:   Guardar una variable

Renderizaciones
Cuando se renderiza un componente padre, por defecto se actualizan sus componentes hijos, independientemente si las props de los mismos cambio o no

Tener en cuenta, que si uso uno prop para inicializar un estado, se iniciliaza una sola vez, despues queda en el ambito del componente donde se ha inicializado

En los map, los elementos deben tener un key unico, si usaremos uuid u otro generador de id, hacerlo fuera del renderizado, por si lo hacemos dentro, cada vez que se renderice el elemento tendra un id distinto y esto sera un problema.

Webs:
https://heroicons.com/
https://unavatar.io/#/

