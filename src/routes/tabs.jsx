/* eslint-disable no-unused-vars */
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import HomeScreen from "../pages/HomeScreen"
import CalendarScreen from "../pages/CalendarScreen"
import FocuseScreen from "../pages/FocuseScreen"
import ProfileScreen from "../pages/ProfileScreen"
import NewScreen from "../pages/NewScreen"
import { Ionicons,AntDesign, FontAwesome  } from '@expo/vector-icons';
import ButtonNew from "../components/buttonNew";

const Tab = createBottomTabNavigator()


export default function Tabs () {
  return (
  <Tab.Navigator
  screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarShowLabel:false,

        tabBarStyle: {
          backgroundColor: '#363636',
          height: 75,
          borderTopColor: 'transparent',
        }
      }}
  >
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            { focused ? (
              <Ionicons
                name="ios-home"
                size={24}
                color={focused ? '#ffffff' : '#f8f8f8'}
              />
            ) : (
              <Ionicons
                name="ios-home-outline"
                size={24}
                color={focused ? '#a6a3a3' : '#a6a3a3'}
              />
            )}
          </View>
        ),
      }}
    />
    <Tab.Screen
    name="Calendar"
    component={CalendarScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            { focused ? (
              <Ionicons
                name="ios-calendar"
                size={24}
                color={focused ? '#ffffff' : '#f8f8f8'}
              />
            ) : (
              <Ionicons
                name="ios-calendar-outline"
                size={24}
                color={focused ? '#a6a3a3' : '#a6a3a3'}
              />
            )}
          </View>
        ),
      }}
    />

<Tab.Screen
        name="New"
        component={NewScreen}
        options={{
          headerShown: false,
          tabBarButton: props => (
           <ButtonNew />
          )
        }}
      />

    <Tab.Screen
    name="Focuse"
    component={FocuseScreen}
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <View>
          { focused ? (
            <Ionicons
              name="ios-time"
              size={24}
              color={focused ? '#ffffff' : '#f8f8f8'}
            />
          ) : (
            <Ionicons
              name="ios-time-outline"
              size={24}
              color={focused ? '#a6a3a3' : '#a6a3a3'}
            />
          )}
        </View>
      ),
    }}
    />
    <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <View>
          { focused ? (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? '#ffffff' : '#f8f8f8'}
            />
          ) : (
            <AntDesign
              name="user"
              size={24}
              color={focused ? '#a6a3a3' : '#a6a3a3'}
            />
          )}
        </View>
      ),
    }}
  
    />


  </Tab.Navigator>
  )
}


