import React from 'react';
import { View ,StyleSheet ,Text } from 'react-native';

const playelist = () => {
    return (
        <view style={styles.container}>
            <text> playelist</text>
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
export default playelist;

