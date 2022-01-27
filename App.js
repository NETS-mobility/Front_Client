"use strict";

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  FindPwNavigator,
  FindIdNavigator,
} from './src/navigation/findAuth/findAuth';
import StartNavigator from './src/navigation/start/start';
import LoginNavigator from './src/navigation/login/login';
import SignUpNavigator from './src/navigation/signup/signup';
import BottomTab from './src/components/common/bottomTab';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="StartNavigator" component={StartNavigator} />
    //     <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
    //     <Stack.Screen name="SignUpNavigator" component={SignUpNavigator} />
    //     <Stack.Screen name="FindIdNavigator" component={FindIdNavigator} />
    //     <Stack.Screen name="FindPwNavigator" component={FindPwNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <BottomTab />
  );
};

export default App;

const express = require("express");
const bodyParser = require("body-parser");
const app=express();

//라우팅
const home = require("./src/routes/home");

app.set("screens", "./src/screens");
app.set("view engine", "ejs");
//app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;