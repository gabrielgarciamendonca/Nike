import React, {useState} from 'react';
import {Dimensions, ImageSourcePropType, ScrollView, Modal} from 'react-native';
import {images, SIZES} from '../../../constants';
import {trendingData, recentlyViewedData} from '../../services/data';

import {
  ArrowList,
  BlurContainer,
  BlurContent,
  CloseModalButton,
  CloseModalButtonText,
  Container,
  DescriptionModalText,
  ImageContainer,
  ImageLabelContainer,
  ImageLabelContent,
  ImageModal,
  ImageModalContainer,
  ImageRecently,
  ImageRecentlyContainer,
  ItemArrowShowContainer,
  ItemDataContainer,
  ItemDataContent,
  ItemDataText,
  ItemDescriptionContainer,
  ItemDescriptionContainerText,
  ItemSmallShow,
  ItemTitle,
  List,
  ListArrowContainer,
  ListArrowContent,
  ListContainer,
  PriceModalText,
  Title,
  TitleModalText,
} from './style';

interface TrendingProps {
  id: number;
  name: string;
  img: string;
  bgColor: string;
  type: string;
  price: string;
  sizes: number[];
}

function Home() {
  const [selectedItem, setSelectedItem] = useState<TrendingProps>();
  const [showAddToBagModal, setShowAddToBagModal] = useState(false);

  // Dummy Data
  const [trending] = React.useState<TrendingProps[]>(() => trendingData);

  const [recentlyViewed] = React.useState<TrendingProps[]>(
    () => recentlyViewedData,
  );

  const renderThrendingShoes = ({item, index}: any) => {
    const typedItem = item as TrendingProps;
    var trendingStyle = {marginLeft: 0};
    if (index === 0) {
      trendingStyle.marginLeft = SIZES.padding;
    }
    return (
      <ItemSmallShow
        marginLeft={trendingStyle.marginLeft}
        onPress={() => {
          setSelectedItem(typedItem);
          setShowAddToBagModal(true);
        }}>
        <ItemTitle>{typedItem.type}</ItemTitle>
        <ItemDataContainer backgroundColor={typedItem.bgColor}>
          <ItemDataContent>
            <ItemDataText>{typedItem.name}</ItemDataText>
            <ItemDataText>{typedItem.price}</ItemDataText>
          </ItemDataContent>
        </ItemDataContainer>

        <ImageContainer
          source={typedItem.img as ImageSourcePropType}
          resizeMode="cover"
          height={Dimensions.get('window').height * 0.09}
        />
      </ItemSmallShow>
    );
  };

  const renderRecentlyViewed = ({item}: any) => {
    const typedItem = item as TrendingProps;

    return (
      <ItemArrowShowContainer
        onPress={() => {
          setSelectedItem(typedItem);
          setShowAddToBagModal(true);
        }}>
        <ImageRecentlyContainer>
          <ImageRecently
            source={typedItem.img as ImageSourcePropType}
            resizeMode="contain"
          />
        </ImageRecentlyContainer>
        <ItemDescriptionContainer>
          <ItemDescriptionContainerText>
            {typedItem.name}
          </ItemDescriptionContainerText>
          <ItemDescriptionContainerText>
            {typedItem.price}
          </ItemDescriptionContainerText>
        </ItemDescriptionContainer>
      </ItemArrowShowContainer>
    );
  };

  return (
    <ScrollView>
      <Container>
        <Title>THRENDING</Title>

        <ListContainer>
          <List
            horizontal
            showsHorizontalScrollIndicator={false}
            data={trending}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={renderThrendingShoes}
          />
        </ListContainer>

        <ListArrowContainer>
          <ImageLabelContainer>
            <ImageLabelContent
              source={images.recentlyViewedLabel}
              resizeMode="cover"
            />
          </ImageLabelContainer>

          <ListArrowContent horizontal>
            <ArrowList
              showsVerticalScrollIndicator={false}
              data={recentlyViewed}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={renderRecentlyViewed}
            />
          </ListArrowContent>
        </ListArrowContainer>

        {selectedItem && (
          <Modal
            animationType="fade"
            transparent={true}
            visible={showAddToBagModal}
            onRequestClose={() => {
              setSelectedItem(undefined);
            }}>
            <BlurContainer>
              <BlurContent backgroundColor={selectedItem.bgColor}>
                <ImageModalContainer>
                  <ImageModal
                    source={selectedItem.img as ImageSourcePropType}
                    resizeMode="contain"
                  />
                </ImageModalContainer>
                <TitleModalText>{selectedItem.name}</TitleModalText>
                <DescriptionModalText>{selectedItem.type}</DescriptionModalText>
                <PriceModalText>{selectedItem.price}</PriceModalText>

                <CloseModalButton
                  onPress={() => {
                    setSelectedItem(undefined);
                    setShowAddToBagModal(!showAddToBagModal);
                  }}>
                  <CloseModalButtonText>Add to Bag</CloseModalButtonText>
                </CloseModalButton>
              </BlurContent>
            </BlurContainer>
          </Modal>
        )}
      </Container>
    </ScrollView>
  );
}

export default Home;
