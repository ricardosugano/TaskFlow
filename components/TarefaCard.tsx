import {View, Text, StyleSheet, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


interface TCProps{
    titulo: string
    descricao: string
    prioridade: string
}

export default function TarefaCard({titulo, descricao, prioridade}: TCProps){

    return(
        <View style={[
            styles.tarefa,
            prioridade === "Alta" && { borderLeftColor: 'red' },
            prioridade === "Media" && { borderLeftColor: 'yellow' }
            ]}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Pressable 
            onPress={() => console.log('Tarefa concluída!')}            
            >
                <Ionicons name="checkmark" size={24} color="green" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    tarefa:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#cacacaff',
        borderRadius: 8,
        padding: 15,
        borderLeftWidth: 4
    },
    titulo:{
        fontSize: 20,
        fontWeight:'bold'
    },
    descricao:{
        fontSize: 13
    }
})