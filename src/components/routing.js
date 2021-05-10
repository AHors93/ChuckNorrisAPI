import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SearchPage from './search';

const Main = () => {
    return (
    <Switch>
        <Route path='/search' component={SearchPage}/>
    </Switch>
    )
}

export default Main;