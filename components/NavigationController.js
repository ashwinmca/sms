import { createStackNavigator,createAppContainer } from 'react-navigation';





import LoginView from './LoginView'
import StudentList from './StudentList';
import SignUpView from './SignUpView'
import ForgotPassword from './ForgotPassword'
import AddNewStudent from './AddNewStudent'
import ListofStudents from './ListofStudents'

// import asss_ex from './asss_ex';




 const Navigator = createStackNavigator
(	{

		
	
		
		LoginView:{screen :LoginView},
		StudentList :{screen: StudentList},
		SignUpView : {screen : SignUpView},
		ForgotPassword : {screen : ForgotPassword},
		AddNewStudent :{screen : AddNewStudent},
		ListofStudents :{screen: ListofStudents}

		
		
		


	
	},
	{
    	initialRouteName: 'AddNewStudent',
  	}

);

export default  createAppContainer(Navigator);
