import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from "./redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';

import Litsearch from './Litsearch';

ReactDOM.render(
    <Provider store={store()}>
        <NewApp />
    </Provider>,
    document.getElementById('root')
);
