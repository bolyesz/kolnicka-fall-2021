import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Text, Image } from 'react-native';
import api from '../api';
import { PokedexStackParamList } from '../App';
import colors from '../styles/colors';
import { PokemonListItem } from '../types';
import { capitalizeFirstLetter, getPokemonImageById } from '../utils';

type Response = {
  data: {
    pokemon_entries: PokemonListItem[];
  };
};

type Props = NativeStackScreenProps<PokedexStackParamList>;

const PokemonList = ({ navigation }: Props) => {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);

  const fetchPokemonList = async () => {
    const response: Response = await api().get('pokedex/2');

    setPokemonList(response.data.pokemon_entries);
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const handlePress = (id: number) => {
    navigation.navigate('PokemonDetail', {
      id: id,
    });
  };

  const renderItem = ({ item }: ListRenderItemInfo<PokemonListItem>) => {
    return (
      <Pressable
        key={item.entry_number}
        style={styles.listItem}
        onPress={() => handlePress(item.entry_number)}
      >
        <Image
          style={styles.image}
          source={{
            uri: getPokemonImageById(item.entry_number),
          }}
        />
        <Text style={styles.text}>
          {capitalizeFirstLetter(item.pokemon_species.name)}
        </Text>
      </Pressable>
    );
  };

  return <FlatList data={pokemonList} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  image: {
    height: 64,
    width: 64,
    marginRight: 32,
  },
  listItem: {
    paddingVertical: 8,
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.silver,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    color: colors.sanMarino,
  },
});

export default PokemonList;
