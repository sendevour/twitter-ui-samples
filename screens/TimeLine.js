'use strict';

import React from 'react';
import { StyleSheet, Image, Text, View, DrawerNavigator } from 'react-native';
import { Card, CardItem, Left, Body, Right, Thumbnail, Drawer, Footer, FooterTab, Content, Button, Icon, Badge } from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Header, Avatar } from 'react-native-elements';
import SideBar from './ProfileMenu';
import Search from './Search';

class TimeLine extends React.Component {
  closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
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
        centerComponent={{ text: 'Home', style: { fontWeight: 'bold', fontSize: 18, color: '#000' } }}
        rightComponent={
          <Avatar
            small
            rounded
            source={require('../img/newtweet.jpg')}
            activeOpacity={0.7}
          />
        }
      />
      <Content>
      <Card>
            <CardItem>
            <Left>
                <Thumbnail source={require('../img/129.jpg')} />
                <Body>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Random Guy<Text style={{ color:'grey', fontWeight: 'normal'}}>@randomGuy</Text></Text>
                  <Text note>If you can Dream it you can do it</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
            <Body>
            <Image style={{alignSelf:'flex-end', height: 260, width: 250, resizeMode: 'cover' }} source={require('../img/moti4.jpg')} />
            </Body>
            </CardItem>
            <CardItem style={{justifyContent: 'flex-end'}}>
    <Button small iconLeft transparent>
      <Icon  style={{ color: '#a6a6a6'}} name="text" />
      <Text style={{ color: '#a6a6a6'}}>20    </Text>
    </Button>

  <Button small iconLeft transparent>
     <EvilIcons style={{fontSize:30, color: '#a6a6a6'}} name='retweet' />
     <Text style={{ color: '#a6a6a6'}} >2    </Text>
   </Button>

    <Button small iconLeft transparent>
      <EvilIcons style={{fontSize:25, color: '#a6a6a6'}} name='heart' />
      <Text style={{ color: '#a6a6a6'}}>1    </Text>
    </Button>

    <Button default small transparent>
      <Icon style={{ color: '#a6a6a6'}} name="mail" />
      </Button>
</CardItem>
        </Card>
        <Card>
              <CardItem>
              <Left>
                  <Thumbnail source={require('../img/128.jpg')} />
                  <Body>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Some Stranger<Text style={{ color:'grey', fontWeight: 'normal'}}>@meStranger</Text></Text>
                    <Text note>Believe in yourself!</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
              <Body>
              <Image style={{alignSelf:'flex-end', height: 260, width: 250, resizeMode: 'cover' }} source={require('../img/moti2.jpg')} />
              </Body>
              </CardItem>
              <CardItem style={{justifyContent: 'flex-end'}}>
      <Button small iconLeft transparent>
        <Icon  style={{ color: '#a6a6a6'}} name="text" />
        <Text style={{ color: '#a6a6a6'}}>40    </Text>
      </Button>

    <Button small iconLeft transparent>
       <EvilIcons style={{fontSize:30, color: '#a6a6a6'}} name='retweet' />
       <Text style={{ color: '#a6a6a6'}} >25    </Text>
     </Button>

      <Button small iconLeft transparent>
        <EvilIcons style={{fontSize:25, color: '#a6a6a6'}} name='heart' />
        <Text style={{ color: '#a6a6a6'}}>10    </Text>
      </Button>

      <Button default small transparent>
        <Icon style={{ color: '#a6a6a6'}} name="mail" />
        </Button>
  </CardItem>
          </Card>
      </Content>
      <Footer>
          <FooterTab>
            <Button active vertical onPress={()=>this.props.navigation.navigate('TimeLine')}>
              <Icon name="home" />
            </Button>
            <Button vertical onPress={()=>this.props.navigation.navigate('Search')}>
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


export default TimeLine;
