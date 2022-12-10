import React, {Component} from 'react';
import { Text, View, StyleSheet ,ScrollView } from 'react-native';
import { AudioContext } from './music files/AudioProvider';

export class HomePage extends Component {
    static contextType = AudioContext
    

render() {
    return (
        <ScrollView >
            {this.context.audioFiles.map(item => 
            <Text style={{padding: 10, borderBottomColor: 'black', borderBottomWidth: 2}} key={item.id}>{item.filename}</Text>)}

        </ScrollView>
        );
    }
} 

const style = StyleSheet.create({
    container:{
        flex :1,
        justifyContent: 'center',
        alignContent :'center',
    },
});

export default HomePage
