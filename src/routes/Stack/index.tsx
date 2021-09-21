import {useNavigation} from '@react-navigation/core';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/routers';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';
import {MENU} from '../../../constants/theme';
import Home from '../../screens/Home';
import Header from './Header';

export type StackProps = {
  Home: {itemId: string};
};

const {Navigator, Screen} = createDrawerNavigator<StackProps>();

function Stack() {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Navigator initialRouteName="Home">
      <Screen
        options={{
          title: 'SHOE SELECTOR',
          headerTintColor: COLORS.lightGray,
          headerTitleAlign: 'center',
          drawerHideStatusBarOnOpen: false,
          headerTitleStyle: {
            ...FONTS.navTitle,
            fontSize: SIZES.navTitle,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
              onPress={() => openDrawer()}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{
                  width: MENU.width,
                  height: MENU.height,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => <Header />,
        }}
        name="Home"
        component={Home}
        initialParams={{itemId: 't-01'}}
      />
    </Navigator>
  );
}

export default Stack;
