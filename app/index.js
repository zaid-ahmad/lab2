import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#f8f8f8",
                    },
                    headerTintColor: "#000",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: "Todo List" }}
                />
                <Stack.Screen
                    name='About'
                    component={AboutScreen}
                    options={{ title: "About" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
