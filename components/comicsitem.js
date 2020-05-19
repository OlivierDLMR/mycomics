import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class comicsitem extends React.Component {
    render() {
        const comics = this.props.Comics
        console.log(Comics);
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{comics.title} </Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{comics.overview} </Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>ANNEE : {comics.release_date} </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    description_container: {
        flex: 2
    },
    description_text: {
        color: 'black'
    }
})

export default comicsitem