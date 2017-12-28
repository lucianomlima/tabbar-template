/**
 * App2Sales React Native App Template
 * https://github.com/lucianomlima/tabbar-template
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import SplashScreen from 'react-native-smart-splash-screen';
import Router from './app/router';

Text.defaultProps.allowFontScaling = false;
const customTextProps = {
    style: {
        fontSize: 16,
        backgroundColor: 'transparent'
    }
};
const customTextInputProps = {
    style: {
        height: 45
    }
};

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);
const App = () => <Router />;

export default App;
