import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';


export default function Home() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Image 
                    source={require('./assets/logo.png')} 
                    style={styles.image} 
                    resizeMode='contain'
                    
                />
                
                <Text style={styles.titulo}>TaskFlow</Text>

                <Text>TaskFlow</Text>

                <Text>Organize suas tarefas de forma eficiente</Text>
            </View>
        </SafeAreaView>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
    }
});
