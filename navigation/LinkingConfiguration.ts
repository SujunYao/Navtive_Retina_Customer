import * as Linking from 'expo-linking';
export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    initialRouteName: '',
    screens: {
      Login: 'login',
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
              RecordList: 'rec-list',
              Report: 'report',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  }
};
