import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export const persistor = persistStore(store);

export default store;
