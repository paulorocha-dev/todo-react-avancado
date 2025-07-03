import { memo, useContext } from "react";
import { TarefaContext } from "../context/TarefaContext";

function Tarefa({ id, texto, concluida }) {
  const { remover, alternarConclusao } = useContext(TarefaContext);

  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={concluida}
          onChange={(e) => alternarConclusao(id, e.target.checked)}
        />
        <span className={concluida ? "line-through text-gray-500" : ""}>
          {texto || "[Sem texto]"}
        </span>
      </label>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => remover(id)}
      >
        Remover
      </button>
    </li>
  );
}

export default memo(Tarefa);
