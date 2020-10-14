import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import { ColorSchemeName } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import Home from './home';
import Login from '../screens/Login';
import styles from '../constants/Shell';
import I18n from '../i18n/i18n';
import LinkingConfiguration from './LinkingConfiguration';

import { SystemState } from '../store/system/types';

interface RootState {
  system: SystemState
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
const defHeaderSetting = {
  headerStyle: styles.headerCon,
  headerTintColor: 'rgba(99, 125, 129, 1)',
  headerTitleStyle: styles.headerTitle
};

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{
        ...defHeaderSetting,
        title: I18n.t('login-pge-title')
      }} />
      <Stack.Screen name="Root" component={Home} options={{
        ...defHeaderSetting,
        title: I18n.t('home-pge-title')
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
    </Stack.Navigator>
  );
}


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const system = useSelector((state: RootState) => state.system);
  const Linking = {...LinkingConfiguration};
  if(!system.openID){
    Linking.config.initialRouteName = 'Login';
  }else if(system.lockRoute && system.tgtRoutName){
    Linking.config.initialRouteName = system.tgtRoutName;
  }else if(system.loggedIn){
    Linking.config.initialRouteName = 'Home';
  }
  console.log(Linking);
  return (
    <NavigationContainer
      linking={Linking}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default memo(Navigation)