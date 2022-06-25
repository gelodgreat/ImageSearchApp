import React from 'react';
import {Container, ImageRow} from './Home.style';
import {HomeProps} from './Home.props';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {FlatList} from 'react-native';
import {Hit} from 'types/Images';
import FastImage from 'react-native-fast-image';

const HomeScreen = (props: HomeProps) => {
  const {images, searchTerm, setSearchTerm, loading, onNavigateImageDetails} =
    props;

  const renderItem = ({item}: any) => {
    const itemData: Hit = item;

    return (
      <ImageRow onPress={() => onNavigateImageDetails(itemData)}>
        <FastImage
          source={{uri: itemData.previewURL}}
          style={{height: 100, width: 100, borderRadius: 8}}
        />
      </ImageRow>
    );
  };

  return (
    <Container>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search image..."
        style={{marginBottom: 8}}
      />
      {loading && <ActivityIndicator animating />}
      <FlatList data={images} renderItem={renderItem} />
    </Container>
  );
};

export default HomeScreen;
