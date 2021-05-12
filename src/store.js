import  allReducers  from "./reducers/index";

import { createStore } from "redux";

const store = createStore(allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
export default store
