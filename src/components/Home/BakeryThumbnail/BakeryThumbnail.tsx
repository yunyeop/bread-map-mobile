import React, { memo, useState } from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';
import { resizePixel } from '@/utils';

import defaultThumbnail from '@shared/Images/thumbnail.png';

type Props = {
  source?: ImageProps['source'];
};

export const BakeryThumbnail: React.FC<Props> = memo(({ source = defaultThumbnail }) => {
  const [imgSource, setImgSource] = useState<ImageProps['source']>(source);

  const onError = () => {
    setImgSource(defaultThumbnail);
  };

  return (
    <View style={styles.wrapper}>
      <Image source={imgSource} onError={onError} style={styles.image} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: resizePixel(108),
    height: resizePixel(108),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: resizePixel(15),
  },
});
