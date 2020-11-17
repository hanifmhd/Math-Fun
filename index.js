/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import Routes from './src/routes';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => Routes);
