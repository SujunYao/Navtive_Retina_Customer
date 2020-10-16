
export type RootStackParamList = {
  Home: { token: string };
  Login: { token: string };
  RecordList: { token: string };
  Report: { token: string };
  NotFound: undefined;
};

export type BottomTabParamList = {
  Main: { token: string };
  Setting: { token: string };
};

export type MainParamList = {
  MainScreen: { token: string };
};

export type SettingParamList = {
  SettingScreen: { token: string };
};
