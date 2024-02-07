import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from "./src/screens/Home";
import  SeeTask  from "./src/screens/SeeTasks";

import  TaskProvider from "./src/context/TaskContext";

type RootStackParamList = {
  Home: undefined;
  SeeTasks: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <TaskProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="SeeTasks" component={SeeTask} options={{ headerShown: false }} />
        </Stack.Navigator>
      </TaskProvider>
    </NavigationContainer>
  );
}

