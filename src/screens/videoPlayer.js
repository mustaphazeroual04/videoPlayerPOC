import React from 'react';
import { View, StyleSheet } from 'react-native';
import VideoPlayers from 'react-native-video-players';
import Video from 'react-native-video';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"orange",
    justifyContent: 'center'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width:'100%',
    height:'100%',
    backgroundColor:"darkcyan"
  },
})

const url = 'https://www.youtube.com/watch?v=dXW_KOIuy5Y';

class VideoExample extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       {/* <VideoPlayers
        source={{uri : url}}
        title={'Video title'}
        //paused={true}
        theme={'white'}
        resizeMode={'contain'}
        playInBackground={false}
        playWhenInactive={false}
        controlTimeout={2000}
      /> */}
      <Video source={{uri: url}}   // Can be a URL or a local file.
       ref={(ref) => {
         //this.player = ref
       }}                                      // Store reference
       //onBuffer={this.onBuffer}                // Callback when remote video is buffering
       //onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
      </View>
    )
  }
}

export default VideoExample;

//AppRegistry.registerComponent('VideoExample', () => VideoExample)