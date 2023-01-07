import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Discover from './components/Discover';
import ItemScreen from './components/ItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Discover' component={Discover} />
        <Stack.Screen name='ItemScreen' component={ItemScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );}
