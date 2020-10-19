import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs, TransitionPresets, StackCardInterpolationProps, StackCardInterpolatedStyle, CardStyleInterpolators } from '@react-navigation/stack';
import React, { memo } from 'react';
import Colors from '../constants/Colors';
import { Animated, ColorSchemeName, Easing } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import Home from './home';
import Login from '../screens/Login';
import RecordList from '../screens/RecordList';
import Report from '../screens/Report';
import styles from '../constants/Shell';
import I18n from '../i18n/i18n';
import LinkingConfiguration from './LinkingConfiguration';

import { SystemState } from '../store/system/types';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';

interface RootState {
  system: SystemState
}

enum ROUTE_PATH_NAME {
  REPORT = 'report',
  HOME = 'home',
  LIST = 'rec-list'
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const config: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.bezier(0.7, 0, 0, 0.8),
  }
};

/**
 * setting the transition for switching the routes
 * @Sujun
**/
const cardStyleInterpolatorFn = ({ current, next, inverted, layouts }: StackCardInterpolationProps): StackCardInterpolatedStyle => {
  return {
    cardStyle: {
      transform: [
        {
          translateY: next && next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, layouts.screen.height],
          }) || current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          })
        },
      ],
      opacity: next && next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [.8, 1],
      }) || current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [.8, 1],
      }),
    },
  };
};

// If you are not familiar with React Navigation, you can going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const defHeaderSetting = {
    headerStyle: styles.headerCon,
    headerTintColor:  colorScheme && Colors[colorScheme].headerBg || '',
    headerTitleStyle: styles.headerTitle,
  };
  const system = useSelector((state: RootState) => state.system);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} >
      <Stack.Navigator screenOptions={{
        animationEnabled: true,
        ...defHeaderSetting,
        // headerStyle:{
        //   position: 'sticky',
        // },
        gestureDirection: 'vertical-inverted',
        transitionSpec: {
          open: config,
          close: config,
        },
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        cardStyleInterpolator: cardStyleInterpolatorFn
      }}
        headerMode='float'
        mode='modal'>
        {/* {rednerNavigations()} */}
        {
          (!system.openID
            && !(system.readonly && system.routeName)
            || (system.openID && !system.loggedIn))
          && <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{ token: system.keepToken }}
            options={{
              title: I18n.t('login-pge-title')
            }} /> || <></>
        }
        {
          system.lockRoute
          && system.routeName !== ROUTE_PATH_NAME.HOME
          && <></> || <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{ token: system.keepToken }}
            options={{
              title: I18n.t('home-pge-title'),
            }} />
        }
        {
          system.lockRoute
          && system.routeName !== ROUTE_PATH_NAME.LIST
          && <></> || <Stack.Screen
            name="RecordList"
            component={RecordList}
            initialParams={{ token: system.keepToken }}
            options={{
              title: I18n.t('home-pge-title')
            }} />
        }
        {
          system.lockRoute
          && system.routeName !== ROUTE_PATH_NAME.REPORT
          && <></> || <Stack.Screen
            name="Report"
            component={Report}
            initialParams={{ token: system.keepToken }}
            options={{
              title: I18n.t('home-pge-title')
            }} />
        }
        <Stack.Screen name="NotFound" component={NotFoundScreen}/>
      </Stack.Navigator >
    </NavigationContainer >
  );
}

export default memo(Navigation)