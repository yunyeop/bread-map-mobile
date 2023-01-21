import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { resizePixels } from '@/utils';
import { HeartIcon } from '../Shared/Icons';
import IcFlag from '../Shared/Icons/IcFlag.svg';
import { Text } from '../Shared/Text';
import { FlagColors } from './ProfileComponent';
import { SaveListItemImages } from './SaveListItemImages';

export function SaveListItem({ item, onItemClick }: any) {
  const color =
    item?.color === 'ORANGE'
      ? FlagColors.ORANGE
      : item?.color === 'GREEN'
      ? FlagColors.GREEN
      : item?.color === 'YELLOW'
      ? FlagColors.YELLOW
      : item?.color === 'CYAN'
      ? FlagColors.CYAN
      : item?.color === 'BLUE'
      ? FlagColors.BLUE
      : item?.color === 'SKY'
      ? FlagColors.SKY
      : item?.color === 'NAVY'
      ? FlagColors.NAVY
      : item?.color === 'PURPLE'
      ? FlagColors.PURPLE
      : item?.color === 'RED'
      ? FlagColors.RED
      : FlagColors.PINK;

  return (
    <TouchableOpacity onPress={onItemClick(item)} style={styles.Container}>
      <SaveListItemImages num={item?.flagImageList.length} images={item?.flagImageList} />
      <View style={styles.Info}>
        <View style={[styles.IconBackground, { backgroundColor: color }]}>
          {item?.name !== '가봤어요' ? <HeartIcon width={18} /> : <IcFlag width={12} />}
        </View>
        <Text style={styles.Text} presets={['caption1', 'bold']}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create(
  resizePixels({
    Container: {
      width: 153,
      height: 142,
    },
    Image: {
      width: 152,
      height: 116,
    },
    Text: {
      color: 'black',
      marginLeft: 4,
    },
    Info: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    IconBackground: {
      width: 16,
      height: 16,
      borderRadius: 99,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
