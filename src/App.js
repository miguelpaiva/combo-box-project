import "./global.css";

import ComboBox from "./components/ComboBox";
import ComboBoxEx from "./components/ComboBoxEx";

import { AiFillAndroid } from "react-icons/ai";

const dados = [
  { id: 1, name: "Miguel" },
  { id: 2, name: "Lucas" },
  { id: 3, name: "Emilio" },
  { id: 4, name: "Joao" },
  { id: 5, name: "Diego" },
  { id: 6, name: "Maria" },
  { id: 7, name: "Jose" },
];

function App() {
  const inputProps = {
    placeholder: "Procurar...",
  };

  return (
    <>
      <ComboBox data={dados} inputProps={inputProps} />
    </>
  );
}

export default App;
