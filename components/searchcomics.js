import React from 'react';
import { View, TextInput, Button } from 'react-native';

class Searchcomics extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button style={styles.textinput} title='Rechercher' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = {
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#A01010',
        borderWidth: 1,
        paddingLeft: 5
    }
}


export default Searchcomics;