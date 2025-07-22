import { memo } from "react";

function Tarefa({ id, texto, concluida, onRemover, onToggle }) {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={concluida}
          onChange={e => onToggle(id, e.target.checked)}
        />
        <span className={concluida ? "line-through text-gray-500" : ""}>
          {texto || "[Sem texto]"}
        </span>
      </label>
      <button
        onClick={() => onRemover(id)}
        className="text-red-500 hover:text-red-700"
      >
        Remover
      </button>
    </li>
  );
}

export default memo(Tarefa);
