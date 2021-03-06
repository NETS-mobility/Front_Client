import React, {useContext, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import ServiceDetailNavigator from '../../navigation/service/serviceDetail';
import AlarmNavigator from '../../navigation/alarm/alarm';
import MypageNavigator from '../../navigation/mypage/mypageMain/mypageMain';
import AuthNavigator from '../../navigation/auth';
import HomeNavigator from '../../navigation/home/home';
import StartNavigator from '../../navigation/start/start';
import {RefreshContext} from '../../../App';
import CheckFirstLaunch from '../../utils/checkFirstLaunch';
import {createNavigationContainerRef} from '@react-navigation/native';

const ref = createNavigationContainerRef();
const Tab = createBottomTabNavigator();
const BottomTab = ({isFirst}) => {
  const {refresh, setRefresh} = useContext(RefreshContext);
  const [routeName, setRouteName] = useState();
  const noBottomTab = [
    'Payment',
    'Loading',
    'Reservation04',
    'StartFirst',
    'StartSecond',
    'StartThird',
  ];
  const hide = noBottomTab.includes(ref.current?.getCurrentRoute()?.name);

  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        setRouteName(ref.getCurrentRoute().name);
      }}
      onStateChange={async () => {
        const previousRouteName = routeName;
        const currentRouteName = ref.getCurrentRoute().name;
        setRouteName(currentRouteName);
      }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#19b7cd',
          tabBarStyle: {
            display: hide ? 'none' : 'flex',
            height: 65,
            position: 'absolute',
            bottom: 0,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}>
        {/* {isFirst ? (
          <Tab.Screen
            name="시작"
            component={StartNavigator}
            options={{
              headerShown: false,
              tabBarButton: () => null,
            }}
          />
        ) : (
          <></>
        )} */}
        <Tab.Screen
          name="홈"
          component={HomeNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={35} />
            ),
          }}
        />

        {refresh == null ? (
          <Tab.Screen
            name="로그인"
            component={AuthNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="person" color={color} size={35} />
              ),
            }}
          />
        ) : (
          <>
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
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
