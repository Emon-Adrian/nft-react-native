/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeIcon, HeartIcon, BellIcon, UserIcon } from "react-native-heroicons/outline";
//import { HomeIcon } from "react-native-heroicons";
import {View, TouchableOpacity} from 'react-native';
import COLORS from '../../constants/colors';
import HomeScreen from '../screens/HomeScreen';



const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
    return <View
    style={{
        flexDirection: 'row',
        padding: 20,
        backgroundColor: COLORS.white,
        borderTopWidth: 0.3,
        borderColor: COLORS.grey,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
       {state.routes.map((route, index)=>{
           const {options} = descriptors[route.key];
           const isFocused = state.index === index;
           const TabBarIcon = options.tabBarIcon;
           return(
            <TouchableOpacity
             onPress={()=>navigation.navigate(route.name)}
             style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
            >
               <TabBarIcon 
               size={30} 
               color={isFocused ? COLORS.black : COLORS.grey}
               focused={isFocused}
               />
               { isFocused && (
                     <View
                     style={{
                        height:6, 
                        width:30, 
                        position: 'absolute', 
                        backgroundColor:COLORS.black,
                        top:-20,
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                    }}
                   />
               )}
               
            </TouchableOpacity>
           )
       })}
    </View>
};

const BottomNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}
          tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{tabBarIcon:({focused,color, size})=>(
            <HomeIcon 
            color={color}
            size={size}  />)
            }}/>
            <Tab.Screen name="NotificationsScreen" component={HomeScreen} 
            options={{tabBarIcon:({focused,color, size})=>(
            <BellIcon 
            color={color}
            size={size}  />)
            }}/>
            <Tab.Screen name="FavouriteScreen" component={HomeScreen} 
            options={{tabBarIcon:({focused,color, size})=>(
            <HeartIcon 
            color={color}
            size={size}  />)
            }}/>
            <Tab.Screen name="ProfileScreen" component={HomeScreen} 
            options={{tabBarIcon:({focused,color, size})=>(
            <UserIcon 
            color={color}
            size={size}  />)
            }}/>
        </Tab.Navigator>
    )
};

export default BottomNavigator;