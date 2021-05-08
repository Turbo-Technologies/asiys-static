import axios from 'axios'


const profilelistreducer = (state=[], action) => {
    switch(action.type) {
        case 'GETPROFILES':
            return state.allprofiles =  action.payload
        case 'LOGIN':
            return state.isAuthenticated = action.payload
        default:
            return state
    }
}

export default profilelistreducer;