import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Pokemon } from '../../types';
import { getPokemonImageById } from '../../utils';
import DetailInfoList from './DetailInfoList';
import Stat from './Stat';

type Props = {
  pokemon: Pokemon;
};

const PokemonDetail = ({ pokemon: { abilities, types, id, stats } }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageInfoWrapper}>
        <View>
          <DetailInfoList label="Abilities:">
            {abilities.map((ability) => {
              return (
                <Text key={ability.ability.name}>{ability.ability.name}</Text>
              );
            })}
          </DetailInfoList>
          <DetailInfoList label="Types:">
            {types.map((type) => (
              <Text key={type.type.name}>{type.type.name}</Text>
            ))}
          </DetailInfoList>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: getPokemonImageById(id),
          }}
        />
      </View>

      <DetailInfoList label="Stats">
        {stats.map((stat) => (
          <Stat
            key={stat.stat.name}
            label={stat.stat.name}
            stat={stat.base_stat}
          />
        ))}
      </DetailInfoList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageInfoWrapper: {
    flexDirection: 'row',
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default PokemonDetail;
