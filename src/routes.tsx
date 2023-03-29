import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import ListUsers from './pages/ListUsers';
import ShowUser from './pages/ShowUser';

export default function Routers() {
    return (
        <Router>
            <Route exact path='/' component={ListUsers}/>
            <Route exact path='/users/:name' component={ShowUser}/>            
        </Router>
    )
}