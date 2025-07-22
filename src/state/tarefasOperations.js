// tarefasOperations.js (mock local)
let bancoLocal = [];

function gerarId() {
  return Date.now().toString();
}

function delay(ms = 300) {
  return new Promise(res => setTimeout(res, ms));
}

export async function fetchTarefas() {
  await delay();
  return [...bancoLocal];
}

export async function adicionarTarefa(texto) {
  await delay();
  const nova = { _id: gerarId(), texto, concluida: false };
  bancoLocal.push(nova);
  return nova;
}

export async function removerTarefa(id) {
  await delay();
  bancoLocal = bancoLocal.filter(t => t._id !== id);
}

export async function alternarConclusaoTarefa(id, concluida) {
  await delay();
  bancoLocal = bancoLocal.map(t =>
    t._id === id ? { ...t, concluida } : t
  );
}
