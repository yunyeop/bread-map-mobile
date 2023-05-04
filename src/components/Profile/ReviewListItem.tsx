import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { StarIcon } from '@/components/Shared/Icons';
import IcLike from '@/components/Shared/Icons/IcLike.svg';
import IcMapPin from '@/components/Shared/Icons/IcMapPin.svg';
import { SplitColumn, SplitRow } from '@/components/Shared/SplitSpace';
import { Text } from '@/components/Shared/Text';
import { theme } from '@/styles/theme';
import { resizePixels } from '@/utils';
import { ReviewListItemInImageItem } from './ReviewListItemInImageItem';

export function ReviewListItem({ item, onItemClick }: any) {
  return (
    <TouchableOpacity onPress={() => onItemClick(item)}>
      <Text presets={['body1', 'bold']} style={styles.Name}>
        {item?.bakeryInfo?.bakeryName}
      </Text>
      <View style={styles.Location}>
        <IcMapPin />
        <Text numberOfLines={1} style={styles.LocationText} presets={['caption1', 'medium']}>
          {item?.bakeryInfo?.bakeryAddress}
        </Text>
      </View>
      <FlatList
        style={{ marginTop: 12 }}
        contentContainerStyle={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        data={item?.reviewInfo?.productRatingList}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={1} style={styles.MenuInfoWrap}>
              <>
                <Text presets={['caption1', 'bold']} style={styles.MenuInfoText}>
                  {item?.productName}
                </Text>
                <SplitColumn width={4} />
                <StarIcon size={10.5} fillColor="orange" />
                <SplitColumn width={1.5} />
                <Text style={styles.RatingText}>{(+item?.rating).toFixed(1)}</Text>
              </>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />

      <SplitRow height={12} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.ContentContainer}>
        {item?.reviewInfo?.imageList.map((image: any, index: number) => {
          return <ReviewListItemInImageItem url={image} key={index} />;
        })}
      </ScrollView>
      <SplitRow height={12} />
      <View style={styles.Content}>
        <MoreInfo linesToTruncate={2} text={item?.reviewInfo?.content} />
      </View>
      <SplitRow height={12} />
      <View style={styles.ReviewTimeWrap}>
        <IcLike />
        <Text style={styles.ReviewTimeText}> {item?.reviewInfo?.likeNum}</Text>
        <SplitColumn width={4} />
        {/* <IcComment />
        <Text style={styles.ReviewTimeText}> {item?.userInfo?.reviewNum}</Text> */}
        <View style={styles.ReviewTimeWrapRight}>
          <Text style={styles.ReviewTimeText}>{item?.reviewInfo?.createdAt}</Text>
          <SplitColumn width={2} />
          {/* <IcMore color="#BDBDBD" /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const MoreLessComponent = ({ truncatedText }: { truncatedText: string }) => {
  return (
    <Text style={styles.ContentText}>
      {`${truncatedText}...`}
      <TouchableOpacity>
        <Text style={styles.MoreText}>{'더 보기'}</Text>
      </TouchableOpacity>
    </Text>
  );
};
const MoreInfo = ({ text, linesToTruncate }: { text: string; linesToTruncate: number }) => {
  const [clippedText, setClippedText] = React.useState('');
  const [lineLength, setLineLength] = React.useState(0);
  return clippedText && lineLength > linesToTruncate ? (
    <MoreLessComponent truncatedText={clippedText} />
  ) : (
    <Text
      numberOfLines={linesToTruncate}
      ellipsizeMode={'tail'}
      onTextLayout={event => {
        const { lines } = event.nativeEvent;
        setLineLength(lines.length);
        let lineText = lines
          .splice(0, linesToTruncate)
          .map(line => line.text)
          .join('');
        setClippedText(lineText.substring(0, lineText.length - 10));
      }}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create(
  resizePixels({
    Name: {
      color: theme.color.gray900,
      marginLeft: 20,
      marginTop: 6,
    },
    Location: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 2,
    },
    LocationText: {
      color: theme.color.gray500,
      marginRight: 20,
    },
    MenuInfoWrap: {
      height: 24,
      backgroundColor: theme.color.gray100,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
    MenuInfoText: {
      color: theme.color.gray600,
    },
    RatingText: {
      color: theme.color.primary500,
      fontSize: 12,
      fontWeight: '700',
    },
    Content: {
      marginHorizontal: 20,
    },
    ContentContainer: {
      paddingHorizontal: 20,
    },
    ContentText: {
      color: '#616161',
      fontSize: 14,
    },
    MoreText: {
      color: theme.color.gray500,
      top: 2,
      left: 2,
      fontSize: 13,
    },
    ReviewTimeWrap: {
      width: 320,
      height: 34,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    ReviewTimeWrapRight: {
      marginLeft: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
    },
    ReviewTimeText: {
      color: '#666666',
    },
  })
);