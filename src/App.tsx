import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Pokeball from './assets/icons/Pokeball';
import Home from './screen/Home';
import PokemonDetail from './screen/PokemonDetail';
import PokemonList from './screen/PokemonList';
import colors from './styles/colors';

export type PokedexStackParamList = {
  PokemonList: undefined;
  PokemonDetail: {
    id: number;
  };
};

const AppTab = createBottomTabNavigator();
const PokedexStack = createNativeStackNavigator<PokedexStackParamList>();

const PokedexNavigator = () => {
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen name="PokemonList" component={PokemonList} />
      <PokedexStack.Screen name="PokemonDetail" component={PokemonDetail} />
    </PokedexStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: colors.redRibbon },
          tabBarActiveTintColor: colors.amber,
          tabBarInactiveTintColor: colors.mercury,
        }}
      >
        <AppTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <AppTab.Screen
          name="Pokedex"
          component={PokedexNavigator}
          options={{
            headerTitle: 'Pokédex',
            tabBarLabel: 'Pokédex',
            tabBarIcon: ({ color, size }) => (
              <Pokeball color={color} size={size} />
            ),
          }}
        />
      </AppTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
