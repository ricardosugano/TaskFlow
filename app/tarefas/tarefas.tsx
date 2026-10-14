import Botao from "@/components/Botao";
import TarefaCard from "@/components/TarefaCard";
import { router } from "expo-router";
import { Alert, FlatList, SectionList, Text, View } from "react-native";
import { styles } from "@/styles/global";
import { carregarTarefas, carregarUsuario } from "@/utils/armazenamento";
import { useEffect, useState } from "react";
import api from "../../services/api";

type Tarefa = {
    _id: string;
    titulo: string;
    descricao: string;
    prioridade: string;
    concluida: boolean;
}

type Usuario = {
    username: string;
}

export default function Tarefas() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function excluir(id: string) {
        Alert.alert(
            "Excluir", "Tem certeza que deseja excluir esta tarefa?",
            [
                { 
                    text: "Cancelar",
                    style: "cancel"},
                { 
                    text: "Excluir",
                    style: "destructive",
                    onPress: async() =>{
                        await api.delete(`/tarefas/${id}`);
                        console.log("Tarefa excluída!");
                    } }
        ])
    }   

    useEffect(()=>{
        async function carregar() {
            const dados = await api.get('/tarefas')
            const user = await carregarUsuario();
            setTarefas(dados);
            setUsuario(user);
        }
        carregar();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Seja bem vindo, {usuario ? usuario.username : ""}</Text>
            <Text style={styles.titulo}>Minhas Tarefas</Text>

            <FlatList
                data={tarefas}
                contentContainerStyle={{padding: 25}}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                            <>
                                <TarefaCard
                                    titulo={item.titulo}
                                    descricao={item.descricao}
                                    prioridade={item.prioridade}
                                />
                            </>

                )}

                ListEmptyComponent={
                    <Text>Nenhuma tarefa na lista</Text>
                }

            />

            <Botao
                texto="Add +"
                onPress={()=>router.push("/tarefas/addTarefas")}
            />
            <Botao
                texto="Configurações"
                onPress={()=>router.push("/configuracoes")}
            />
        </View>
    )
}