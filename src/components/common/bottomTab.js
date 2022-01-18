import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return <Text>홈</Text>;
};

const ServiceTab = () => {
  return <Text>서비스 탭 내역</Text>;
};

const AlarmTab = () => {
  return <Text>알림</Text>;
};

const MyPageTab = () => {
  return <Text>마이페이지</Text>;
};

const BottomTab = () => {
  return (
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
        component={HomeTab}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={35} />,
        }}
      />
      <Tab.Screen
        name="Service"
        component={ServiceTab}
        options={{
          title: '서비스 내역',
          tabBarIcon: ({color}) => <Icon name="map" color={color} size={35} />,
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={AlarmTab}
        options={{
          title: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageTab}
        options={{
          title: '마이페이지',
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
