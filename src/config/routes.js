import React, {Component} from 'react';
import { Route } from 'react-router';
import App from '../App';
import BlackWalnut from '../containers/BlackWalnut'

export default (
  <Route path="/" component={App} >
    <Route path="/:name" component={BlackWalnut} /> // nest subreddit forum within '/'
   </Route>
);
