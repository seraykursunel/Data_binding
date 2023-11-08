import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/**
   Kullanıcı, girişte herhangi bir karakteri yazabilmeli ve 
   bu karakterler tarayıcıda gösterilmelidir.

**/

function App() {
  const [text, setText] = useState("");

  function onChanged(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={onChanged}
      />
      <p>{text}</p>
    </>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
