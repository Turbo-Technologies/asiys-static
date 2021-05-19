import { combineReducers } from "redux";
import profilelistreducer from "./profilereducer";
import tutorialreducer from './tutorialreducer'
import  accountreducer  from "./accountsreducer";

const allReducers = combineReducers({
    allprofiles: profilelistreducer,
    tutorials: tutorialreducer,
    user:accountreducer
})


export default allReducers