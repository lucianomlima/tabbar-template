import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class HomeScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'Início',
        tabBarLabel: 'Início',
        headerLeft: null
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>App2Sales Template</Text>
            </View>
        );
    }
}

export default HomeScreen;
