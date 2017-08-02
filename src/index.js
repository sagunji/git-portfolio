import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './components/App.css'
import './components/style.css'
// import images from './assets/images'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
