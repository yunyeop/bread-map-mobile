import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { theme } from '@/styles/theme';
import { BreadRating } from '../Rating';

type MenuProps = {
  name: string;
  price: number;
  rating: number;
  reviewNum: number;
  image?: string | null;
};

const tempImage = 'https://cdn.paris.spl.li/wp-content/uploads/까방베르-치즈-후레쉬번_썸네일1-1280x1280.png';

const Menu: React.FC<MenuProps> = ({ name, price, rating, reviewNum, image }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <BreadRating type={'menu'} rating={rating} reviewLength={reviewNum} />
      <Text style={styles.price}>{price.toLocaleString()}원</Text>
    </View>
    {/* {image ? <Image style={styles.image} source={{ uri: image }} /> : <View style={styles.image} />} */}
    <Image style={styles.image} source={{ uri: tempImage }} />
  </View>
);
export default Menu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: theme.color.black,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 16,
    color: theme.color.primary500,
  },
});

export { Menu };
