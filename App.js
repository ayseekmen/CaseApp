import React from "react";
import MainNavigation from "./src/navigation/MainNavigation";
import 'react-native-gesture-handler';
import { store } from './src/redux/store'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store)

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainNavigation />
            </PersistGate>
        </Provider>
    );
}

export default App;