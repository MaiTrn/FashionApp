import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AuthenticationNavigator from "./src/authentication";
import HomeNavigator from "./src/main";
import { AppRoutes } from "./src/components/Navigation";
import rootReducer from "./src/redux/reducers";

// import { LoadAssets } from "./src/components";

const firebaseConfig = {
  apiKey: "AIzaSyBs7pFiS8cfqMDykqKv-b21Gjh1Oi8lqJM",
  authDomain: "fashion-f5b92.firebaseapp.com",
  projectId: "fashion-f5b92",
  storageBucket: "fashion-f5b92.appspot.com",
  messagingSenderId: "218070272683",
  appId: "1:218070272683:web:fc8b41c350f423c3d4c5ee",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const store = createStore(rootReducer, applyMiddleware(thunk));

const customFonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.ttf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default class App extends React.Component {
  state = {
    loggedIn: false,
    loaded: false,
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({ loggedIn: false, loaded: true });
      } else {
        this.setState({ loggedIn: true, loaded: true });
      }
    });
    this._loadFontsAsync();
  }

  render() {
    const { loggedIn, loaded, fontsLoaded } = this.state;
    if (!fontsLoaded || !loaded) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <Provider store={store}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <SafeAreaProvider>
            <AppStack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={loggedIn ? "Home" : "Authentication"}
            >
              <AppStack.Screen
                name="Authentication"
                component={AuthenticationNavigator}
              />
              <AppStack.Screen name="Home" component={HomeNavigator} />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
      // <LoadAssets {...{ fonts }}>
      //   <AuthenticationNavigator />
      // </LoadAssets>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
