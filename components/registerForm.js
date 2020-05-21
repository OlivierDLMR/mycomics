import React, {Component} from 'react';
import {View, TextInput, Button, TouchableOpacity, Text, StyleSheet} from 'react-native';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', email: '', password: '' };
    }

    onSubmit() {
        this.props.register({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        });
        this.setState({ username: '', email: '', password: '' });
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={[styles.TextInput]} value={this.state.username} onChangeText={text => this.setState({username:text})} placeholder="Nom d'utilisateur"/>
                <TextInput style={[styles.TextInput]} value={this.state.email} onChangeText={text => this.setState({email:text})} placeholder="E-mail"/>
                <TextInput style={[styles.TextInput]} value={this.state.password} onChangeText={text => this.setState({password:text})} placeholder="Mot de passe" secureTextEntry/>
                <TouchableOpacity onPress={() => this.onSubmit()}>
                    <Text style={[styles.TouchableOpacity]}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131F26',
        justifyContent: 'center',
        padding: 20,
    },

    TextInput: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0A84FF',
        borderRadius: 2,
        color: '#FFFFFF',
        fontSize: 20,
        justifyContent: 'center',
        margin: 10,
        padding: 5,
        textAlign: 'center',
    },

    TouchableOpacity: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#274659',
        borderRadius: 10,
        color: '#FFFFFF',
        fontSize: 20,
        height: 50,
        padding: 5,
        textAlign: 'center',
        width: '100%',
    },
});

export default RegisterForm;