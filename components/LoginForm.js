import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label} from 'native-base'
import {LinearGradient} from "expo/build/removed.web";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', errors: {}, loading: false};

    }

    onSubmit() {
        this.props.login({
            username: this.state.username,
            password: this.state.password
        });
        this.setState({errors: '', loading: true});
    }


    render() {
        const {username, password, errors, loading} = this.state;

        return (
            <KeyboardAvoidingView>
                <View>
                    <Image
                        source={require('../assets/Lootbox_logo.png')}
                    />
                    <View>
                        <TextInput style={[styles.TextInput]} value={username}
                                   onChangeText={username => this.setState({username})}
                                   placeholder="Nom d'utilisateur"/>
                        <TextInput style={[styles.TextInput]} value={password}
                                   onChangeText={password => this.setState({password})}
                                   placeholder="Mot de passe" secureTextEntry/>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.TouchableOpacity]}>Mot de passe oublié?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.SignIn]} onPress={() => this.onSubmit()}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131F26',
        justifyContent: 'center',
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
        alignSelf: 'flex-end',
        color: '#A3B4BF',
        fontSize: 15,
        right: 0,
        marginBottom: 50,
    },

    SignIn: {
        alignItems: 'center',
        backgroundColor: '#274659',
        borderWidth: 2,
        borderColor: '#274659',
        borderRadius: 10,
        color: '#FFFFFF',
        fontSize: 20,
        height: 50,
        padding: 5,
        textAlign: 'center',
        width: '100%',
    }
});

export default LoginForm;