import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';


const app = document.getElementById('app');
const helloWorld = <App />;

ReactDOM.render(helloWorld, app);