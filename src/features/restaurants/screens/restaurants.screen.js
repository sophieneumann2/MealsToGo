import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const StyledSearchBar = styled(Searchbar)`
  margin: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(View)`
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${({ StatusBar }) => StatusBar && `margin-top: ${StatusBar.currentHeight}px;`}
`;

export const RestaurantsScreen = () => (
  <StyledSafeAreaView>
    <StyledSearchBar>
      <Searchbar placeholder="Search" />
    </StyledSearchBar>
    <RestaurantList>
      <RestaurantInfoCard />
    </RestaurantList>
  </StyledSafeAreaView>
);
