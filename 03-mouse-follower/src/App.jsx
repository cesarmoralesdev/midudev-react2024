
import "./App.css";
import { useEffect, useState } from "react";

function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //pointer move
  useEffect(() => {
    console.log("effect", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    // limpieza del efecto cuando se desmonte el componente
    // cleanup
    // se ejecuta cuando se desmonta el componente
    // se ejecuta cuando cambian las dependencias
    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // change body classname
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);
    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);


  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <h1>Proyecto 3</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );

  // const [mounted, setMounted] = useState(true);

  // return (
  //   <main>
  //     { mounted && <FollowMouse /> }
  //     <button onClick={() => setMounted(!mounted)}>
  //       {mounted ? "Desmontar" : "Montar"} FollowMouse
  //     </button>
  //   </main>
  // );
}

export default App;
