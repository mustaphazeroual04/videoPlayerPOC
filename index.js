/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import VideoExample from './src/screens/videoPlayer';
import YoutubePlayer from './src/screens/youtubePlayer';

AppRegistry.registerComponent(appName, () => YoutubePlayer);
