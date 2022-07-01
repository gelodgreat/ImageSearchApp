import React from 'react';
import {Container, ImageRow} from './Home.style';
import {HomeProps} from './Home.props';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {FlatList} from 'react-native';
import {Hit} from 'types/Images';
import FastImage from 'react-native-fast-image';

const HomeScreen = (props: HomeProps) => {
  const {
    images,
    searchTerm,
    setSearchTerm,
    loading,
    onNavigateImageDetails,
    loadMore,
  } = props;

  const renderItem = ({item}: any) => {
    const itemData: Hit = item;

    return (
      <ImageRow onPress={() => onNavigateImageDetails(itemData)}>
        <FastImage
          source={{uri: itemData.previewURL}}
          style={{height: 100, width: 100, borderRadius: 8}}
        />
        <Text style={{marginLeft: '2%'}}>Uploaded by: {itemData.user}</Text>
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
      {images && (
        <FlatList
          data={images}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
