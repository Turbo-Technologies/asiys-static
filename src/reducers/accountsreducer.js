
const intialState = {
    loggedin:false,
    user:{
        username:'',
        password:'',
        email:'',
    },
    error:{
        done:false,
        message:''
    }

}

const accountreducer = (state=intialState, action) => {
    switch(action.type) {
        case 'REGISTER':
            state.loggedin = true
            state.user = action.payload
            return state 
        case 'REGISTERERROR':
            state.error.done = true
            state.error.message = action.payload
            return state 
        default:
            return state


    }
}


export default accountreducer