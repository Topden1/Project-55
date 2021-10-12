import React, {Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import {Audio} from 'expo-av'

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { url: 'http://soundbible.com/mp3/Buzzer.SoundBible.com-188422102.mp3'},
      {shouldPlay:true}
    );
  }
}



// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
  displayAlert() {
    alert('I am an alert box');
  }
  render(){ 
  return (
    <View style={styles.container}>
   

      <Text style={styles.paragraph}>
      <Button title="Press Here" color="red" onPress={this.displayALert} url = 'https://freesound.org/people/JarredGibb/sounds/219476/'  />
      <Button title="Click Here" color="blue" onPress={this.displayALert} url ='https://freesound.org/people/volkbutphan/sounds/485486/'  />
      <Button title="Touch Here" color="green" onPress={this.displayALert} url = 'https://freesound.org/people/InspectorJ/sounds/403019/' />
      <Button title=" DON'T TOUCH" color="black" onPress={this.displayALert} url = 'https://freesound.org/people/behesht1/sounds/246265/' />
      <Button title="Slap It" color="orange" onPress={this.displayALert} url = ' https://freesound.org/people/LamaMakesMusic/sounds/403556/' />
 
 onPress={() => {
   Audio.setIsEnabledAsync(false);
 }}>
 <Text> Stop Sound </Text>
 </TouchableOpacity>

        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>

      
    </View>
  );
   }
}

//style={{ width:200, height:100, marginTop:80}}>
    //<Button
    //title="sound1"
    //color="red"
    //onPress={() => Alert.alert('Play Sound 1')} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
