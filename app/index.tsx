import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useState } from 'react';

export default function Home() {

    // Estado que controla se a aplicação foi iniciada
    const [iniciado, setIniciado] = useState(false);

    // Estado que controla o modo claro ou escuro
    const [modo, setModo] = useState<'claro' | 'escuro'>('claro');

    // Função para iniciar a aplicação
    function iniciarAplicacao() {
        setIniciado(true);
        setModo('escuro');
    }

    // Função para encerrar a aplicação
    function encerrarAplicacao() {
        setIniciado(false);
        setModo('claro');
    }

    // Função para alternar entre claro e escuro
    function alternarModo() {
        setModo((modoAtual) =>
            modoAtual === 'claro' ? 'escuro' : 'claro'
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.card}>

                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <Text style={styles.titulo}>
                        Tarefas
                    </Text>

                    {iniciado ? (
                        <Text style={styles.descricao}>
                            Bem-vindo ao TaskFlow!
                        </Text>
                    ) : (
                        <Text style={styles.descricao}>
                            Bem-vindo de volta ao TaskFlow!
                        </Text>
                    )}

                    <Pressable
                        onPress={iniciarAplicacao}
                        style={({ pressed }) => [
                            styles.botao,
                            pressed && styles.botaoPressionado
                        ]}
                    >
                        <Text style={styles.textoBotao}>
                            {iniciado ? "Continuar" : "Começar"}
                        </Text>
                    </Pressable>

                    {iniciado && (
                        <Pressable
                            onPress={encerrarAplicacao}
                            style={({ pressed }) => [
                                styles.botao,
                                pressed && styles.botaoPressionado
                            ]}
                        >
                            <Text style={styles.textoBotao}>
                                Encerrar
                            </Text>
                        </Pressable>
                    )}

                </View>

            </View>
        </SafeAreaView>
    );
};