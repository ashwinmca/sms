//Example to Refresh Previous Screen When Going Back in React Navigation//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, Text, TextInput  } from 'react-native';
//import all the components we are going to use.
import { Image } from 'react-native'

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0,
        text: 'Useless Multiline Placeholder',
    
    };
    //Settin up an interval for the counter
    this.t = setInterval(() => {
        
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  static navigationOptions = {
    title: 'First Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  componentDidMount() {
    //Here is the Trick
    const { navigation } = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({ count: 0 });
    });
  }
 
  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
    clearTimeout(this.t);
  }
 
  render() {
    const { navigate } = this.props.navigation;
    return (
        

      <View style={styles.container}>
         
          {/* <Text style={{ textAlign: 'center', fontSize: 18, margin: 16 }}>
          {'Hello I am counter ' + this.state.count}
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 18, margin: 16 }}>
          You are on SecondPage
        </Text> */}

        <Image style={styles.imgcontainer} source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 300, height: 300}} />
        
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>

        {/* <Button title="Go next" onPress={() => navigate('SecondPage')} /> */}

        <Button title="Submit" onPress={() => navigate('ThirdPage')} />
        <Button title="Signup" onPress={() => navigate('SignUp')} />


        {/* <div>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>

            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
   </div>  */}


      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgcontainer: {
    flex: 1,
    paddingTop: 10,
    margin:20,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});