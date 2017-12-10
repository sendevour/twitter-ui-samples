import React from 'react';
import { Drawer, Footer, FooterTab, Content, Button, Icon, Badge } from 'native-base';
import { Avatar } from 'react-native-elements';
import { StyleSheet, Header, Text, View, DrawerNavigator } from 'react-native';
import {StackNavigator} from 'react-navigation';

import TimeLine from './screens/TimeLine';
import ProfileMenu from './screens/ProfileMenu';
import Search from './screens/Search';

export default class App extends React.Component {
    render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  TimeLine: {
    screen: TimeLine,
    navigationOptions: ({navigation}) => ({
        header: false
      }),
  },
  ProfileMenu: {
    screen: ProfileMenu,
    navigationOptions: ({navigation}) => ({
        header: false
      }),
  },
  Search: {
    screen: Search,
    navigationOptions: ({navigation}) => ({
        header: false
      }),
  }

});
