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
  
import NetInfo from "@react-native-community/netinfo";


export default class LoginView extends Component {
    static navigationOptions = {
        header: null,
     };
  constructor(props) {
    super(props);
 
    this.state = {
      email   : '',
      password: '',
      connection_Status : "",
      dataSource:[],
      STATUS:''
    }
  }
  
  

  onClickListener = (viewId) => {
    this.props.navigation.navigate('ListofStudents')
    
   // Alert.alert("Alert", "Button pressed "+viewId);
  }
  
  CheckConnectivity = () => {
    // For Android devices viewId
    if (Platform.OS === "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          //Alert.alert("You are onlinessss!");
          this.getDataUsingGet();
          
    
          
        } else {
          Alert.alert("Please check your internet connection!");
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };

  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
      Alert.alert("You are offline!");
    } else {
      Alert.alert("You are online!");
      if(this.state.dataSource.STATUS="success")
      
      {
        this.props.navigation.navigate('ListofStudents')
      }


      //http://125.16.159.87/Iostest6/sample.asmx/Testselect?uname=100320&pwd=apollo
    }
  };
            CheckTextInput = () => {
              //Handler for the Submit onPress
              if (this.state.email != '') {
                //Check for the Name TextInput
                if (this.state.password != '') {
                  //Check for the Email TextInput
                  //alert('Success')
                  
                 this.CheckConnectivity();
                } else {
                  alert('Please Enter Password');
                }
              } else {
                alert('Please Enter ExecutiveID');
              }
            };

     getDataUsingGet(){
       
      //GET request 
      fetch(`http://125.16.159.87/Iostest6/sample.asmx/Testselect?uname=${this.state.email}&pwd=${this.state.password}`, {
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
          
          if(dataSource[0].STATUS == "success")
          {
            // this.state.email='';
            //       this.state.password='';
            this.props.navigation.navigate('SignUpView');

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
    }

    

  render() {
    return (
      

      <View style={styles.container}>
        <View >
          <Image style={styles.logoContainer} source={require('../img/logo.png')}/>
        
        </View>

        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/64/000000/email.png'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Enter Execitive ID"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
             
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Enter Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.CheckTextInput('login')}>
          <Text style={styles.loginText}>Login</Text>
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
    //backgroundColor: '#DCDCDC',
    backgroundColor: '#00b5ec',
  },
  logoContainer: {
    
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:250,
    // marginTop:40,
     marginBottom:50,
    flexDirection: 'column',
    alignItems:'center'
},
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:20,
      alignItems:'center',
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
  loginButton: {
    backgroundColor: "#8935e8",
  },
  loginText: {
    color: 'white',
  }
});