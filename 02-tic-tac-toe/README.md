Podemos enviar funciones como parametros, pero no ejecutarla en ese momento:

propUpdate={update()}       //Incorrecto
propUpdate={update}         //Correcto

No tenemos que mutar nunca, ni las prop ni el estado, porque si no lo hacemos podemos tener discrepancias en el renderizado

Profundizar spread y rest operator

La actualizacion de los estados en react son asincronos, por ejemplo despues de un setstate podemos tener el valor como que no, por ejempo en el siguiente codigo, winner es un estaod que no necesariamente se mostrara en consola porque al ser asincronoc su estado puede demorar unos segundos en actualizarse, por ende no tener informacion actaulizada de winner, pero si de newWinner en el ambito donde se haya definido

const [winner, setWinner] = useState(null);

setWinner(newWinner);
console.log(winner);

No poner un useState en un if

useEffect, permite:
ejecutar codigo arbitrario (el codigo que querramos) cuando el componente se monta en el dom
cada vez que cambian las dependencias que nosotros le digamos

useEffect(codeToExecute, listOfDependencies)

useEffect(() => {
    //como minimo se ejcuta una vez
}, listOfDependencies)

donde listOfDependencies es opcional y si no se pasa, quiere decir que cada vez que se renderice el componente se ejecutara este codigo
useEffect(() => {
    //como minimo se ejcuta una vez
});







