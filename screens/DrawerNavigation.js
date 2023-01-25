import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function FeedScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed!</Text>
      </View>
    );
  }
  
  function NotificationsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Feed" component={FeedScreen} />
    <Drawer.Screen name="Article" component={NotificationsScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation