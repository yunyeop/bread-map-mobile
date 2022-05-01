import * as React from 'react';
import Svg, { Path, SvgProps, Mask } from 'react-native-svg';

//TODO: ZoomOutIcon? SearchIcon?
export const FlagIcon: React.FC<SvgProps> = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M4.37939 3.50269V21.5027" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <Mask id="path-2-inside-1_2232_335493" fill="white">
      <Path d="M3.39966 3.66185C3.39966 2.67789 4.4577 2.06609 5.35259 2.47517C7.46782 3.44211 8.97256 3.56551 12.321 3.56551C15.2965 3.56551 16.4521 3.16925 17.986 2.61995C19.1873 2.18975 20.3997 3.09499 20.3997 4.371V13.1121C20.3997 13.902 20.0464 14.6684 19.3473 15.0361C17.7571 15.8726 15.3956 16.4608 12.321 16.4608C9.02181 16.4608 6.56058 16.0962 4.43473 15.0217C3.76936 14.6854 3.39966 13.9755 3.39966 13.23V3.66185Z" />
    </Mask>
    <Path
      d="M12.321 3.56551V5.81551V3.56551ZM18.1497 4.371V13.1121H22.6497V4.371H18.1497ZM5.64966 13.23V3.66185H1.14966V13.23H5.64966ZM4.41715 4.5215C6.99381 5.69937 8.90759 5.81551 12.321 5.81551V1.31551C9.03754 1.31551 7.94182 1.18484 6.28802 0.428843L4.41715 4.5215ZM12.321 5.81551C15.6186 5.81551 17.0353 5.35032 18.7446 4.73822L17.2274 0.501674C15.8689 0.988186 14.9744 1.31551 12.321 1.31551V5.81551ZM18.2998 13.0448C17.1119 13.6697 15.1322 14.2108 12.321 14.2108V18.7108C15.6591 18.7108 18.4024 18.0756 20.3948 17.0274L18.2998 13.0448ZM12.321 14.2108C9.16068 14.2108 7.11365 13.8547 5.44969 13.0137L3.41977 17.0298C6.0075 18.3378 8.88294 18.7108 12.321 18.7108V14.2108ZM1.14966 13.23C1.14966 14.6797 1.87605 16.2496 3.41977 17.0298L5.44969 13.0137C5.54603 13.0624 5.60377 13.1318 5.62954 13.1777C5.652 13.2177 5.64966 13.236 5.64966 13.23H1.14966ZM18.1497 13.1121C18.1497 13.1429 18.1461 13.167 18.1424 13.1828C18.1388 13.1986 18.1363 13.2003 18.1414 13.1905C18.1468 13.1802 18.161 13.1565 18.1893 13.1273C18.2185 13.0971 18.2563 13.0677 18.2998 13.0448L20.3948 17.0274C22.0152 16.175 22.6497 14.5099 22.6497 13.1121H18.1497ZM22.6497 4.371C22.6497 1.63678 19.9859 -0.486156 17.2274 0.501674L18.7446 4.73822C18.6892 4.75806 18.6095 4.76927 18.5214 4.75546C18.4379 4.74237 18.3675 4.7102 18.3137 4.67073C18.2037 4.59018 18.1497 4.46888 18.1497 4.371H22.6497ZM5.64966 3.66185C5.64966 4.03814 5.42964 4.33721 5.19433 4.47777C4.97267 4.61017 4.68104 4.64213 4.41715 4.5215L6.28802 0.428843C4.0691 -0.585496 1.14966 0.860524 1.14966 3.66185H5.64966Z"
      fill="#222222"
      mask="url(#path-2-inside-1_2232_335493)"
    />
  </Svg>
);
