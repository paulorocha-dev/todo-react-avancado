import { useRecoilState } from "recoil";
import { tarefasState } from "../state/tarefasState";
import {
  fetchTarefas,
  adicionarTarefa,
  removerTarefa,
  alternarConclusaoTarefa,
} from "../state/tarefasOperations";
import { useEffect } from "react";

export function useTarefas() {
  const [tarefas, setTarefas] = useRecoilState(tarefasState);

  useEffect(() => {
    fetchTarefas().then(setTarefas).catch(console.error);
  }, [setTarefas]);

  async function adicionar(texto) {
    const nova = await adicionarTarefa(texto);
    setTarefas(old => [...old, nova]);
  }

  async function remover(id) {
    await removerTarefa(id);
    setTarefas(old => old.filter(t => t._id !== id));
  }

  async function alternarConclusao(id, concluida) {
    await alternarConclusaoTarefa(id, concluida);
    setTarefas(old =>
      old.map(t => (t._id === id ? { ...t, concluida } : t))
    );
  }

  return { tarefas, adicionar, remover, alternarConclusao };
}
