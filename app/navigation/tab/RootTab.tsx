import React from "react";
import {StyleSheet, View} from "react-native";
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
  // return (
  //   <Tab.Navigator
  //     initialRouteName="Home"
  //     screenOptions={({route}) => ({
  //       tabBarIcon: ({focused}) => {
  //         const width = focused ? 22 : 18;
  //         const height = focused ? 22 : 18;

  //         switch (route.name) {
  //           case 'Home':
  //             return focused ? (
  //               <HomeActive width={width} height={height} />
  //             ) : (
  //               <HomeInactive width={width} height={height} />
  //             );

  //           case 'Transactions':
  //             return focused ? (
  //               <TransactionActive width={width} height={height} />
  //             ) : (
  //               <TransactionInactive width={width} height={height} />
  //             );

  //           case 'Budget':
  //             return focused ? (
  //               <BudgetActive width={width} height={height} />
  //             ) : (
  //               <BudgetInactive width={width} height={height} />
  //             );

  //           default:
  //             return focused ? (
  //               <ProfileActive width={width} height={height} />
  //             ) : (
  //               <ProfileInactive width={width} height={height} />
  //             );
  //         }
  //       },
  //       tabBarActiveTintColor: '#7F3DFF',
  //       tabBarInactiveTintColor: '#C6C6C6',
  //       tabBarLabelStyle: styles.tabBarLabelStyle,
  //       headerShown: false,
  //     })}>
  //     <Tab.Screen name="Home" component={Home} />

  //     <Tab.Screen name="Transactions" component={Transactions} />

  //     <Tab.Screen name="Budget" component={Budget} />

  //     <Tab.Screen name="Profile" component={Profile} />
  //   </Tab.Navigator>
  // );
};

export default RootTab;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 8,
    height: 56,
    borderRadius: 16,
    borderTopColor: "transparent",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabBarIconContainer: {
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
