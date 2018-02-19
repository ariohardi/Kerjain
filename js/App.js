/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator, TabNavigator } from "react-navigation";

import AppNavigator from "./AppNavigator";


export default () =>
    <Root>
        <AppNavigator />
    </Root>;
