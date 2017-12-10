'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  DrawerNavigator
} from 'react-native';

import { Drawer, Footer, FooterTab, Content, Button, Icon, Badge, List, ListItem, Left, Body, Right } from 'native-base';
import { Header, Avatar } from 'react-native-elements';

class ProfileMenu extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Header outerContainerStyles={{ borderBottomWidth:0, backgroundColor: '#ffffff' }}
        leftComponent={
          <Avatar
            medium
            rounded
            source={require('../img/profile.jpg')}
            activeOpacity={0.7}
          />
        }
        rightComponent={{ icon: 'settings', color: '#1da1f2' }}
      />
      <Content>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dhanush K Raja</Text>
      <Text style={{ color:'grey', paddingBottom: 15 }}>@dhanushkraja</Text>
      <Text style={{ paddingBottom: 30,fontWeight: 'bold' }}>300<Text style={{ color:'grey', fontWeight: 'normal'}}> Following <Text style={{ color:'black',fontWeight: 'bold'}}>18K <Text style={{ color:'grey',fontWeight: 'normal'}}>Followers</Text></Text>
</Text> </Text>
     <List>
            <ListItem icon>
              <Left>
                <Icon style={{fontSize: 28, color:'grey'}} name="person" />
              </Left>
              <Body style={{borderBottomColor:'#ffffff'}}>
                <Text style={{textDecorationLine:'none', fontSize:17}}> Profile </Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon style={{fontSize: 28, color:'grey'}} name="list" />
              </Left>
              <Body style={{borderBottomColor:'#ffffff'}}>
                <Text style={{textDecorationLine:'none', fontSize:17}}> Lists</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon style={{fontSize: 28, color:'grey'}} name="cloud" />
              </Left>
              <Body style={{borderBottomColor:'#ffffff'}}>
                <Text style={{textDecorationLine:'none', fontSize:17}}> Moments</Text>
              </Body>
            </ListItem>
          </List>
          <View
            style={{
              paddingTop: 35,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
            }}
          />
      <Text style={{ fontSize: 17, paddingTop: 40, paddingBottom: 35 }}> Settings and privacy </Text>
      <Text style={{ fontSize: 17, paddingBottom: 35 }}> Help center </Text>

      </Content>
      <Footer style={{borderTopWidth: 0, backgroundColor: '#ffffff'}}>
          <FooterTab>
            <Button vertical>
              <Icon style={{color: '#1da1f2'}}name="ios-moon-outline" />
            </Button>
            <Button vertical >
              <Icon style={{color: '#1da1f2'}} name="ios-qr-scanner" />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: '#ffffff',
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
});


export default ProfileMenu;
