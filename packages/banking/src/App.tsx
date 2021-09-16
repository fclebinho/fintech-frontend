import React, { ReactElement } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';

import keycloak from './config/keycloak';
import AppRouter from './routes';

const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}

const App = (): ReactElement => {
  return (
    <ReactKeycloakProvider 
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <div className="App">
        <AppRouter />
      </div>
    </ReactKeycloakProvider>
  );
};

export default App;
