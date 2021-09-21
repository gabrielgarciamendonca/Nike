import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export enum COLORS {
  black = '#1E1F20',
  white = '#FFFFFF',
  lightGray = '#ABAFB8',
  gray = '#BEC1D2',
}

export enum MENU {
  width = 25,
  height = 25,
}

export enum SIZES {
  base = 8,
  font = 14,
  radius = Dimensions.get('window').width / 40,
  padding = Dimensions.get('window').width / 22,
  height_content = Dimensions.get('window').width * 0.2,

  // font sizes
  navTitle = 25,
  h1 = Dimensions.get('window').width / 14,
  h2 = Dimensions.get('window').width / 16,
  h3 = Dimensions.get('window').width / 24,
  h4 = Dimensions.get('window').width / 25,
  h5 = Dimensions.get('window').width / 30,
  body1 = Dimensions.get('window').width / 24,
  body2 = Dimensions.get('window').width / 29,
  body3 = Dimensions.get('window').width / 30,
  body4 = Dimensions.get('window').width / 35,
  body5 = Dimensions.get('window').width / 38,

  // app dimensions
  widthWindow = Dimensions.get('window').width,
  heightWindow = Dimensions.get('window').height,
}

export const FONTS = {
  navTitle: {fontFamily: 'CarmenSans-Thin', fontSize: SIZES.navTitle},
  largeTitleBold: {fontFamily: 'CarmenSans-SemiBold', fontSize: SIZES.h2},
  h1: {
    fontFamily: 'CarmenSans-SemiBold',
    fontSize: SIZES.h1,
    lineHeight: Dimensions.get('window').width / 35,
  },
  h2: {
    fontFamily: 'CarmenSans-SemiBold',
    fontSize: SIZES.h2,
    lineHeight: Dimensions.get('window').width / 30,
  },
  h3: {
    fontFamily: 'CarmenSans-SemiBold',
    fontSize: SIZES.h3,
    lineHeight: Dimensions.get('window').width / 20,
  },
  h4: {
    fontFamily: 'CarmenSans-SemiBold',
    fontSize: SIZES.h4,
    lineHeight: Dimensions.get('window').width / 20,
  },
  h5: {
    fontFamily: 'CarmenSans-SemiBold',
    fontSize: SIZES.h5,
    lineHeight: Dimensions.get('window').width / 20,
  },
  body1: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body1,
    lineHeight: Dimensions.get('window').width / 40,
  },
  body2: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body2,
    lineHeight: Dimensions.get('window').width / 35,
  },
  body3: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body3,
    lineHeight: Dimensions.get('window').width / 30,
  },
  body4: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body4,
    lineHeight: Dimensions.get('window').width / 25,
  },
  body5: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body5,
    lineHeight: Dimensions.get('window').width / 20,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
