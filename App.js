// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  EditorScreen  from './src/screens/EditorScreen';
import { Provider } from 'react-redux';
import store from './src/store';


const Stack = createNativeStackNavigator();

const EditorStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Editor" component={EditorScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return(
    <NavigationContainer>
      <EditorStack />
    </NavigationContainer>
  );
};


function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
