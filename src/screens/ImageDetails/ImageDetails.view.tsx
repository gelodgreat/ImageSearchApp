import React from 'react';
import {Container, ContentContainer, Row} from './ImageDetails.style';
import {ImageDetailsProps} from './ImageDetails.props';
import FastImage from 'react-native-fast-image';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ImageDetailsScreen = (props: ImageDetailsProps) => {
  const {details} = props;
  console.log({details});
  return (
    <Container>
      <FastImage
        source={{uri: details.largeImageURL}}
        style={{width: '100%', height: 200, borderRadius: 8}}
      />
      <ContentContainer>
        <Row>
          <Text> Uploaded by: {details.user}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          <Icon name="heart" size={20} />
          <Text style={{marginLeft: 8}}>{details.likes}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          <Icon name="download" size={20} />
          <Text style={{marginLeft: 8}}> Downloads: {details.downloads}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          <Icon name="eye" size={20} />
          <Text style={{marginLeft: 8}}> Views: {details.views}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          <Icon name="tags" size={20} />
          <Text style={{marginLeft: 8}}> Tags: {details.tags}</Text>
        </Row>
      </ContentContainer>
    </Container>
  );
};

export default ImageDetailsScreen;
