import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
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

import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'student_db.db', createFromLocation : 1});


export default class SignUpView extends Component {

   

  constructor(props) {
    super(props);
    this.state = {date:new Date().getDate()},
    state = {
      fullName: '',
      DOB   : '',
      Age: '',
      Education: '',
      Special: '',
      Add: '',
      State: '',
      Pin: '',
      DateText: '',
 
      DateHolder: null,
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  onDatePickedFunction = (date) => {
    this.setState({
      
      date: moment(date).format('DD-MMM-YYYY')
    });
  }

  register_user = () => {
    var that = this;

    const {fullName}= this.state;
    
    const {Age}= this.state;
    const {Education}= this.state;
    const {Special}= this.state;
    const {Add}= this.state;
    const {State}= this.state;
    const {Pin}= this.state;
    const {date}= this.state;

    

      if (fullName) {
        if (Age) {
          if (Education) {
            db.transaction(function(tx) {
              tx.executeSql(
                'INSERT INTO tbl_student (fullname, DOB, age,LastEducation,Specialization,address,state,pin) VALUES (?,?,?,?,?,?,?,?)',
      ["abc", "1-1-2000", "67","bsc","mca","add","state","4566"],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'You are Registered Successfully',
                      [
                        {
                          text: 'Ok',
                          onPress: () =>
                            that.props.navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('Registration Failed');
                  }
                }
              );
            });
          } else {
            alert('Please fill Address');
          }
        } else {
          alert('Please fill Contact Number');
        }
      } else {
        alert('Please fill Name');
      }
  };


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

        {/* <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Date of Birth"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(DOB) => this.setState({DOB})}/>
        </View> */}

        <View style={styles.inputContainer}>
          <Text>DOB</Text>
 
        <DatePicker
          style={{width: 280}}
          date={this.state.date} //initial date from state
          //date=moment(date).format('DD-MMM-YYYY')
          

          mode="date" //The enum of date, datetime and time
          placeholder="select DOB"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          
          maxDate={this.state.date}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              borderWidth:0,
              justifyContent: 'center',
    alignItems: 'center',
              marginLeft: 15
            }
          }}
         
          onDateChange={(date) => {this.setState({date: date})}}
        />
 
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
        

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.register_user.bind(this)}>
          <Text style={styles.signUpText}>Sign up</Text>
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
      borderRadius:30,
      borderBottomWidth: 1,
      width:280,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  datecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16
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