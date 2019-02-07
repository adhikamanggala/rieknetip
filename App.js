import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from '@firebase/app';
import LoginForm from './src/components/LoginForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyBPpBlBYo96xR7m8NpEtVBjwzmnIeAVbeE',
      authDomain: 'managerjc7-32374.firebaseapp.com',
      databaseURL: 'https://managerjc7-32374.firebaseio.com',
      projectId: 'managerjc7-32374',
      storageBucket: 'managerjc7-32374.appspot.com',
      messagingSenderId: '482917547559'
    };

    firebase.initializeApp(config);
  }

  render() {


    return (
      <Provider store={store}>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}
export default App;