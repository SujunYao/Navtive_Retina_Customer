
import React from 'react';
import { View, Text, Image } from 'react-native';
import I18n from '../i18n/i18n';
import styles from '../constants/login';

export default function Login() {
  return <View>
    <Image style={styles.voxelcloudLogo} source={require("../constants/images/logo.svg")} />
    <Text>{I18n.t('login-title')}</Text>
  </View>;
};