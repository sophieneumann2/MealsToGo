import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestauranCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestauranCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some restaurant',
    icon,
    photos = ['https://source.unsplash.com/random/300×300'],
    address = '111 street',
    isOpenedNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;
  return (
    <RestauranCard elevation={5}>
      <RestauranCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestauranCard>
  );
};
