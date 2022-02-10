import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import Reservation04 from '../../screens/service/reservation/reservation04';
import {LoginMainScreen} from '../../screens/login';
import ServiceDetailNavigator from '../../navigation/service/serviceDetail';
import ChangePwNavigator from '../../navigation/mypage/changePW/changePW';
import {ReservationNavigator} from '../../navigation/service/reservation';

const Tab = createBottomTabNavigator();

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
          name="홈"
          component={ReservationNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="서비스내역"
          component={ServiceDetailNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="map" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="알림"
          component={ChangePwNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="notifications" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="마이페이지"
          component={ChangePwNavigator}
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
