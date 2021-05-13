import { combineReducers } from "redux";
import profilelistreducer from "./profilereducer";
import tutorialreducer from './tutorialreducer'
import  accountReducer  from "./accountsreducer";

const allReducers = combineReducers({
    allprofiles: profilelistreducer,
    tutorials: tutorialreducer,
    user:accountReducer
})


export default allReducers