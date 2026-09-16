import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainTxt: {
    paddingTop: 50,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },

  slogan: {
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
  },

  mogHubLogo: {
    height: 350,
    width: 350,
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputFlex: {},

  enterTxt: {
    fontSize: 20,
    paddingBottom: 10,
  },

  userInputTxt: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  radioContainer: {
    flex:0,
    backgroundColor: '#c7f708',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioGroup: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    padding: 15,
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: {
         width: 0,
          height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  radioBtn: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  radioLabel: {
    marginLeft: 5,
    fontSize: 15,
    color: 'black',
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#dd7011',
  },

  petTxt: {
    fontSize: 15,
    marginVertical: 5,
    borderBlockColor: 'black',
    borderBottomWidth: 1,
  },

  petContainer: {
    flex: 5,
    flexDirection: 'column',
  },

});
export default styles;