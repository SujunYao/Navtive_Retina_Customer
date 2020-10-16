import { StyleSheet } from 'react-native';
import Colors from './Colors';
export default StyleSheet.create({
  con: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
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
    textAlign:"center",
    color: Colors.light.primaryColor,
  },
  desc:{
    fontSize: 12,
    fontFamily: 'Noto Sans CJK TC',
    margin: 'auto',
    textAlign: 'center',
    marginTop: 3,
    lineHeight: 18,
    color: '#9B9B9B'
  }
});