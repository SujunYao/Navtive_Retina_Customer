
import React from 'react';
import { Button, View, ScrollView, Text, Image, ImageBackground } from 'react-native';
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
  return <ScrollView style={styles.con} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} >
    <View style={styles.stickyShdow}/>
    <View style={styles.bgCon}>
      <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg} />
    </View>
    <View style={styles.headerCon}>
      <Image style={styles.voxelcloudLogo} source={require("../assets/images/logo.svg")} />
      <Text style={styles.title}>{I18n.t('login-title')}</Text>
      <Text style={styles.desc}>{I18n.t('login-desc')}</Text>
      <Button
        title="Go to LIST"
        onPress={() => navigation.navigate('RecordList', { token: '' })}
      />
      <Button
        title="Go to HOME"
        onPress={() => navigation.navigate('Home', { token: '' })}
      />
    </View>
  </ScrollView>
};