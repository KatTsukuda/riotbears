import React, {Component} from 'react';
import { Route } from 'react-router';
import App from '../App';
import Subject from '../containers/BlackWalnutPie';

export default (
  <Route path="/" component={App} >
    <Route path="/:subject_name" component={Subject} />
  </Route>
);
