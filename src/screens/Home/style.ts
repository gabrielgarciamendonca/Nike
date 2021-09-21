import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';
import {COLORS, FONTS, SIZES} from '../../../constants';

interface ItemSmallShowProps {
  marginLeft: number;
}

interface ItemDataContainerProps {
  backgroundColor: string;
}

interface SVGContainerProps {
  position: string;
  top: number;
  right: number;
  width: number;
  height: number;
}

interface BlurContentProps {
  backgroundColor: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
  width: 100%;
`;

export const Title = styled.Text`
  margin-top: ${SIZES.radius}px;
  margin-left: ${SIZES.padding}px;
  margin-right: ${SIZES.padding}px;
  font-size: ${FONTS.largeTitleBold.fontSize}px;
`;

export const ListContainer = styled.View`
  height: ${SIZES.heightWindow * 0.35}px;
  margin-top: ${SIZES.radius}px;
  background-color: transparent;
`;

export const List = styled.FlatList``;

export const ArrowList = styled.FlatList`
  background-color: transparent;
`;

export const ListArrowContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: ${SIZES.padding}px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: transparent;
`;

export const ListArrowContent = styled.ScrollView`
  flex: 1;
  padding-bottom: ${SIZES.padding}px;
  background-color: transparent;
`;

export const ItemArrowShowContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: transparent;
`;

export const ItemSmallShow = styled.TouchableOpacity<ItemSmallShowProps>`
  width: ${SIZES.widthWindow * 0.38}px;
  justify-content: center;
  margin-right: ${SIZES.widthWindow * 0.05}px;
  margin-left: ${props => props.marginLeft}px;
  margin-bottom: 30px;
`;

export const ItemTitle = styled.Text`
  font-size: ${FONTS.h5.fontSize}px;
  font-family: ${FONTS.h5.fontFamily};
  line-height: ${FONTS.h5.lineHeight}px;
  color: ${COLORS.gray};
`;

export const ItemDataContainer = styled.View<ItemDataContainerProps>`
  flex: 1;
  justify-content: flex-end;
  margin-top: ${SIZES.base}px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 50px;
  margin-right: ${SIZES.padding}px;
  padding-left: ${SIZES.radius}px;
  padding-right: ${SIZES.padding}px;
  padding-bottom: ${SIZES.radius}px;
  background-color: ${props => props.backgroundColor};
  ${Platform.OS === 'ios'
    ? css`
    shadow-color: #000,
    shadow-radius: 4.65,
    shadow-offset: {
    height: 4,
    width: 0,
    },
    shadow-opacity: 10
  `
    : css`
        box-shadow: 1px 1px #000;
        elevation: 16;
      `}
`;

export const ItemDataContent = styled.View`
  height: 37%;
  justify-content: space-between;
`;

export const ItemDataText = styled.Text`
  color: ${COLORS.white};
  font-family: ${FONTS.body4.fontFamily};
  font-size: ${FONTS.body4.fontSize}px;
  line-height: ${FONTS.body4.lineHeight}px;
`;

export const ImageContainer = styled.Image`
  position: absolute;
  top: 50px;
  right: 0px;
  width: ${SIZES.widthWindow * 0.24}%;
  height: ${SIZES.heightWindow * 0.09}px;
  transform: rotate(-15deg);
  ${Platform.OS === 'android' &&
  css`
    elevation: 30;
  `}
`;

export const SVGContainer = styled.View<SVGContainerProps>`
  position: ${props => props.position};
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  ${Platform.OS === 'android' &&
  css`
    elevation: 25;
  `}
`;

export const ImageRecentlyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageRecently = styled.Image`
  width: 100px;
  height: 80px;
`;

export const ImageLabelContainer = styled.View`
  width: 70px;
  margin-left: ${SIZES.base}px;
  background-color: transparent;
`;

export const ImageLabelContent = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ItemDescriptionContainer = styled.View`
  flex: 1.5;
  margin-left: ${SIZES.radius}px;
  justify-content: center;
`;

export const ItemDescriptionContainerText = styled.Text`
  color: ${COLORS.gray};
  font-family: ${FONTS.body3.fontFamily};
  font-size: ${FONTS.body3.fontSize}px;
  line-height: ${FONTS.body3.lineHeight}px;
`;

export const BlurContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000b;
`;

export const CloseModalButton = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  margin-top: ${SIZES.base}px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CloseModalButtonText = styled.Text`
  color: ${COLORS.white};
  font-size: ${FONTS.largeTitleBold.fontSize}px;
  font-family: ${FONTS.largeTitleBold.fontFamily};
`;

export const BlurContent = styled.View<BlurContentProps>`
  justify-content: center;
  width: 80%;
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
`;

export const ImageModalContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${-SIZES.padding * 2}px;
`;

export const ImageModal = styled.Image`
  width: 80%;
  height: 150px;
  transform: rotate(-15deg);
`;

export const ListWrapper = styled.View`
  width: 100%;
`;

export const TitleModalText = styled.Text`
  margin-top: ${SIZES.padding}px;
  margin-left: ${SIZES.padding}px;
  margin-right: ${SIZES.padding}px;
  color: ${COLORS.white};
  font-family: ${FONTS.body2.fontFamily};
  font-size: ${FONTS.body2.fontSize}px;
  line-height: ${FONTS.body2.lineHeight}px;
`;

export const DescriptionModalText = styled.Text`
  margin-top: ${SIZES.base / 2}px;
  margin-left: ${SIZES.padding}px;
  margin-right: ${SIZES.padding}px;
  color: ${COLORS.white};
  font-family: ${FONTS.body3.fontFamily};
  font-size: ${FONTS.body3.fontSize}px;
  line-height: ${FONTS.body3.lineHeight}px;
`;

export const PriceModalText = styled.Text`
  margin-top: ${SIZES.radius}px;
  margin-left: ${SIZES.padding}px;
  margin-right: ${SIZES.padding}px;
  color: ${COLORS.white};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h2.fontSize}px;
  line-height: 30px;
`;
