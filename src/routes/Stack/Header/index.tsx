import React, {useState} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, SIZES} from '../../../../constants';
import {MENU} from '../../../../constants/theme';
import {Container, Input, SearchBar} from './style';

function Header() {
  const [showedOrHided, setShowedOrHided] = useState(false);

  const move = () => {
    setShowedOrHided(!showedOrHided);
  };

  return (
    <Container>
      {!showedOrHided ? (
        <TouchableOpacity
          style={{marginRight: SIZES.padding}}
          onPress={() => move()}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{
              width: MENU.width,
              height: MENU.height,
            }}
          />
        </TouchableOpacity>
      ) : (
        <SearchBar>
          <TouchableOpacity
            style={{marginRight: SIZES.padding}}
            onPress={() => move()}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: MENU.width,
                height: MENU.height,
              }}
            />
          </TouchableOpacity>
          <Input placeholder="Buscar" />
        </SearchBar>
      )}
    </Container>
  );
}

export default Header;
