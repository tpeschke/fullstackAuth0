import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EditProfile from './EditProfile'
import Recommended from './Recommended'

export default (
    <Switch>
        <Route path='/profile/' component={Recommended} exact />
        <Route path='/profile/edit' component={EditProfile} />
    </ Switch>
)