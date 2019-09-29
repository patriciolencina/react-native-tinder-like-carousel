import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  containerSafe: {
    height: 44,
    backgroundColor: 'red',
  },
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    height: 44,
    width: '100%',
    paddingHorizontal: 0,
    backgroundColor: 'red',
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
  },
  wrapIcon: {
    flex: 1,
    alignItems: 'center',
  },
  iconActive: {
    borderTopWidth: 3,
    borderColor: 'gray',
  },
  iconInactive: {
    borderTopWidth: 3,
    borderColor: 'blue',
  },
  textStyle: {
    marginTop: 20,
    color: 'gray',
    fontSize: 9,
    textAlign: 'center',
  },
  backgroundView: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: 80,
    backgroundColor: 'gray',
  },
});
