import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import Comics from '../helpers/comicsData';
import Comicsitem from './comicsitem';
import { getComicsFromApiWithSearchedText } from '../APIMARVEL/apimarvel';


class Searchcomics extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre'/>
                <Button title='Rechercher' onPress={() => this._loadComics()}/>

                <FlatList
                    data={Comics}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Comicsitem Comics={item}/>}
                />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#A01010',
        borderWidth: 1,
        paddingLeft: 5
    },
    main_container: {
        flex: 1,
        marginTop: 20
    }
}) 


export default Searchcomics;