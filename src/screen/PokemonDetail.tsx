import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import api from '../api';
import { PokedexStackParamList } from '../App';
import { Pokemon } from '../types';
import PokemonDetailComponent from '../components/PokemonDetail/PokemonDetail';
import { SafeAreaView } from 'react-native-safe-area-context';

type Response = {
  data: Pokemon;
};

type Props = NativeStackScreenProps<PokedexStackParamList, 'PokemonDetail'>;

const PokemonDetail = ({ route }: Props) => {
  const { params } = route;
  const { id } = params;

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      const response: Response = await api().get(`pokemon/${id}`);

      setPokemon(response.data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <PokemonDetailComponent pokemon={pokemon} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default PokemonDetail;
