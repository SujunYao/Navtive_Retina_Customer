import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MainScreen from '../screens/Main';
import SettingScreen from '../screens/Setting';
import { BottomTabParamList, MainParamList, SettingParamList } from '../types';
import { SystemState } from '../store/system/types';

interface RootState {
  system: SystemState
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function Home() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Main"
        component={TabOneNavigator}
       
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={TabTwoNavigator}
        // initialParams={{ token: system.keepToken }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MainStack = createStackNavigator<MainParamList>();

function TabOneNavigator() {
  const system = useSelector((state: RootState) => state.system);
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        initialParams={{ token: system.keepToken }}
        component={MainScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </MainStack.Navigator>
  );
}

const SettingStack = createStackNavigator<SettingParamList>();

function TabTwoNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </SettingStack.Navigator>
  );
}
