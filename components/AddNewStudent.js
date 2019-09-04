import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';



export default class AddNewStudent extends Component {

   

  constructor(props) {
    super(props);
    state = {
      fullName: '',
      DOB   : '',
      Age: '',
      Education: '',
      Special: '',
      Add: '',
      State: '',
      Pin: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Date of Birth"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(DOB) => this.setState({DOB})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Age"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(Age) => this.setState({Age})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Latest Education"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(Education) => this.setState({Education})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Specialization"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(Special) => this.setState({Special})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Address"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(Add) => this.setState({Add})}/>
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="State"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(State) => this.setState({State})}/>
        </View>
        
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Pincode"
              
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(Pin) => this.setState({Pin})}/>
        </View>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('Submit')}>
          <Text style={styles.signUpText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      width:280,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#8935e8",
  },
  signUpText: {
    color: 'white',
  }
});