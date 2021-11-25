import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  children: ReactNode;
};

const DetailInfoList = ({ label, children }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailInfoList;
