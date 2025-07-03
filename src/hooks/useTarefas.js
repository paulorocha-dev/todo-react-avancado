import { useState, useEffect } from "react";

const API_URL = "https://crudcrud.com/api/seu-token/tarefas";

export function useTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTarefas(data.filter(t => t.texto)))
      .catch(console.error);
  }, []);

  const adicionar = (texto) => {
    const nova = { texto, concluida: false };
    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nova),
    })
      .then(res => res.json())
      .then((tarefa) => setTarefas((prev) => [...prev, tarefa]));
  };

  const remover = (id) => {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => {
      setTarefas((prev) => prev.filter((t) => t._id !== id));
    });
  };

  const alternarConclusao = (id, novaConclusao) => {
    const tarefaAtual = tarefas.find((t) => t._id === id);
    if (!tarefaAtual) return Promise.reject("Tarefa não encontrada");

    const atualizada = { ...tarefaAtual, concluida: novaConclusao };

    return fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(atualizada),
    })
      .then(() => {
        setTarefas((prev) =>
          prev.map((t) => (t._id === id ? atualizada : t))
        );
      })
      .catch(console.error);
  };

  return { tarefas, adicionar, remover, alternarConclusao };
}
