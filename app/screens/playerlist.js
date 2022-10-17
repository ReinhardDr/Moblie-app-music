import React from 'react';
import { View ,StyleSheet ,Text } from 'react-native';

const playerlist = () => {
    return (
        <View style={styles.container}>
            <Text> playelist</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent: 'center',
        alignContent :'center',
    }
})
export default playerlist;

