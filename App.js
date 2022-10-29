import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Home from './screens/Home';
import Loading_page from './screens/Loading_page';
import Name from './screens/Name';
import Sign_up from './screens/Sign_up';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Authloading from './screens/Authloading';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';

Amplify.configure(config);
const Stack = createStackNavigator();
const g = {
  headerStyle: {backgroundColor: '#c9ac5b'},
  headerTitleStyle: {color: '#3d80cc'},
  headerTintColor: 'white',
};

const App = () => {
  // Auth.signOut();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} screenOptions={g} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const signUpConfig = {
  header: "Sign up for the Verse account",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'royalblue',
    borderRadius: 10,
  },
  container: {
    ...AmplifyTheme.container,
    backgroundColor: '#b9e8f1',
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: 'royalblue',
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: 'skyblue',
  },
  linkUnderlay: {
    ...AmplifyTheme.linkUnderlay,
    color: 'skyblue',
    borderRadius: 5,
  },
  sectionFooterLinkDisabled:{
    ...AmplifyTheme.sectionFooterLinkDisabled,
    color: 'skyblue',
  },
};

export default withAuthenticator(App, {signUpConfig, theme: customTheme});
