import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs, TransitionPresets, StackCardInterpolationProps, StackCardInterpolatedStyle, CardStyleInterpolators } from '@react-navigation/stack';
import React, { memo } from 'react';
import { ColorSchemeName } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

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
const defHeaderSetting = {
  headerStyle: styles.headerCon,
  headerTintColor: 'rgba(99, 125, 129, 1)',
  headerTitleStyle: styles.headerTitle
};

// If you are not familiar with React Navigation, you can going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const system = useSelector((state: RootState) => state.system);

  // // const rednerNavigations = () => { };
  // const test: Object = {
  //   gestureDirection: 'horizontal',
  //   transitionSpec: {
  //     open: TransitionSpecs.TransitionIOSSpec,
  //     close: TransitionSpecs.TransitionIOSSpec,
  //   },
  //   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  //   // ...TransitionPresets.ModalSlideFromBottomIOS,
  //   cardStyleInterpolator: ({ current, next, layouts }: StackCardInterpolationProps): StackCardInterpolatedStyle => {
  //     return {
  //       cardStyle: {
  //         transform: [
  //           {
  //             time: '200ms',
  //             translateY: current.progress.interpolate({
  //               inputRange: [0, 1],
  //               outputRange: [-layouts.screen.height, 0],
  //             }),
  //           },
  //           // {
  //           //   rotate: current.progress.interpolate({
  //           //     inputRange: [0, 1],
  //           //     outputRange: [1, 0],
  //           //   }),
  //           // },
  //           {
  //             scale: next
  //               ? next.progress.interpolate({
  //                 inputRange: [0, 1],
  //                 outputRange: [1, 0.9],
  //               })
  //               : 1,
  //           },
  //         ],
  //       },
  //       overlayStyle: {
  //         opacity: current.progress.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [0, -layouts.screen.height],
  //         }),
  //       },
  //     }
  //   }
  // };

  const config: TransitionSpec = {
    animation: 'timing',
    config: {
      duration: 200,
      // delay: 200
    },
  };
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} >
      <Stack.Navigator screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureDirection: 'vertical',
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        cardStyleInterpolator: ({ current, next, layouts }: StackCardInterpolationProps): StackCardInterpolatedStyle => {
          console.log(next);
          return {
            cardStyle: {
              'transition-duration': '2000ms',
              'transition-timing-function': 'cubic-bezier(0.7, 0, 0, 0.8)',
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, .9, 1],
                    outputRange: next && [0, -layouts.screen.height] || [-layouts.screen.height, 0],
                  }),
                },
              ],
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1],
              }),
            },
            overlayStyle: {
              'transition-duration': '2000ms',
              'transition-timing-function': 'cubic-bezier(0.7, 0, 0, 0.8)',
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-layouts.screen.height, 0] //: [0, -layouts.screen.height],
                  }),
                }
              ],
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1],
              }),
            },
          };
        }
      }}
        mode="modal">
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{ token: system.keepToken }}
          options={{
            ...defHeaderSetting,
            title: I18n.t('login-pge-title')
          }} />
        <Stack.Screen
          name="RecordList"
          component={RecordList}
          initialParams={{ token: system.keepToken }}
          // animationTypeForReplace="pop"
          options={{
            ...defHeaderSetting,
            title: I18n.t('home-pge-title')
          }} />
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ token: system.keepToken }}
          options={{
            ...defHeaderSetting,
            title: I18n.t('home-pge-title'),
            // transitionSpec: {
            //   open: {
            //     animation: 'spring',
            //     config: {
            //       stiffness: 1000,
            //       damping: 500,
            //       mass: 3,
            //       overshootClamping: true,
            //       restDisplacementThreshold: 0.01,
            //       restSpeedThreshold: 0.01,
            //     }
            //   },
            //   close: {
            //     animation: 'spring',
            //     config: {
            //       stiffness: 1000,
            //       damping: 500,
            //       mass: 3,
            //       overshootClamping: true,
            //       restDisplacementThreshold: 0.01,
            //       restSpeedThreshold: 0.01,
            //     }
            //   }
            // }
          }} />
        {/* {rednerNavigations()} */}
        {/* {
          (!system.openID
            && !(system.readonly && system.routeName)
            || (system.openID && !system.loggedIn))
          && <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{ token: system.keepToken }}
            options={{
              ...defHeaderSetting,
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
              ...defHeaderSetting,
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
            // animationTypeForReplace="pop"
            options={{
              ...defHeaderSetting,
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
              ...defHeaderSetting,
              title: I18n.t('home-pge-title')
            }} />
        } */}
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator >
    </NavigationContainer >
  );
}

export default memo(Navigation)