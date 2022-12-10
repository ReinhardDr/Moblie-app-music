import React from 'react';
import { View ,StyleSheet ,Text } from 'react-native';

const Libary = () => {
    return (
        <View style={styles.container}>
            <Text> Libary </Text>
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
export default Libary;

