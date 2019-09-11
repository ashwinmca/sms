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
  ScrollView,
 
  Alert
} from 'react-native';


export default class SignUpView extends Component {

   

  constructor(props) {
    super(props);
    this.state = {date:new Date().getDate()},
    this.state = {
      ExecutiveID:'',
      PatientName: '',
      RefDoctorName : '',
      RefDonctorPhone: '',
      Speciality: '',
      FromLocation: '',
      IPNO: '',
      UnderDoctorName: '',
      Tolocaion: ''
     
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
    
    if (this.state.ExecutiveID != '') {
      if (this.state.PatientName!= '') {
        if (this.state.RefDoctorName!= '') {
          if (this.state.FromLocation!= '') {

            
             //GET request 
      fetch(`http://125.16.159.87:8029/service1.asmx/ExecutiveSMS?Executive=${this.state.ExecutiveID}&PatientName=${this.state.PatientName}&ReferalDoctor=${this.state.RefDoctorName}&ReferalDoctorPhno=${this.state.RefDonctorPhone}&Speciality=${this.state.Speciality}&FromLocation=${this.state.FromLocation}&IPNO=${this.state.IPNO}&UnderDoctor=${this.state.UnderDoctorName}&ToLocation=${this.state.Tolocaion}`, {
        method: 'GET'
        //Request Type 
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        
        dataSource = responseJson;
        //alert(JSON.stringify(dataSource[0].STATUS))
        
        
        console.log(responseJson);
        
        if(dataSource[0].message == "success")
        {
          // this.state.email='';
          //       this.state.password='';
          this.props.navigation.navigate('LoginView');
          alert(JSON.stringify(dataSource[0].message));

        }
        else
        {
          alert(JSON.stringify(dataSource[0].STATUS));

        }
        

    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });

         
          } else {
            alert('Please Enter From Location');
          }
        } else {
          alert('Please Enter Referal DoctorName');
        }
      } else {
        alert('Please Enter Patient Name');
      }
    }
    else{
      alert('Please Enter ExecutiveID');
    }
  };


  render() {
    return (
      

      
      <View style={styles.container}>
        <ScrollView    contentContainerStyle={styles.contentContainer}>
          

          
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="ExecutiveID*"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(ExecutiveID) => this.setState({ExecutiveID})}/>
        </View>
       
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Patient Name*"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(PatientName) => this.setState({PatientName})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Referal Doctor Name*"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(RefDoctorName) => this.setState({RefDoctorName})}/>
        </View>

      


        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Referal Doctor Phone Number"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(RefDonctorPhone) => this.setState({RefDonctorPhone})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Speciality/Treatment"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(Speciality) => this.setState({Speciality})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="From Location*"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(FromLocation) => this.setState({FromLocation})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="IPNO"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(IPNO) => this.setState({IPNO})}/>
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Under Doctor Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(UnderDoctorName) => this.setState({UnderDoctorName})}/>
        </View>
        
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="To Locaion"
              
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(Tolocaion) => this.setState({Tolocaion})}/>
        </View>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.register_user()}>
          <Text style={styles.signUpText}>SEND</Text>
        </TouchableHighlight>
        
        </ScrollView>
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
    
    marginBottom:0,
    
  },
  contentContainer: {
    paddingVertical: 20
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
    width:280,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#8935e8",
  },
  signUpText: {
    color: 'white',
  }
});