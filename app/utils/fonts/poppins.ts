import {Platform} from 'react-native';

/**
 * Returns Poppins as font family with font weight of 300.
 */
export const poppins300 =
  Platform.OS === 'android' ? 'poppinsLight' : 'Poppins-Light';

/**
 * Returns Poppins as font family with font weight of 400.
 */
export const poppins400 =
  Platform.OS === 'android' ? 'poppinsRegular' : 'Poppins-Regular';

/**
 * Returns Poppins as font family with font weight of 500.
 */
export const poppins500 =
  Platform.OS === 'android' ? 'poppinsMedium' : 'Poppins-Medium';

/**
 * Returns Poppins as font family with font weight of 600.
 */
export const poppins600 =
  Platform.OS === 'android' ? 'poppinsSemiBold' : 'Poppins-SemiBold';

/**
 * Returns Poppins as font family with font weight of 700.
 */
export const poppins700 =
  Platform.OS === 'android' ? 'poppinsBold' : 'Poppins-Bold';

/**
 * Returns Poppins as font family with font weight of 800.
 */
export const poppins800 =
  Platform.OS === 'android' ? 'poppinsExtraBold' : 'Poppins-ExtraBold';
