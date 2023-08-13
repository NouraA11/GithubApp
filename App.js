import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationComponent from './src/navigation/NavigationComponent';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { store } from './src/stores/Store';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

let persistor = persistStore(store);

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationComponent />
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    )
}

export default App;
