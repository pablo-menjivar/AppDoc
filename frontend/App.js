import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
// Pantallas
import HomeScreen from './src/screens/HomeScreen';
import UserListScreen from './src/screens/UserListScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import EditUserScreen from './src/screens/EditUserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4A90E2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Gestión de Usuarios' }}
          />
          <Stack.Screen 
            name="UserList" 
            component={UserListScreen} 
            options={{ title: 'Lista de Usuarios' }}
          />
          <Stack.Screen 
            name="UserDetail" 
            component={UserDetailScreen} 
            options={{ title: 'Detalle de Usuario' }}
          />
          <Stack.Screen 
            name="CreateUser" 
            component={CreateUserScreen} 
            options={{ title: 'Crear Usuario' }}
          />
          <Stack.Screen 
            name="EditUser" 
            component={EditUserScreen} 
            options={{ title: 'Editar Usuario' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}