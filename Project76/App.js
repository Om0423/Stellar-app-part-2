import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPics from "./DailyPic";
import SpaceCrafts from "./SpaceCrafts";
import StarMap from './StarMap';

function App(){
    return(
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Home" screenOptions={{
             headerShown:false
           }}>
               <Stack.Screen name = "Home" component={HomeScreen}/>
               <Stack.Screen name = "SpaceCrafts" component={SpaceCraftsScreen}/>
               <Stack.Screen name = "DailyPic" component={DailyPicsScreen}/>
               <Stack.Screen name = "StarMap" component={StarMapScreen}/>
           </Stack.Navigator>
        </NavigationContainer>
    );
}