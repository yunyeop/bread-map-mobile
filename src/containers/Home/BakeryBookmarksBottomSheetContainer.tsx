import React from 'react';

import { BakeryBookmarksBottomSheet } from '@/components/Home/BakeryBookmarksBottomSheet';

import { HomeStackScreenProps } from '@/router/types';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CircleFlag, HeartIcon } from '@shared/Icons';

export type TabItem = 'distance' | 'popularity';

export const BakeryBookmarkBottomSheetContainer: React.VFC = () => {
  const { push, goBack } = useNavigation<HomeStackScreenProps<'BookmarkBottomSheet'>['navigation']>();
  const {
    params: { bakeryId, name },
  } = useRoute<HomeStackScreenProps<'BookmarkBottomSheet'>['route']>();

  const onClose = () => {
    goBack();
  };

  const onPressNewBookmark = () => {
    if (bakeryId) {
      push('Bookmark', { bakeryId, name });
      // onClose();
    }
  };

  const list = [
    { id: 1, icon: CircleFlag, text: '가고싶어요', isSelect: true },
    { id: 2, icon: HeartIcon, text: '가봤어요', isSelect: false },
  ];

  return (
    <BakeryBookmarksBottomSheet
      list={list}
      bakery={{ id: bakeryId, name }}
      onPressNewBookmark={onPressNewBookmark}
      onClose={onClose}
      onSave={() => {}}
    />
  );
};
