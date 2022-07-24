/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const App = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
         <StatusBar barStyle="light-content" />
         <View style={styles.imageBg}>
            <Image source={require('../../assets/nft.png')} 
            style={{height:250, width:180, marginTop: 70}} />
         </View>
            <View style={{
                paddingHorizontal: 20,
                marginTop:50,
                justifyContent: 'center',
            }}>
                <Text style={styles.title}>Collecting Best</Text>
                <Text style={styles.title}>NFT Cryto Art</Text>
                <TouchableOpacity 
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => navigation.replace('GotoHome')}
                >
                    <Text style={{color:COLORS.black, fontWeight:'bold'}}>Start</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

export default App;

export const styles = StyleSheet.create({
    imageBg: {
        height: 320,
        width:220,
        backgroundColor: COLORS.violet,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 40,
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
    title: {
       color: COLORS.white,
       fontSize: 25,
       fontWeight: 'bold',
       marginTop: 20,
    },
    btn:{
        height: 50,
        width: 150,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});
