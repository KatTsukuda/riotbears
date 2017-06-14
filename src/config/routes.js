import React, {Component} from 'react';
import { Route } from 'react-router';
import App from '../App';
import Subject from '../containers/Subject'

export default (
  <Route path="/" component={App} >
    <Route path="/:name" component={Subject} /> // nest subreddit forum within '/'
   </Route>
);
