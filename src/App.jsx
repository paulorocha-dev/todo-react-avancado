import { useRecoilState, useRecoilValue } from "recoil";
import { filtroState, tarefasFiltradasState } from "./state/tarefasState";
import { useTarefas } from "./hooks/useTarefas";
import Formulario from "./components/Formulario";
import Filtros from "./components/Filtros";
import Tarefa from "./components/Tarefa";

export default function App() {
  const [filtro, setFiltro] = useRecoilState(filtroState);
  const { adicionar, remover, alternarConclusao } = useTarefas();
  const tarefasFiltradas = useRecoilValue(tarefasFiltradasState);

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <Formulario onAdicionar={adicionar} />
      <Filtros filtro={filtro} setFiltro={setFiltro} />
      <ul>
        {tarefasFiltradas.map(t => (
          <Tarefa
            key={t._id}
            id={t._id}
            texto={t.texto}
            concluida={t.concluida}
            onRemover={remover}
            onToggle={alternarConclusao}
          />
        ))}
      </ul>
    </main>
  );
}
