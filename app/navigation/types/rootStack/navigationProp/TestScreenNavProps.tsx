import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStackParamList';

export type TestScreenNavProps = NativeStackScreenProps<
  RootStackParamList,
  'TestScreen'
>;
