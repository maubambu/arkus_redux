const initialState = {
    count: 0
}

const CounterReducer = (state = initialState, action)=>{
    console.log(action)
    switch (action.type){
        case "ACTION_HOLA":
            return {count: state.count + 1}
        default:
            return state;
    }
}

export default CounterReducer;