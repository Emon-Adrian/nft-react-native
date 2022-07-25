/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import collections from '../../constants/collections';
import {  HeartIcon } from "react-native-heroicons/outline";

const {width} = Dimensions.get('window');

const Card = ({data, navigation}) => {
    return <TouchableOpacity style={style.Card} activeOpacity={0.7}>
         <HeartIcon
            style={{position: 'absolute', zIndex:1, right:10, top:20}} 
            color={COLORS.white}
            size={20}  />
         <Image 
          style={{height: '100%', width: '100%', borderRadius: 20}}
          source={data.image}/>
          <View style={style.CardDetails}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Image
                 style={{height:25, width:25, borderRadius:25}}
                source={require('../../assets/eth.png')}/>
                <Text
                style={{marginLeft:2,fontSize:12,fontWeight: 'bold',color: COLORS.white}}
                >
                  {data.price}
                </Text>
            </View>
            <View style={style.cardBtn}>
               <Text
                style={{color: COLORS.white,fontSize:10,fontWeight: 'bold'}}
               >Buy Now</Text>
            </View>
          </View>
    </TouchableOpacity> 
};

const TrendingCard = () =>{
   return <View style={style.trendingCard}></View>
}

const App = ({navigation}) => {
  return (
     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <StatusBar barStyle="dark-content" 
         backgroundColor={COLORS.white}
        />
        <View style={style.header}>
         <View style={style.priceTag}>
           <Image 
            style={{height: 20, width: 20, borderRadius: 20}}
           source={require('../../assets/eth.png')}/>
           <Text style={{fontWeight: 'bold', color: COLORS.white, marginLeft:2, fontSize:12}}>22.6</Text>
        </View>
        <Image
          style={{height: 40, width: 40, borderRadius: 40}}
          source={require('../../assets/emon.png')}
        />
        </View>
        <ScrollView showsVerticalScrollViewIndicator={false}>
          <Text style={style.text}>Top NFTS</Text>
          <FlatList
             snapToInterval={width * 0.55}
             decelerationRate="fast"
             showsHorizontalScrollIndicator={false} 
             contentContainerStyle={{paddingRight: 20, paddingBottom: 20}}
             horizontal 
             data={collections}
             renderItem={({item}) => <Card data={item} navigation={navigation}/>}
          />
          <Text style={style.text}>Trending collections</Text>
          <FlatList
             showsHorizontalScrollIndicator={false} 
             contentContainerStyle={{paddingRight: 20, paddingBottom: 20}}
             horizontal 
             data={collections}
             renderItem={({item}) => 
             <TrendingCard data={item} navigation={navigation}/>}
          />
        </ScrollView>
     </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
   trendingCard:{
        height: 150,
        width:180,
        backgroundColor:COLORS.white,
        marginLeft:20,
        borderRadius:10,
        shadowRadius: 10,
      shadowOpacity: 0.2,
      shadowOffset: {height: 10},
      elevation: 10,
   },
   header: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   priceTag:{
      height: 25,
      width: 70,
      backgroundColor: COLORS.violet,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5,
   },
   text:{
      margin:20,
      fontWeight: 'bold',
      color: COLORS.black,
      fontSize: 22,
   },
   Card:{
      height: 300,
      width: width * 0.55,
      backgroundColor: COLORS.white,
      marginLeft: 20,
      shadowColor: COLORS.grey,
      shadowRadius: 10,
      shadowOpacity: 0.3,
      shadowOffset: {height: 10},
      elevation: 10,
      borderRadius: 20,
      borderWidth:7,
      borderColor: COLORS.white,
   },
   CardDetails:{
      height: 70,
      width: '100%',
      position: 'absolute',
      backgroundColor:'rgba(0,0,0,0.4)',
      bottom:0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal:20,
   },
   cardBtn:{
      width:70,
      height:30,
      backgroundColor: COLORS.violet,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
   }
});