import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ImageCloseIcon: React.FC<SvgProps> = props => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill="#424242"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.9655 6.16647C11.2779 5.85405 11.2779 5.34752 10.9655 5.0351C10.6531 4.72268 10.1465 4.72268 9.83412 5.0351L7.9998 6.86941L6.16549 5.0351C5.85307 4.72268 5.34654 4.72268 5.03412 5.0351C4.7217 5.34752 4.7217 5.85405 5.03412 6.16647L6.86843 8.00078L5.03412 9.8351C4.7217 10.1475 4.7217 10.654 5.03412 10.9665C5.34654 11.2789 5.85307 11.2789 6.16549 10.9665L7.9998 9.13215L9.83412 10.9665C10.1465 11.2789 10.6531 11.2789 10.9655 10.9665C11.2779 10.654 11.2779 10.1475 10.9655 9.8351L9.13118 8.00078L10.9655 6.16647Z"
      fill="white"
    />
  </Svg>
);

export { ImageCloseIcon };
