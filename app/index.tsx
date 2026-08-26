import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Home() {
    function iniciarAplicacao(){
        console.log("o botão foi pressionado")
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <View style={styles.card}>

                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <Text style={styles.titulo}>
                        TaskFlow
                    </Text>

                    <Text style={styles.subtitulo}>
                        Organize suas tarefas de forma eficiente
                    </Text>

                    <Pressable 
                    onPress={iniciarAplicacao} style={({pressed})} => [styles.botao, pressed </View>
                    >
                        <Text style={styles.textoBotao}>
                            Começar
                        </Text>
                    </Pressable>

                </View>
            </View>
        </SafeAreaView>
    );
}
