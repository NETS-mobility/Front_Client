import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import Reservation04 from '../../screens/service/reservation/reservation04';
import {LoginMainScreen} from '../../screens/login';
import ServiceDetailNavigator from '../../navigation/service/serviceDetail';
import ReservationNavigator from '../../navigation/service/reservation';
import AlarmNavigator from '../../navigation/alarm/alarm';
import MypageNavigator from '../../navigation/mypage/mypageMain/mypageMain';
import LoginNavigator from '../../navigation/login/login';
import {GetToken, SetToken} from '../../utils/controlToken';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  // const [token, setToken] = useState(GetToken());
  let token;
  // useEffect(async () => {
  //   token = await GetToken();
  //   console.log(token);
  //   return () => {
  //     console.log('return token');
  //   };
  // }, []);

  return (
    <NavigationContainer>
      {GetToken() == null ? (
        <Tab.Navigator
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
            component={LoginNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={35} />
              ),
            }}
          />
          <Tab.Screen
            name="로그인"
            component={LoginNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="person" color={color} size={35} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
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
            component={AlarmNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="notifications" color={color} size={35} />
              ),
            }}
          />
          <Tab.Screen
            name="마이페이지"
            component={MypageNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="person" color={color} size={35} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default BottomTab;
