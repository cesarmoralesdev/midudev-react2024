import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
export function AppOld() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  //Siempre comenzar a usar el useEffect asi: useEffect([]) despues useEffect(() => {}, []), despues hacer modificaciones, porque si nos olvidamos del [], vamos a tener un loop infinito. Si queremos usar dependencias, solo poner las que van a cambiar
  //Metodo 1
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        //obtener las 3 primeras palabras
        const threeFirstWord = fact.split(" ", 3);
        // const firstWord = fact.split(" ")[0];
        const imageUrl = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`;
        fetch(imageUrl)
          .then((res) => res.json())
          .then((data) => {
            const { url } = data;
            setImageUrl(url);
          });
      });
  }, []);
  //Metodo 2: Usando una funcion asyncrona dentro del useEffect, si lo ponemos fuera va a ocasionar un loop infinito
  //   useEffect(() => {
  //     async function getRandomFact() {
  //       const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  //       const data = await res.json();
  //       setFact(data.fact);
  //     }
  //     getRandomFact();
  //   }, []);

  return (
    <main>
      <h1>Random cat fact</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
      <br />
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}
