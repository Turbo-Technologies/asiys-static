import { combineReducers } from "redux";
import profilelistreducer from "./profilereducer";
import tutorialreducer from './tutorialreducer'

const allReducers = combineReducers({
    allprofiles: profilelistreducer,
    tutorials: tutorialreducer
})


export default allReducers