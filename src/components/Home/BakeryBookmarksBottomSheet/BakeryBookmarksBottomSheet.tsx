import React, { useCallback, useEffect, useRef } from 'react';
import { FlatList, Pressable, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { SvgProps } from 'react-native-svg';

import { resizePixels } from '@/utils';

import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';

import { Text } from '@shared/Text';

import { Footer } from './Footer';
import { Header } from './Header';
import { StoreListHeader } from './StoreListHeader';

type List = {
  id: number;
  icon: React.FC<SvgProps>;
  text: string;
};

type Props = Pick<BottomSheetProps, 'onChange'> & {
  list: Array<List>;
  bakery?: { id: number; name: string } | null;
  onPressNewBookmark: () => void;
  selectBookmarkId?: number;
  onClose: () => void;
  onClick: (id: number) => void;
  onSave: () => void;
};

const snapPoints = ['40%'];

type RenderItemProps = {
  item: List;
  isSelected: boolean;
  onClick: (id: number) => void;
};

const RenderItem: React.FC<RenderItemProps> = ({ item, isSelected, onClick }) => {
  return (
    <Pressable onPress={() => onClick(item.id)}>
      <View style={styles.itemContainer}>
        <View style={styles.iconWrapper}>
          <item.icon width={32} height={32} />
        </View>
        <Text presets={['body1', 'bold']}>{item.text}</Text>
        <View style={styles.checkboxWrapper}>{isSelected ? <Text>Selected</Text> : <Text> unSelect</Text>}</View>
      </View>
    </Pressable>
  );
};

export const BakeryBookmarksBottomSheet: React.FC<Props> = React.memo(
  ({ bakery, list, onPressNewBookmark, selectBookmarkId, onClose, onClick, onSave }) => {
    const bakeryName = bakery?.name || '';

    const bakeryRef = useRef<BottomSheet>(null);

    const onCloseBottomSheet = () => {
      bakeryRef.current?.close();
    };

    const ListHeaderComponent = useCallback(
      () => <StoreListHeader onPress={onPressNewBookmark} />,
      [onPressNewBookmark]
    );

    useEffect(() => {
      if (bakery) {
        bakeryRef.current?.expand();
      }
    }, [bakery]);

    return (
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onCloseBottomSheet}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <BottomSheet snapPoints={snapPoints} ref={bakeryRef} onClose={onClose} style={styles.bottomSheetContainer}>
          <View>
            <Header name={bakeryName} />
            <FlatList
              data={list}
              renderItem={({ item }) => (
                <RenderItem item={item} isSelected={item.id === selectBookmarkId} onClick={onClick} />
              )}
              ListHeaderComponent={ListHeaderComponent}
            />
            <Footer onClose={onCloseBottomSheet} onSave={onSave} />
          </View>
        </BottomSheet>
      </View>
    );
  }
);

const styles = StyleSheet.create(
  resizePixels({
    overlay: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    background: {
      flex: 1,
    },
    bottomSheetContainer: {
      paddingHorizontal: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
    },
    iconWrapper: {
      marginRight: 12,
    },
    checkboxWrapper: {
      marginLeft: 'auto',
    },
  })
);
