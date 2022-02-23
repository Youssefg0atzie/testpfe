import { Component } from "react/cjs/react.production.min";
import {  ImageBackground, StyleSheet, Text , Image , Animated, View, SafeAreaView} from "react-native";
import * as Animatable from 'react-native-animatable';
import HomeButton from "./shared/HomeButton";


class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}
export default function home() {
  return (

      <ImageBackground source={require('./assets/images/bg1.png')} resizeMode="cover" style={styles.image} >
        <ImageLoader
          style={styles.logo}
          source={require('./assets/images/logo_v1_b1.png')} />
          <SafeAreaView style={styles.screencontainer}>
            <View style={styles.screencontainer}>
          <HomeButton text={'Log In'} />
          <HomeButton text={'Sign Up'} />
          <HomeButton text={'Play As Guest'} />
          <HomeButton text={'Quit'} />
          </View>
          </SafeAreaView>
          
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    paddingTop:'70%',
    paddingLeft:"12%",
    paddingRight:"12%",
    width:"100%",
    height:"100%",
    
    
  },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logo:{
    position: "absolute",
    left : '0%',
    top : '15%'
  }
});