import { StyleSheet } from 'react-native';

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
  button: {
    alignSelf: 'stretch',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#2f2f2f',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },
  item: {
    flexDirection: 'row',
  },
  charactersName: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 21,
    paddingLeft: 21,
  },
  photo: {
    width: 80,
    height: 80,
  }
});
