import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

class HomeScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HomeScreen Lootbox</Text>
                <Button title="Sign Out" onPress={() => alert('todo! depuis le profil')}/>
            </View>
        );
    }
}

export default HomeScreen;