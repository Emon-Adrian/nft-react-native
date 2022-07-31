/* eslint-disable prettier/prettier */
import React from 'react'
import COLORS from '../../constants/colors'
import { View, Text,SafeAreaView,StyleSheet, StatusBar, ImageBackground, Image } from 'react-native'
import {  ChevronLeftIcon, DotsVerticalIcon } from "react-native-heroicons/solid";
import {  HeartIcon } from "react-native-heroicons/outline";

const DetailsScreen = ({navigation, route}) => {
    const data = route.params;

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
      <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
      />
      <ImageBackground 
      style={style.headerImage}
      source={data.image}>
        <View style={style.header}>
         <ChevronLeftIcon size={30} color={COLORS.white} onPress={navigation.goBack} />    
         <DotsVerticalIcon size={30} color={COLORS.white} />    
        </View>
      </ImageBackground>
      <View style={style.detailsCon}>
        <View style={{flexDirection: 'row',justifyContent:'space-between' , alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image 
            source={data.creatorImage} 
            style={{height:40, width:40, borderRadius:40}}/>
            <Text style={{color: COLORS.black, marginLeft:10}}>{data.creator}</Text>
        </View>
        <View style={style.iconContainer}>
            <HeartIcon size={20} color={COLORS.white}/>
            <Text style={{color:COLORS.white, fontSize:20, fontWeight:'bold', marginLeft:2}}>33</Text>
        </View>
        </View>
        <Text style={{fontSize: 22, marginVertical:20, color: COLORS.black, fontWeight:'bold'}}>Description</Text>
        <Text style={{color: COLORS.black, lineHeight:30}}>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a 
         type specimen book. It has survived not only five centuries
        </Text>
      </View>
      <View style={style.footer}>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/eth.png')} style={{height:20, width:20, borderRadius:20}}/>
            <Text style={{marginLeft:5, fontWeight:'bold',color:COLORS.black}}>{data.price}</Text>
         </View>
         <View style={style.btn}>
            <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:12}}>Buy Now</Text>
         </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen

const style = StyleSheet.create({
    btn:{
        backgroundColor: COLORS.violet,
        height:40,
        width:100,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    footer:{
       width: '100%',
       backgroundColor: COLORS.white,
       position:'absolute',
       bottom:0,
       padding: 20,
       paddingBottom: 30,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
    },
    iconContainer: {
        height:30,
        width:60,
        backgroundColor: COLORS.violet,
        borderRadius:8,
        flexDirection:'row',
        alignItems:"center",
        paddingHorizontal:10,
    },
    headerImage: {
       position:  'absolute',
       height: 400,
       width: '100%',
       overflow: 'hidden',
         borderBottomRightRadius: 60,
    },
    header:{
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
      justifyContent: 'space-between',
    },
    detailsCon: {
        position:'absolute',
        width: '100%',
        zIndex: 1,
        top: 400,
        padding: 20,
    },
});