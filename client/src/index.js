import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './redux/store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorkerRegistration';




const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          {/* </PersistGate> */}
        </Provider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
