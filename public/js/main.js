import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import reducer from './reducers/index';

import middleHello from './middlewares/hello';
import middleLogin from './middlewares/login'
import middleRegister from './middlewares/register'
import middleUserList from './middlewares/userList';
import middleDeleteUser from './middlewares/deleteUser'

import Hello from './containers/hello';
import Login from './containers/login';
import Register from './containers/register';
import UserList from './containers/userList';
import UpdateUser from './containers/updateUser'

const createMiddlewareStore = applyMiddleware(middleHello, middleLogin, middleRegister,middleUserList,middleDeleteUser)(createStore);

const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={UserList}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/userList" component={UserList}/>
        <Route path="/updateUser" component={UpdateUser}/>
    </Router>
</Provider>, document.getElementById("content"));
