import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from '../screens/HomePage';
import DetailPage from '../screens/DetailPage';
import BasketPage from "../screens/BasketPage";
import { selectOnboarding } from "../redux/onboarding";
import { useSelector } from "react-redux";


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
              
                        <>
                            <Stack.Screen name="HomePage" component={HomePage} />
                            <Stack.Screen name="DetailPage" component={DetailPage} />
                            <Stack.Screen name="BasketPage" component={BasketPage} />
                            
                        </>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;