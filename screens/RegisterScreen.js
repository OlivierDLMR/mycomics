import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RegisterFormContainer from "../container/RegisterFormContainer";

class RegisterScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ fontSize: 15, marginBottom: 10 }}>
                    <RegisterFormContainer navigate={navigate}/>
                </View>
            </ScrollView>
        );
    }
}

export default RegisterScreen;