import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Buttom, TouchableOpacity} from 'react-native';
import UserLoginFormContainer from "../container/UserLoginFormContainer"

class UserLogin extends Component {
    render() {
        const {navigate} = this.props.navigate;
        return (
            <View style={styles.container}>
                <UserLoginFormContainer/>
                <TouchableOpacity>
                    <Text style={[styles.TouchableOpacity]} onPress={() => navigate('RegisterScreen')}>SE CONNECTER</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#A01010',
        justifyContent: 'center',
        padding: 20,
    },

    TouchableOpacity: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        color: '#A01010',
        fontSize: 20,
        height: 50,
        padding: 5,
        textAlign: 'center',
    },
});

export default UserLogin;