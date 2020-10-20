import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';
const screen = Dimensions.get("screen");
export default StyleSheet.create({
  con: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    // top: -20,
    // paddingTop: 20,
    bottom: 0,
    // position: 'relative',
    // overflow: 'scroll',
  },

  bgCon: {
    bottom: 0,
    flex: 1,
    height: '130%',
    left: 0,
    position: 'absolute',
    right: 0,
    width: '100%',
  },
  bg: {
    flex: 1,
  },

  headerCon: {
  },

  voxelcloudLogo: {
    margin: 'auto',
    marginTop: 15,
    width: 107,
    height: 18,
  },

  title: {
    fontSize: 34,
    fontFamily: 'Noto Sans CJK TC',
    margin: 'auto',
    marginTop: 7,
    textAlign: "center",
    color: Colors.light.primaryColor,
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Noto Sans CJK TC',
    margin: 'auto',
    textAlign: 'center',
    marginTop: 3,
    lineHeight: 18,
    color: '#9B9B9B'
  },

  msgTitle: {
    color: 'rgba(255, 152, 0, 1)',
    fontSize: 34,
    marginTop: 33,
    fontFamily: 'Noto Sans CJK TC',
    margin: 'auto',
    textAlign: "center",
  },

  msgDesc: {
    fontSize: 12,
    fontFamily: 'Noto Sans CJK TC',
    margin: 'auto',
    textAlign: 'center',
    marginTop: 3,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.54)',
  },

  mainCon: {
    minHeight: screen.height - 68,
  },

  mobileInpFocus: {
    outlineWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
    marginLeft: 8,
    marginRight: 8,
    lineHeight: 48,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    backgroundClip: 'padding-box',
    borderRadius: 4,
    fontSize: 14,
    border: 0,
    letterSpacing: 0,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: '0 1.33rem 2.11rem 0.16rem rgba(0, 0, 0, 0.1), 0 0.5rem 2.55rem 0.44rem rgba(0, 0, 0, 0.09), 0 0.61rem 0.83rem 0 rgba(0, 0, 0, 0.16)',
  },

  mobileInpNormal: {
    outlineWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
    marginLeft: 8,
    marginRight: 8,
    lineHeight: 48,
    backgroundColor: 'rgba(69, 79, 91, 1)',
    backgroundClip: 'padding-box',
    // boxShadow: '0 0.44rem 0.55rem 0.055rem rgba(0, 0, 0, 0.1), 0 0.166rem 0.77rem 0.166rem rgba(0, 0, 0, 0.09), 0 0.22rem 0.27rem 0 rgba(0, 0, 0, 0.16)',
    borderRadius: 4,
    fontSize: 14,
    letterSpacing: 0,
    color: 'rgba(255, 255, 255, 0.3)'
  },

  actionCon: {
    marginTop: 30,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  switchLoginModeBtn: {
    paddingLeft: 8,
    fontSize: 16,
    color: 'rgba(35, 178, 190, 1)',
    lineHeight: 36,
    letterSpacing: 0
  },

  sendVRCodeBtn: {
    backgroundColor: 'rgba(35, 178, 190, 1)',
    height: 36,
    lineHeight: 36,
    borderRadius: 4,
    backgroundClip: 'padding-box',
    paddingLeft: 16,
    paddingRight: 16,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 0,
  },

  sendVrCodeBtnDisabled: {
    backgroundColor: 'rgba(236, 239, 241, 1)',
    height: 36,
    lineHeight: 36,
    borderRadius: 4,
    backgroundClip: 'padding-box',
    paddingLeft: 16,
    paddingRight: 16,
    color: 'rgba(0, 0, 0, 0.26)',
    letterSpacing: 0,
  },

  clearValBtn: {
    position: 'absolute',
    width: 46,
    textAlign: "center",
    height: 48,
    lineHeight: 48,
    paddingTop: 17,
    top: 0,
    right: 8,
    textAlignVertical: 'center',
    zIndex: 5
  },

  hideValBtn: {
    position: 'absolute',
    width: 46,
    textAlign: "center",
    height: 48,
    lineHeight: 48,
    paddingTop: 17,
    top: 0,
    right: 8,
    textAlignVertical: 'center',
    zIndex: 5
  },

  inpConFocus: {
    // boxShadow: '0 1.33rem 2.11rem 0.16rem rgba(0, 0, 0, 0.1), 0 0.5rem 2.55rem 0.44rem rgba(0, 0, 0, 0.09), 0 0.61rem 0.83rem 0 rgba(0, 0, 0, 0.16)',
  },

  inpCon: {
    width: '100%',
    position: 'relative',
    marginTop: 65,
    height: 48,
    // boxShadow: '0 0.44rem 0.55rem 0.055rem rgba(0, 0, 0, 0.1), 0 0.166rem 0.77rem 0.166rem rgba(0, 0, 0, 0.09), 0 0.22rem 0.27rem 0 rgba(0, 0, 0, 0.16)',
  },

  vrCodeInp: {
    outlineWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
    marginLeft: 8,
    marginRight: 8,
    lineHeight: 48,
    backgroundColor: 'rgba(69, 79, 91, 1)',
    backgroundClip: 'padding-box',
    boxShadow: '0 0.44rem 0.55rem 0.055rem rgba(0, 0, 0, 0.1), 0 0.166rem 0.77rem 0.166rem rgba(0, 0, 0, 0.09), 0 0.22rem 0.27rem 0 rgba(0, 0, 0, 0.16)',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    fontSize: 14,
    letterSpacing: 0,
    color: 'rgba(255, 255, 255, 0.3)'
  },
  inpVRCodeCon: {},
});