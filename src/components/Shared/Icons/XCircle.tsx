import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const XCircle: React.FC<SvgProps> = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM14.9657 9.03431C15.2781 9.34673 15.2781 9.85327 14.9657 10.1657L13.1314 12L14.9657 13.8343C15.2781 14.1467 15.2781 14.6533 14.9657 14.9657C14.6533 15.2781 14.1467 15.2781 13.8343 14.9657L12 13.1314L10.1657 14.9657C9.85327 15.2781 9.34673 15.2781 9.03431 14.9657C8.7219 14.6533 8.7219 14.1467 9.03431 13.8343L10.8686 12L9.03431 10.1657C8.7219 9.85327 8.7219 9.34673 9.03431 9.03431C9.34673 8.7219 9.85327 8.7219 10.1657 9.03431L12 10.8686L13.8343 9.03431C14.1467 8.7219 14.6533 8.7219 14.9657 9.03431Z"
      fill="#BDBDBD"
    />
  </Svg>
);
