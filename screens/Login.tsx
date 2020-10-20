
import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, ScrollView, Text, Image, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import ShellStyles from '../constants/Shell';
import Icon from '../components/Icons';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

import I18n from '../i18n/i18n';
import Styles from '../constants/login';

enum INVALID_STATES {
  INP_MOBILE_INVALID = 'INP_MOBILE_INVALID',
  INP_VR_CODE_INVALID = 'INP_VR_CODE_INVALID',
  REQ_VR_CODE_FAILED = 'REQ_VR_CODE_FAILED',
  NO_SET_PWD = 'NO_SET_PWD',
  NO_REGISTER = 'NO_REGISTER',
  INP_PWD_INVALID = 'INP_PWD_INVALID',
}

const MSGS: { [key: string]: { [key: string]: string } } = {
  INP_MOBILE_INVALID: {
    TITLE: 'login-title-invalid-phone-num',
    DESC: 'login-desc-invalid-phone-num'
  },
  INP_VR_CODE_INVALID: {
    TITLE: 'login-title-ver-code-err',
    DESC: 'login-desc-ver-code-err'
  },
  REQ_VR_CODE_FAILED: {
    TITLE: 'login-title-ver-code-send-err',
    DESC: 'login-desc-ver-code-err'
  },
  NO_SET_PWD: {
    TITLE: 'login-title-no-set-pwd',
    DESC: 'login-desc-no-set-pwd'
  },
  NO_REGISTER: {
    TITLE: 'login-title-no-register',
    DESC: 'login-desc-no-register',
  },
  INP_PWD_INVALID: {
    TITLE: 'login-title-pwd-invalid',
    DESC: 'login-desc-pwd-invalid',
  }
}

export default function Login({ navigation }: Props) {
  const [mobile, setMobile] = useState('');
  const [inpFocus, setInpFocus] = useState(false);
  const [inpInvalid, setInpInvalid] = useState(false);
  const [stateCode, setStateCode] = useState('');
  const [showSecondLine, setShowSecondLine] = useState(false);
  const inpMobile = (mobile: string) => {
    setInpInvalid(!mobile.startsWith('1') || mobile.length !== 11);
    setMobile(mobile);
  };
  return <ScrollView
    style={Styles.con}
    stickyHeaderIndices={[0]}
    showsVerticalScrollIndicator={false} >
    <View style={ShellStyles.stickyShdow} />
    <View style={ShellStyles.stickyShdowMark} />
    <View style={Styles.mainCon}>
      <View style={Styles.bgCon}>
        <ImageBackground source={require("../assets/images/bg.png")} style={Styles.bg} />
      </View>
      <View style={Styles.headerCon}>
        {!stateCode && <Image style={Styles.voxelcloudLogo} source={require("../assets/images/logo.svg")} />}
        {stateCode && MSGS[stateCode] && <Text style={Styles.msgTitle}>{I18n.t(MSGS[stateCode].TITLE)}</Text> || <Text style={Styles.title}>{I18n.t('login-title')}</Text>}
        {stateCode && MSGS[stateCode] && <Text style={Styles.msgDesc}>{I18n.t(MSGS[stateCode].DESC)}</Text> || <Text style={Styles.desc}>{I18n.t('login-desc')}</Text>}
        <View style={Styles.inpCon}>
          <TextInput
            underlineColorAndroid='transparent'
            style={inpFocus && Styles.mobileInpFocus || Styles.mobileInpNormal}
            onChangeText={text => inpMobile(text)} value={mobile}
            placeholder={I18n.t('login-ph-mobile')}
            onFocus={() => setInpFocus(true)}
            onBlur={() => setInpFocus(false)}
            placeholderTextColor='rgba(255, 255, 255, 0.3)' />
          {mobile
            && <TouchableOpacity
              style={inpFocus && Styles.clearValBtn || Styles.hideValBtn}
              onPress={() => setMobile('')}
            >
              <Icon name='ic_close_24px' size={14} color="rgba(0, 0, 0, 0.54)" />
            </TouchableOpacity>}
          <TextInput
            underlineColorAndroid='transparent'
            style={Styles.vrCodeInp}
            placeholder={I18n.t('login-ph-vr-code')} />
        </View>
        {/* <View style={Styles.inpVRCodeCon}>
      
        </View> */}
        <View style={Styles.actionCon}>
          <Text
            style={Styles.switchLoginModeBtn}
            accessibilityRole='button'
          >
            {I18n.t('login-btn-switch-to-pwd-mode')}
          </Text>
          <Text
            style={(inpInvalid || !mobile) && Styles.sendVrCodeBtnDisabled || Styles.sendVRCodeBtn}
            onPress={() => navigation.navigate('RecordList', { token: '' })}
          >{I18n.t('login-btn-send-vr-code')}</Text>
        </View>

        {/* <Button
          title="Go to LIST"
          onPress={() => navigation.navigate('RecordList', { token: '' })}
        />
        <Button
          title="Go to HOME"
          onPress={() => navigation.navigate('Home', { token: '' })}
        /> */}
      </View>
    </View>
  </ScrollView>
};