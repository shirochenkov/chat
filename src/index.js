import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore();


render(
    <AppContainer>
        <Provider store={store}>
            <div className='app'>
                <App />
            </div>
        </Provider>
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <div className='app'>
                        <NextApp/>
                    </div>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}