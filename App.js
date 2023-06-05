
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen  from "./app/View/Home";
import AboutScreen  from "./app/View/About";
import RegistrationScreen from "./app/View/Register";
import LoginScreen from "./app/View/Login";
import GlobalHeader from "./app/View/Header";
import BlogDetail  from "./app/View/BlogDetails";
import Blog from "./app/View/Blog";
// import Quiz  from "./app/View/Quize";
// import QuizeFinish from "./app/View/QuizeFinish";

const stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator 
    initialRouteName="Home"
    >
    
    <stack.Screen 
      name='Home'
      component={HomeScreen}
      options={{title :'globalMan'}}>
      </stack.Screen>


    <stack.Screen 
      name='Login'
      component={LoginScreen}
      options={{headerShown :false}}>
      </stack.Screen>

      <stack.Screen 
      name='Register'
      component={RegistrationScreen}
      options={{headerShown :false}}>
      </stack.Screen>

    <stack.Screen 
      name='About'
      component={AboutScreen}
      options={{title :'About Us'}}>
      </stack.Screen>

      <stack.Screen 
      name='Blog'
      component={Blog}
      options={{title :'About Us'}}>
      </stack.Screen>

      <stack.Screen 
      name='Header'
      component={GlobalHeader}
      options={{header : ()=> <GlobalHeader/>}}>
      </stack.Screen>

      

      <stack.Screen 
      name='BlogDetail'
      component={BlogDetail}>
      </stack.Screen> 

      {/* <stack.Screen 
      name='Quiz'
      component={Quiz}
      options={{title :''}}>
      </stack.Screen> */}

      {/* <stack.Screen 
      name='QuizFinish'
      component={QuizeFinish}
      options={{headerShown : false}}>
      </stack.Screen> */}

    </stack.Navigator>
  </NavigationContainer>
  );
}
