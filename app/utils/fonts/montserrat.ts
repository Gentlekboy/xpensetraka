import {Platform} from 'react-native';

/**
 * Returns montserrat as font family with font weight of 300.
 */
export const montserrat300 =
  Platform.OS === 'android' ? 'montserratLight' : 'Montserrat-Light';

/**
 * Returns montserrat as font family with font weight of 400.
 */
export const montserrat400 =
  Platform.OS === 'android' ? 'montserratRegular' : 'Montserrat-Regular';

/**
 * Returns montserrat as font family with font weight of 500.
 */
export const montserrat500 =
  Platform.OS === 'android' ? 'montserratMedium' : 'Montserrat-Medium';

/**
 * Returns montserrat as font family with font weight of 600.
 */
export const montserrat600 =
  Platform.OS === 'android' ? 'montserratSemiBold' : 'Montserrat-SemiBold';

/**
 * Returns montserrat as font family with font weight of 700.
 */
export const montserrat700 =
  Platform.OS === 'android' ? 'montserratBold' : 'Montserrat-Bold';

/**
 * Returns montserrat as font family with font weight of 800.
 */
export const montserrat800 =
  Platform.OS === 'android' ? 'montserratExtraBold' : 'Montserrat-ExtraBold';
