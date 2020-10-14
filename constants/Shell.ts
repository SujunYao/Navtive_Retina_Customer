import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  shellCon: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerCon:{
    flex: 0.3,
    // borderWidth: 5,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    backgroundColor: 'rgba(221, 235, 240, 1)',
    // color: 'rgba(99, 125, 129, 1)',
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
  }
});