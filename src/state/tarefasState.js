import { atom, selector } from "recoil";

export const tarefasState = atom({
  key: "tarefasState",
  default: [],
});

export const filtroState = atom({
  key: "filtroState",
  default: "todas",
});

export const tarefasFiltradasState = selector({
  key: "tarefasFiltradasState",
  get: ({ get }) => {
    const filtro = get(filtroState);
    const tarefas = get(tarefasState);

    if (filtro === "concluidas") return tarefas.filter(t => t.concluida);
    if (filtro === "pendentes") return tarefas.filter(t => !t.concluida);
    return tarefas;
  },
});
