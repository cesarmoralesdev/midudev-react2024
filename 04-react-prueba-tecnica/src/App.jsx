import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState();

  //efecto para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (res.message) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;
    const threeFirstWord = fact.split(" ", 3);
        const imageUrl = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`;
        fetch(imageUrl)
          .then((res) => {
            if (res.message) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
          })
          .then((data) => {
            const { url } = data;
            setImageUrl(url);
          })
          .catch((error) => {
            setError(error.message);
          });
  }, [fact]);

  return (
    <main>
      <h1>Random cat fact</h1>
      {error && <p>{error}</p>}
      {!error && 
        <div>
          {fact && <p>{fact}</p>}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={`Image extracted using the first three words for ${fact}`}
            />
          )}

        </div>
      }

    </main>
  );
}
