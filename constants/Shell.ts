import { StyleSheet } from 'react-native';
import Colors from './Colors';
export default StyleSheet.create({
  shellCon: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light.background,
  },
  headerCon:{
    flex: 0.3,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    backgroundColor: 'rgba(221, 235, 240, 1)',
    height: 48,
  },
  headerTitle:{
    fontSize: 14,
    textAlign: 'center',
  },
  loadingCon: {
    display: 'none',
    bottom: 0,
    flex: 1,
    height: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    right: 0,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  loading: {
    width: 90,
    height: 90,
    opacity: .6,
    margin: 'auto',
    resizeMode: 'center',
    justifyContent: 'center',
  },
  transition:{

  },
  stickyShdow: {
    height: 20,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    shadowColor: 'rgba(0, 0, 0, .5)',
    zIndex: 2,
    // backgroundColor: 'rgba(221, 235, 240, 1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5
  },
  stickyShdowMark: {
    height: 30,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 13
  }
});