import "./global.css";

import ComboBox from "./components/ComboBox";

const dados = [
  { id: 1, nome: "Miguel" },
  { id: 2, nome: "Lucas" },
  { id: 3, nome: "Emilio" },
  { id: 4, nome: "Diego" },
  { id: 5, nome: "Maria" },
  { id: 6, nome: "Jose" },
];

function App() {
  return (
    <>
      <ComboBox data={dados} />
    </>
  );
}

export default App;
