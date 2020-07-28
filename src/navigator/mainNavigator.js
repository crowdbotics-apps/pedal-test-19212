import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView85081Navigator from '../features/CalendarView85081/navigator';
import Camera85080Navigator from '../features/Camera85080/navigator';
import Dashboard185069Navigator from '../features/Dashboard185069/navigator';
import EmailAuth85065Navigator from '../features/EmailAuth85065/navigator';
import Messaging85064Navigator from '../features/Messaging85064/navigator';
import Maps85046Navigator from '../features/Maps85046/navigator';
import Add-Item85045Navigator from '../features/Add-Item85045/navigator';
import Maps85041Navigator from '../features/Maps85041/navigator';
import UserProfile85037Navigator from '../features/UserProfile85037/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView85081: { screen: CalendarView85081Navigator },
Camera85080: { screen: Camera85080Navigator },
Dashboard185069: { screen: Dashboard185069Navigator },
EmailAuth85065: { screen: EmailAuth85065Navigator },
Messaging85064: { screen: Messaging85064Navigator },
Maps85046: { screen: Maps85046Navigator },
Add-Item85045: { screen: Add-Item85045Navigator },
Maps85041: { screen: Maps85041Navigator },
UserProfile85037: { screen: UserProfile85037Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
