import { useState } from "react";

export default function Formulario({ onAdicionar }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAdicionar(texto.trim()).then(() => setTexto(""));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        className="flex-1 border p-2 rounded"
        placeholder="Nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Adicionar
      </button>
    </form>
  );
}
