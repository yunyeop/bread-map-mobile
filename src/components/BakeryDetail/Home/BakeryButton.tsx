import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '@/styles/theme';
import { resizePixels } from '@/utils';

type Props = {
  icon: React.ReactNode;
  text: string;
};

// active 상태 구현 필요
export const BakeryButton: React.FC<Props> = ({ text, icon }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(
  resizePixels({
    container: {
      backgroundColor: theme.color.gray50,
      paddingVertical: 15,
      width: '31.5%',
      alignItems: 'center',
      borderRadius: 10,
    },
    text: {
      color: theme.color.gray600,
      marginTop: 6,
      fontWeight: 'bold',
    },
  })
);
