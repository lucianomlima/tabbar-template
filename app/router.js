import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import {
    HomeScreen,
    OnboardingScreen
} from './screens';
import { colors } from './config';

const TabNavigator = TabNavigator(
    {
        home: { screen: HomeScreen }
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: colors.activeColor,
            inactiveTintColor: colors.inactiveColor,
            upperCaseLabel: false,
            tabStyle: {
                elevation: 10
            },
            labelStyle: {
                width: '100%',
                fontSize: 10
            },
            style: {
                backgroundColor: colors.tabBackground,
                borderTopWidth: 1,
                borderTopColor: colors.tabBorderColor
            },
            indicatorStyle: {
                borderColor: colors.activeColor,
                borderWidth: 2,
                top: 0,
                position: 'absolute'
            }
        }
    }
);

const MainNavigator = StackNavigator({
    onboarding: { screen: OnboardingScreen },
    tabs: { screen: TabNavigator }
});

export default MainNavigator;
