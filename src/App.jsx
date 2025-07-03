import { useState, useMemo } from "react";
import { TarefaContext } from "./context/TarefaContext";
import { useTarefas } from "./hooks/useTarefas";
import Formulario from "./components/Formulario";
import Filtros from "./components/Filtros";
import Tarefa from "./components/tarefa";

export default function App() {
  const [filtro, setFiltro] = useState("todas");
  const { tarefas, adicionar, remover, alternarConclusao } = useTarefas();

  const tarefasFiltradas = useMemo(() => {
    if (filtro === "concluidas") return tarefas.filter((t) => t.concluida);
    if (filtro === "pendentes") return tarefas.filter((t) => !t.concluida);
    return tarefas;
  }, [tarefas, filtro]);

  return (
    <TarefaContext.Provider value={{ remover, alternarConclusao }}>
      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <Formulario onAdicionar={adicionar} />
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <ul>
          {tarefasFiltradas.map((t) => (
            <Tarefa key={t._id} id={t._id} texto={t.texto} concluida={t.concluida} />
          ))}
        </ul>
      </main>
    </TarefaContext.Provider>
  );
}
