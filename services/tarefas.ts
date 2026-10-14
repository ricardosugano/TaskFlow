import api from "./api";

export async function listarTarefas() {
    const response = await api.get('/tarefas');
    return response.data;
}   

export async function criarTarefa(id: string) {
    const response = await api.post(`/tarefas/${id}`);
    return response.data;
}

export default function excluirTarefa(id: string) {
    await api.delete(`/tarefas/${id}`);
    return true;

}