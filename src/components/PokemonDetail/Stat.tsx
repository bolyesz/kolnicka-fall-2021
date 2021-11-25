import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pokeball from '../../assets/icons/Pokeball';
import colors from '../../styles/colors';

const MAX_STAT_LEVEL = 10;
const MAX_STAT_VALUE = 255;

type Props = {
  label: string;
  stat: number;
};

const Stat = ({ stat, label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.stat}>
        <Text style={styles.value}>{stat}</Text>
        <View style={styles.indicator}>
          {[...Array(MAX_STAT_LEVEL).keys()].map((index) => {
            const isFilled =
              index < Math.ceil(stat / (MAX_STAT_VALUE / MAX_STAT_LEVEL));

            const color = isFilled ? colors.sanMarino : colors.silver;

            return <Pokeball key={index} size={16} color={color} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  indicator: {
    flex: 1,
    flexDirection: 'row',
  },
  value: {
    marginRight: 16,
  },
  label: {
    flex: 1,
  },
  stat: {
    flex: 2,
    flexDirection: 'row',
  },
});

export default Stat;
