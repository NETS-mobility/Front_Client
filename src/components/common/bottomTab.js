import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import Reservation04 from '../../screens/service/reservation/reservation04';
import {LoginMainScreen} from '../../screens/login';
import {FindID} from '../../screens/findAuth';
import {ChangePW} from '../../screens/mypage/changePW';
import {ServiceDetail, ServiceHistory} from '../../screens/service';
import ServiceDetailNavigator from '../../navigation/service/serviceDetail';

const Tab = createBottomTabNavigator();

const AlarmTab = () => {
  return <Text>알림</Text>;
};

const MyPageTab = () => {
  return <Text>마이페이지</Text>;
};

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#19b7cd',
          tabBarStyle: {
            height: 65,
            position: 'absolute',
            bottom: 0,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={ChangePW}
          // component={LoginMainScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="ServiceHistory"
          component={ServiceHistory}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="map" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Alarm"
          component={AlarmTab}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="notifications" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPageTab}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="person" color={color} size={35} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
