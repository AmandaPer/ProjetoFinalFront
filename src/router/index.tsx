import React from "react";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { Home } from "../screens/home";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Usuario } from "../screens/cadastro/usuario";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootTabParamList ={
    Home: undefined;
    Usuario: {id: string};
}

const Tab = createBottomTabNavigator<RootTabParamList>()

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary: 'blue',
        backround: 'white',
    }
}

export const Routes = ()=>{
    return(
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({color})=> (
                            <MaterialCommunityIcons name="home" color={color} size={26}/>),
                        title: ''
                    }}
                />
                <Tab.Screen
                    listeners={({navigation})=>({
                        focus:()=>{
                            navigation.setParams({id: undefined})
                        }
                   })}
                    name="Usuario"
                    component={Usuario}
                    options={{
                        tabBarIcon: ({color})=> (
                            <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26}/>),
                        title: ''
                    }}
                />
            </Tab.Navigator>
            
        </NavigationContainer>


    )
}