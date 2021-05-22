
const initialState = {
    list:[],
    error:{
        done:false,
        message:''
    },
    loading:false,
    item:{}
}

const tutorialreducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GETTUTORIALS':
            state.list = action.payload
            state.loading = false
            return state
        case 'ERROR':
            state.error.done = true
            state.loading = false
            state.error.message = action.payload
            return state
        case 'GETTUTORIAL':
            state.item = action.payload
            state.loading = false
            return state
        case 'GETTINGTUTORIALS':
            state.loading = true
            return state
        default:
            return state
    }
}

export default tutorialreducer;