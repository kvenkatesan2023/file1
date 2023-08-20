//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Trip from './Trip';
import Profile from './Profile';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,MaterialCommunityIcons,Ionicons} from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator   screenOptions={{
         initialRouteName :'Profile',
          headerStyle: { backgroundColor: 'orange' },
          headerTintColor: '#221c30',
          contentStyle: { backgroundColor: '#221c30'},
          
         tabBarInactiveTintColor:'black',
        tabBarIndicatorStyle:{
            backgroundColor:'black'
        },
        tabBarLabelStyle:{
            fontWeight:'bold',

        },
        tabBarStyle:{
            backgroundColor:'white'
        }

    }}>
        
      <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon:({color})=>(
             <Entypo name="home" size={20} color={color}/>
            )
         }} />
      <Tab.Screen name="Trip" component={Trip} options={{
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name="face-man-profile" size={20} color={color}/>
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name="face-man-profile" size={20} color={color}/>
        )
      }}  />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;