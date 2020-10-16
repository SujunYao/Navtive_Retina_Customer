
import React from 'react';
import { Button, View, Text, Image, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

import I18n from '../i18n/i18n';
import styles from '../constants/login';

export default function Login({ navigation }: Props) {
  return <View style={styles.con}>
    <View style={styles.bgCon}>
      <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg} />
    </View>
    <View style={styles.headerCon}>
      <Image style={styles.voxelcloudLogo} source={require("../assets/images/logo.svg")} />
      <Text style={styles.title}>{I18n.t('login-title')}</Text>
      <Text style={styles.desc}>{I18n.t('login-desc')}</Text>
      <Button
        title="Go to HOME"
        onPress={() => navigation.navigate('RecordList', { token: '' })}
      />
    </View>
  </View>;
};