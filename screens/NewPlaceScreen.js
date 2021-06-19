import React, { useState, useCallback } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as placesActions from "../store/places-actions";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = (props) => {
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState();

  const [titleValue, setTitleValue] = useState("");

  const [selectedLocation, setSelectedLocation] = useState();
  const titleChangeHandler = (text) => {
    // you could add validation
    setTitleValue(text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };
  const locationPickedHandler = useCallback((location) => {
    setSelectedLocation(location);
  }, []);
  const savePlaceHandler = () => {
    dispatch(
      placesActions.addPlace(titleValue, selectedImage, selectedLocation)
    );
    props.navigation.goBack();
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container1}>
        <Text style={styles.label}>Title</Text>
        <ImageBackground
          source={require("../assets/CoolGradient3.png")}
          style={styles.imagebg}
        ></ImageBackground>
        <Text style={styles.label}>NOM</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Text style={styles.label}>ADDRESS</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.label}>PHOTO</Text>
        <ImagePicker onImageTaken={imageTakenHandler} />
        <Text style={styles.label}>LOCATION</Text>

        <LocationPicker
          navigation={props.navigation}
          onLocationPicked={locationPickedHandler}
        />

        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add New Place",
};

const styles = StyleSheet.create({
  imagebg: {
    flex: 1,
    margin: 30,
  },
  container1: {
    flex: 1,
  },
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
