import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../types/rootTab/RootTabParamList";
import Home from "../../screens/Home";
import Transactions from "../../screens/Transactions";
import Budget from "../../screens/Budget";
import Profile from "../../screens/Profile";
import HomeActive from "../../assets/svg/homeActive.svg";
import HomeInactive from "../../assets/svg/homeInactive.svg";
import TransactionActive from "../../assets/svg/transactionActive.svg";
import TransactionInactive from "../../assets/svg/transactionInactive.svg";
import BudgetActive from "../../assets/svg/budgetActive.svg";
import BudgetInactive from "../../assets/svg/budgetInactive.svg";
import ProfileActive from "../../assets/svg/profileActive.svg";
import ProfileInactive from "../../assets/svg/profileInactive.svg";
import FloatingActionButton from "../../components/fab/FloatingActionButton";
import {styles} from "./styles";

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIconStyle: {height: 0},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              {focused ? <HomeActive /> : <HomeInactive />}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIconStyle: {height: 0},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              {focused ? <TransactionActive /> : <TransactionInactive />}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={Transactions}
        options={{
          tabBarIconStyle: {height: 0},
          tabBarButton: () => <FloatingActionButton />,
        }}
      />

      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarIconStyle: {height: 0},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              {focused ? <BudgetActive /> : <BudgetInactive />}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIconStyle: {height: 0},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              {focused ? <ProfileActive /> : <ProfileInactive />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTab;
