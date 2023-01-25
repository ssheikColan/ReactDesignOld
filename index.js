/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { TabBar } from 'react-native-tab-view';
import App from './App';
import {name as appName} from './app.json';
import DirectionLayout from './flexDesigns/Flex1';
import Routes from './navigator/routes';
import BottomTabScreen from './screens/BottomTabScreen';
import DrawerNavigation from './screens/DrawerNavigation';
import HomeScreen from './screens/HomeScreen';
import  TopBarScreen  from './screens/TopBarScreen';








AppRegistry.registerComponent(appName, () => DrawerNavigation);
