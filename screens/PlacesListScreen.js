import React from 'react';
import { SafeAreaView, Text, StyleSheet, Platform, ImageBackground } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const PlacesListScreen = props =>{
    return (
    <SafeAreaView style={styles.container1} >
        <Text>PlacesListScreen</Text>
        <ImageBackground  source={require("../assets/CoolGradient3.png")}
       style={styles.imagebg}>
                
        </ImageBackground>
    </SafeAreaView >
    );
};
PlacesListScreen.navigationOptions = navData => {
    return {
        
        headerTitle: 'All Places',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title= "Add Place"
                iconName={Platform.OS === 'android' ? 'md-add': 'ios-add'}
                onPress={() => {
                    navData.navigation.navigate('NewPlace');
                }}                
                
                /> 
            </HeaderButtons>
          
        )
        
    };
   
};

const styles = StyleSheet.create({
    imagebg: {
        flex:1,
      },
      container1: {
          flex:1
      }
});

export default PlacesListScreen;