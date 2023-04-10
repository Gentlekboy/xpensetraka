declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  //const content: React.FC<SvgProps>;
  //Changed import of .svg from React.FC<SvgProps> to React.ElementType<SvgProps> in order to allow passing of svgs as props to components
  const content: React.ElementType<SvgProps>;
  export default content;
}
