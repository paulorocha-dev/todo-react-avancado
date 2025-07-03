import { memo } from "react";

function Filtros({ filtro, setFiltro }) {
  const botoes = [
    { valor: "todas", label: "Todas" },
    { valor: "concluidas", label: "Concluídas" },
    { valor: "pendentes", label: "Pendentes" },
  ];

  return (
    <div className="flex gap-2 my-4">
      {botoes.map(({ valor, label }) => (
        <button
          key={valor}
          onClick={() => setFiltro(valor)}
          className={`px-3 py-1 rounded ${
            filtro === valor
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default memo(Filtros);
