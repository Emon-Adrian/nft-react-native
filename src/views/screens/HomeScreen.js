/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet, Image, ScrollView} from 'react-native';
import COLORS from '../../constants/colors';
//import collections from '../../constants/collections';


const App = () => {
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
          {/* <FlatList /> */}
        </ScrollView>
     </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
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
});