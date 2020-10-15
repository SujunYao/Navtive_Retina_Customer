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

// If you are not familiar with React Navigation, you can going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const system = useSelector((state: RootState) => state.system);

  const rednerNavigations = () => { };

  return (
    <NavigationContainer
      linking={{
        ...LinkingConfiguration,
        // getPathFromState(state: any, config: any): string {
        //   console.log(state);
        //   console.log(config);
        //   return state.routes[0].name;
        // }
      }}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {rednerNavigations()}
        {(!system.openID
          && !(system.readonly && system.routeName)
          || (system.openID && !system.loggedIn))
          && <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{ token: system.keepToken }}
            options={{
              ...defHeaderSetting,
              title: I18n.t('login-pge-title')
            }} /> || <></>}
        {system.openID
          && system.loggedIn
          && !system.routeName
          && <Stack.Screen
            name="Root"
            component={Home}
            initialParams={{ token: system.keepToken }}
            options={{
              ...defHeaderSetting,
              title: I18n.t('home-pge-title')
            }} /> || <></>}
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(Navigation)