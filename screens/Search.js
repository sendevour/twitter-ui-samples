'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, DrawerNavigator } from 'react-native';
import { Drawer, Footer, FooterTab, List, ListItem, Content, Button, Card, CardItem, Icon, Badge, Body, Left, Right, Item, Input } from 'native-base';
import { Header, Avatar, SearchBar } from 'react-native-elements';
import SideBar from './ProfileMenu';
import TimeLine from './TimeLine';

class Search extends Component {
  closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
  };
    ListSearchItems = () => {
      return(
      <Text>Hello</Text>
      );
    };

  render() {
    return (
      <Drawer
       ref={(ref) => { this.drawer = ref; }}
       content={<SideBar navigator={this.navigator} />}
       onClose={() => this.closeDrawer()} >

      <View style={styles.container}>
      <Header outerContainerStyles={{ backgroundColor: '#ffffff' }}
        leftComponent={
          <Avatar
            small
            rounded
            source={require('../img/profile.jpg')}
            onPress={() => this.openDrawer()}
            activeOpacity={0.7}
          />
        }
        centerComponent={<SearchBar lightTheme round
          onChangeText={() => this.ListSearchItems()}
          placeholder='Search twitter' />
      }
        rightComponent={{ icon: 'person', color: '#1da1f2' }}
      />
      <Content>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Trends for You</Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.3,
          paddingBottom: 10,
        }}
      />

      <List>
   <ListItem noBorder>
      <Body>
         <Text style={{fontSize: 17}}><Text style={{color: 'grey', textDecorationLine:'none'}}> 1</Text>    #IndVSL</Text>
         <Text note style={{color: 'grey'}}>       320,456 Tweets </Text>
         <View
           style={{
             paddingTop: 5,
             borderBottomColor: 'grey',
             borderBottomWidth: 0.3,
             paddingBottom: 5,
           }}
         />
      </Body>
   </ListItem>
   <ListItem noBorder>
       <Body>
         <Text style={{fontSize: 17, textDecorationLine:'none'}}><Text style={{color: 'grey'}}> 2</Text>    Washingtom Sundar</Text>
         <Text note style={{color: 'grey'}}>       30,456 Tweets </Text>
         <View
           style={{
             paddingTop: 5,
             borderBottomColor: 'grey',
             borderBottomWidth: 0.3,
             paddingBottom: 5,
           }}
         />
      </Body>
   </ListItem>
   <ListItem noBorder>
      <Body>
         <Text style={{fontSize: 17}}><Text style={{color: 'grey', textDecorationLine:'none'}}> 3</Text>    #ManiShankarAiyar</Text>
         <Text note style={{color: 'grey'}}>       20,506 Tweets </Text>
         <View
           style={{
             paddingTop: 5,
             borderBottomColor: 'grey',
             borderBottomWidth: 0.3,
             paddingBottom: 5,
           }}
         />
      </Body>
   </ListItem>
   <ListItem noBorder>
      <Body>
         <Text style={{fontSize: 17}}><Text style={{color: 'grey', textDecorationLine:'none'}}> 4</Text>    Congress</Text>
         <Text note style={{color: 'grey'}}>       19,506 Tweets </Text>
         <View
           style={{
             paddingTop: 5,
             borderBottomColor: 'grey',
             borderBottomWidth: 0.3,
             paddingBottom: 5,
           }}
         />
      </Body>
   </ListItem>
   <ListItem noBorder>
       <Body>
         <Text style={{fontSize: 17}}><Text style={{color: 'grey', textDecorationLine:'none'}}> 5</Text>    WestHam</Text>
         <Text note style={{color: 'grey'}}></Text>
         <View
           style={{
             paddingTop: 5,
             borderBottomColor: 'grey',
             borderBottomWidth: 0.3,
             paddingBottom: 5,
           }}
         />
      </Body>
   </ListItem>
   <ListItem>
      <Left>
         <Text style={{ color:'#1da1f2',fontSize: 13 }}>  Show more</Text>
      </Left>
      <Right>
         <Icon style={{ color:'grey' }} name="arrow-forward" />
      </Right>
   </ListItem>
</List>

      </Content>
      <Footer>
          <FooterTab>
            <Button vertical onPress={()=>this.props.navigation.navigate('TimeLine')}>
              <Icon name="home" />
            </Button>
            <Button active vertical onPress={()=>this.props.navigation.navigate('Search')}>
              <Icon name="search" />
            </Button>
            <Button badge vertical>
            <Badge style={{ backgroundColor: '#1da1f2' }}>
          <Text>20+</Text>
        </Badge>
              <Icon name="notifications" />
            </Button>
            <Button vertical>
              <Icon name="mail" />
            </Button>
          </FooterTab>
        </Footer>
      </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
});


export default Search;
