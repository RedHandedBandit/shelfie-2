import React from 'react';
import {Switch, Route} from 'react-router-dom';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/add' component={Form} />
            <Route path='/edit/:id' component={Form} />
        </Switch>
    </div>
)