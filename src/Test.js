import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput
} from 'react-native';
import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';
import RNSpeedometer from 'react-native-speedometer'
import RNFetchBlob from 'rn-fetch-blob';
class App extends Component {
  state = { 
    value: 0,
  };

  getNetworkBandwidth = async () => {
    try {
      const networkSpeed = await measureConnectionSpeed();
      console.log(networkSpeed); // Network bandwidth speed 
    } catch (err) {
      console.log(err);  
    }
  }

  onChange = (value) => this.setState({ value: parseInt(value) });

  componentDidMount(){
    this.getNetworkBandwidth()
  }
  render() {
     return (
        <SafeAreaView style={style.container}>
          <TextInput placeholder="Speedometer Value" style={styles.textInput} onChangeText={this.onChange} />
          <RNSpeedometer value={this.state.value} size={200}/>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    height: 25,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20,
  },
});