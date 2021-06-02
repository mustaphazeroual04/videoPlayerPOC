import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import VideoPlayers from 'react-native-video-players';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';


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

class YoutubePlayer extends React.Component {
    player = null;
    constructor(props){
        super(props);
        this.state = {
            play : false
        }
    }
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
      <TouchableOpacity style={{backgroundColor:"red"}} onPress={() => {
          this.setState({play:true})
      }} >
          <Text style={{color:"white"}} >Play Video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"red" , marginLeft  : 50}} onPress={() => {
          this.setState({play:false})
      }} >
          <Text style={{color:"white"}} >Pause Video</Text>
      </TouchableOpacity>
        <YouTube
            apiKey="AIzaSyAV3K--BYXdUExUOfxVK0DK7xk4u09SFDk"
            videoId="liJVSwOiiwg" // The YouTube video ID
            play={this.state.play} // control playback of video with true/false
            fullscreen={fullScreen} // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            //onReady={e => this.setState({ isReady: true })}
            //onChangeState={e => this.setState({ status: e.state })}
            //onChangeQuality={e => this.setState({ quality: e.quality })}
            //onError={e => this.setState({ error: e.error })}
            ref={(ref) => {
                this.player = ref
              }}   
            controls={0}
            style={{ alignSelf: 'stretch', height: 300 }}
        />
      </View>
    )
  }
}

export default YoutubePlayer;

//AppRegistry.registerComponent('VideoExample', () => VideoExample)