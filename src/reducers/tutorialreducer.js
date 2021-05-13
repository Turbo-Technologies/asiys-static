
const initialState = {
    list:['not there'],
    error:{
        done:false,
        message:''
    },
    item:{}
}

const tutorialreducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GETTUTORIALS':
            state.list = action.payload
            return state
        case 'ERROR':
            state.error.done = true
            state.error.message = action.payload
            return state
        case 'GETTUTORIAL':
            state.item = action.payload
            return state
        default:
            return state
    }
}

export default tutorialreducer;