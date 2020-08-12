import { StyleSheet } from 'react-native';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    textTransform: "uppercase",
    color: "white",
    paddingTop: 30,
    paddingLeft: 30,
  },
  containerLogo: {
    paddingTop: 30,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    alignSelf: 'stretch',
    marginVertical: 5,
    padding: 10,

    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  }
});
