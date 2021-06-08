import React,  { useState }  from 'react';
import { ScrollView, SafeAreaView, Text, TextInput, StyleSheet,ImageBackground,Button } from 'react-native';
import Colors from '../constants/Colors'; 
import {useDispatch} from 'react-redux';
const NewPlaceScreen = props =>{

    const dispatch = useDispatch();
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
      // you could add validation
      setTitleValue(text);

    };

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue));
        props.navigation.goBack();
    };
    return (
        <ScrollView>
        <SafeAreaView style={styles.container1} >
        <Text style={styles.label} >Title</Text>
        <ImageBackground  source={require("../assets/CoolGradient3.png")}
        style={styles.imagebg}>
                
        </ImageBackground>
        <TextInput style={styles.textInput}
        onChangeText={titleChangeHandler}
        value={titleValue}/>
        <Button
         title="Save Place"
          color={Colors.primary}
           onPress={() => {savePlaceHandler}} />
       
    </SafeAreaView >
    </ScrollView>
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add New Place'

};

const styles = StyleSheet.create({
    imagebg: {
        flex:1,
        margin: 30
      },
      container1: {
          flex:1
      },
      form: {
       margin: 30   
      },
      label: {
          fontSize: 18,
          marginBottom: 15
      },
      textInput: {
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          marginBottom:15,
          paddingVertical: 4,
          paddingHorizontal: 2
      }

});

export default NewPlaceScreen;