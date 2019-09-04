import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Button,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class StudentList extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Student List',
            headerTitleStyle :{color:'#fff'},
            //headerStyle: {backgroundColor:'#3c3c3c'},
            // headerRight: <Icon style={{ marginLeft:15,color:'#fff' }} name={'pl'} size={25} onPress={() => params.handleSave()} />

            headerRight: (
                <Button
                  onPress={() => params.handleSave()}
                  title="Add New"
                  color="#000"
                />
              ),
              
        };
    };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  description:"Abc.", DOB:"2019-03-25 09:12:00", color:"#228B22", ActiveStatus:1},
        {id:2,  description:"Aenean massa. Cum sociis natoque penatibus et magnis.",     DOB:"2019-03-25 10:23:00", color:"#FF00FF", ActiveStatus:0},
        {id:3,  description:"nascetur ridiculus mus. Donec quam felis, ultricies dnec.", DOB:"2019-03-25 11:45:00", color:"#4B0082", ActiveStatus:1},
        {id:4,  description:"Donec pede justo, fringilla vel, aliquet nec, vulputDOB.", DOB:"2019-03-25 09:27:00", color:"#20B2AA", ActiveStatus:0},
        {id:5,  description:"Nullam dictum felis eu pede mollis pretium. Integer tirr.", DOB:"2019-03-25 08:13:00", color:"#000080", ActiveStatus:0},
        {id:6,  description:"ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas st.", DOB:"2019-03-25 10:22:00", color:"#FF4500", ActiveStatus:1},
        {id:7,  description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", DOB:"2019-03-25 13:33:00", color:"#FF0000", ActiveStatus:0},
        {id:8,  description:"Maecenas nec odio et ante tincidunt tempus. Donec vitae .", DOB:"2019-03-25 11:56:00", color:"#EE82EE", ActiveStatus:0},
        {id:9,  description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", DOB:"2019-03-25 15:00:00", color:"#6A5ACD", ActiveStatus:0},
        {id:10, description:" Aenean imperdiet. Etiam ultricies nisi vel augues aasde.", DOB:"2019-03-25 12:27:00", color:"#DDA0DD", ActiveStatus:0},
      ],
      dataSource:[]
    };
  }
  _saveDetails= (viewId) => {
    this.props.navigation.navigate('AddNewStudent')

    }

  componentDidMount(){
   this.props.navigation.setParams({ handleSave: this._saveDetails });

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
  clickEventListener = (item) => {
    if(item.ActiveStatus == 1) {
        return Alert.alert("Student Active");
      } else {
        return Alert.alert("Student Not Active");
      }

    
  }

  __getActiveStatusIcon = (item) => {
    if(item.ActiveStatus == 1) {
      return "https://img.icons8.com/flat_round/64/000000/checkmark.png";
    } else {
      return "https://img.icons8.com/flat_round/64/000000/delete-sign.png";
    }
  }

  __getDescriptionStyle = (item) => {
    if(item.ActiveStatus == 1) {
      return { fontStyle:'italic', color:"#808080"};
    }
  } 

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={this.state.dataSource}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Text>Student Status</Text>
              <Image style={styles.image} source={{uri: this.__getActiveStatusIcon(item)}}/>
              <View style={styles.cardContent}>
                <Text style={[styles.description, this.__getDescriptionStyle(item)]}>Name:{item.username}</Text>
                <Text style={styles.DOB}>Course:"MCA"</Text>
                <Text style={styles.DOB}>email:{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    // backgroundColor:"#eeeeee"
    backgroundColor: '#00b5ec'
  },
  tasks:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10,
  },
  image:{
    width:25,
    height:25,
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    borderLeftWidth:6,
  },

  description:{
    fontSize:18,
    flex:1,
    color:"#008080",
    fontWeight:'bold',
  },
  DOB:{
    fontSize:14,
    flex:1,
    color:"#696969",
    marginTop:5
  },
}); 