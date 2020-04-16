import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  display: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffc300',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  value: {
    color: '#ffffff',
    fontFamily: 'roboto-mono-medium',
    fontSize: 72,
    paddingTop: 100,
    paddingHorizontal: 18,
  },

  keyboard: {
    width: '100%',
    height: 540,
    backgroundColor: '#f7f8fa',
    paddingTop: 18,
    paddingBottom: 34,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
  },
});
