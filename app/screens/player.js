import React from 'react';
import { View ,StyleSheet ,Text } from 'react-native';

const AudioList = () => {
    return (
        <view style={styles.container}>
            <text> player</text>
        </view>
    )
}
const styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent: 'center',
        alignContent :'center',
    }
})
export default AudioList;

