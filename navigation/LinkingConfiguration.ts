import * as Linking from 'expo-linking';
export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      Home: {
        screens: {
          Main: {
            screens: {
              MainScreen: 'main',
            },
          },
          Setting: {
            screens: {
              SettingScreen: 'setting',
            },
          },
        },
        navigationOptions: {
          // ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'vertical',
        },
      },
      RecordList: 'rec-list',
      Report: 'report',
      NotFound: '*',
    }
  }
};
