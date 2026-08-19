import { Text } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

export default function Home() {
    return (
        <View>
            <Text style={{ color: 'red'}}>Hello, World!</Text>
            <Text>Hello, World!</Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    redText: {
        color: 'red',
        fontSize: 20
    }
});