import { createStore, compose } from "redux";

import rootReducer from "./root-reducer";

const composeEnhancers = compose(
  typeof window !== "undefined" && window.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);
const store = createStore(rootReducer, composeEnhancers);

export default store;
