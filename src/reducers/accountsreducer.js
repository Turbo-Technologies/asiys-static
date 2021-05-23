import { setcookie, readcookie, removecookie } from "../actions/cook";


const intialState = {
    loggedin:false,
    user:'',
    error:{
        done:false,
        message:''
    },
    cookie:{
        set:false,
        content:''
    },
    loading:false

}

const accountreducer = (state=intialState, action) => {
    switch(action.type) {
        case 'REFRESH':
            let data = readcookie()
            if (data === '') {
                return state
            }
            else {
                state.user = data
                state.loggedin = true
                return state
            }
            
        case 'REGISTER':
            state.loggedin = true
            state.user = action.payload
            state.cookie.set = true
            state.cookie.content = setcookie(action.payload)
            state.loading = false
            return state 

        case 'BUFFERING':
            state.loading = true
            return state

        case 'REGISTERERROR':
            state.error.done = true
            state.error.message = action.payload
            state.loading = false
            return state 

        case 'LOGOUT':
            state.loggedin = false
            state.user = ''
            
            removecookie()
            return state 

        default:
            return state


    }
}


export default accountreducer