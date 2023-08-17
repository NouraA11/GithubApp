import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationComponent from './src/navigation/NavigationComponent';
import { Provider } from 'react-redux';
import {store, persistor} from './src/reducers/index';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

const App = () => (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationComponent />
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    )

export default App;
