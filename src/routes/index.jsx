import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../pages/Onboarding'
import StartScreen from '../pages/StartScreen'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'
import Tabs from './tabs'



const Stack = createNativeStackNavigator()

export default function Routes () {
  return (
  <Stack.Navigator initialRouteName='StartScreen'>
    <Stack.Screen
    name='Onboarding'
    component={Onboarding}
    options={{ headerShown: false }}
    />
    <Stack.Screen
    name='StartScreen'
    component={StartScreen}
    options={{ headerShown: false }}
    />
    <Stack.Screen
    name='LoginScreen'
    component={LoginScreen}
    options={{ headerShown: false }}
    />
    <Stack.Screen
    name='HomeScreen'
    component={Tabs}
    options={{ headerShown: false }}
    />
    <Stack.Screen
    name='RegisterScreen'
    component={RegisterScreen}
    options={{ headerShown: false }}
    />

  </Stack.Navigator>
  )
}