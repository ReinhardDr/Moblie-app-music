import {    Text, StyleSheet, View , 
    ImageBackground, SafeAreaView,
    TextInput, Image, TouchableOpacity} from 'react-native'
import React, { Component} from 'react'


export default class login extends Component {

render() {
const {navigation} = this.props
return (
<View>
<ImageBackground style={{height:'100%', width:'100%'}} source={require('./../app/images/nen.jpg')}>

    <SafeAreaView style={{flex:1,}}>
        <View style={{height:'100%',height:'100%',}}>
            
            {/* Account password */}
            <View style={{width:'100%', height:'20%', marginTop:'100%', alignItems:'center'}}>
                {/* Account */}
                <View style={{width:'70%', height:'30%',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'black'}}>Account</Text>
                    <TextInput style={{color:'black', height:'100%', width:'70%', borderBottomColor:'black', borderBottomWidth:1, textAlign:'right', }}/>
                </View>
                {/* Password */}
                <View style={{width:'70%', height:'30%',flexDirection:'row', alignItems:'center',justifyContent:'space-between' ,marginTop:10}}>
                    <Text style={{color:'black'}}>Password</Text>
                    <TextInput style={{color:'black', height:'100%', width:'70%', borderBottomColor:'black', borderBottomWidth:1, textAlign:'right',paddingRight:40, }} 
                                secureTextEntry={true}/>
                    
                    <TouchableOpacity style={{height:'100%', width:30, position:'absolute', right:0}} 
                                    onPress ={()=>{
                                        setPasswordVisible(!getPasswordVisible)
                                    }}>
                        <Image  source={require('../app/images/mat.png')} style={{height:'100%', width:30,}} resizeMode="contain"/>
                    </TouchableOpacity>
                    
                </View>
            </View>

            {/* button login */}
            <View style={{height:'20%', width:'100%' ,marginTop:20, justifyContent:'center', alignItems:'center'}}>
                {/* Đăng nhập */}
                <TouchableOpacity style={{ width:'60%', height:'30%', borderColor:'black',borderWidth:1, borderRadius:100, backgroundColor:'#C0C0C0',justifyContent:'center', alignItems:'center'}}
                onPress={()=>{navigation.navigate('home')}}>
                    <Text style={{color:'black', fontSize:20}}>Đăng nhập</Text>
                </TouchableOpacity>
                {/* Đăng kí */}
                <TouchableOpacity style={{ width:'60%', height:'30%', borderColor:'black',borderWidth:1, borderRadius:100, backgroundColor:'#C0C0C0',justifyContent:'center', alignItems:'center', marginTop:20}}>
                    <Text style={{color:'black', fontSize:20}}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
</ImageBackground>

</View>
)
}
}

const styles = StyleSheet.create({})