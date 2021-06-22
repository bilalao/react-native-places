import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  ImageBackground,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from "../store/places-actions";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container1}>
      <ImageBackground
        source={require("../assets/CoolGradient3.png")}
        style={styles.imagebg}
      >
        <FlatList
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <PlaceItem
              image={itemData.item.imageUri}
              title={itemData.item.title}
              address={itemData.item.address}
              onSelect={() => {
                props.navigation.navigate("PlaceDetail", {
                  placeTitle: itemData.item.title,
                  placeId: itemData.item.id,
                });
              }}
            />
          )}
        />

        <Text>PlacesListScreen</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <SafeAreaView>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navData.navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      </SafeAreaView>
    ),
  };
};

const styles = StyleSheet.create({
  imagebg: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
});

export default PlacesListScreen;
