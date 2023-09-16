import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App.tsx'
import './index.css'
import { THEME } from './config/theme.config.ts';
import { ThemeProvider } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import { APOLLO_CLIENT } from './config/graphql.config.ts';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <ApolloProvider client={APOLLO_CLIENT}>
        <Provider store={store} >
          <App />
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
