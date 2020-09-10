import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import {Provider} from "react-redux";
import Counter from "./components/Counter";
import store from "./store/store.jsx";
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
      </Layout>
    );
  }
}
