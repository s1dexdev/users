import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import App from './App';
import 'modern-normalize';
import './styles/base.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store.store}>
                <PersistGate loading={null} persistor={store.persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
