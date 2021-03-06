import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

import './index.css';
import App from './App/App';

render((
    <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <App/>
        </MuiPickersUtilsProvider>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can changef
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
