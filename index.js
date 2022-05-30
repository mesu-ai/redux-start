const {createStore}=require('redux');

const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';
const RESET='RESET';

// state

const initialCounterState={
    count:0
}

// action type
const incrementCounter=()=>{
    return{
        type:INCREMENT
    }
    

}

const decrementCounter=()=>{
    return{
        type:DECREMENT
    }
}

const resetCounter=()=>{
    return{
        type:RESET
    }
}

// action reducer

const counterReducer=(state=initialCounterState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count:state.count+1
            }

        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        
        case RESET:
            return{
                ...state,
                count:0
            }
        
        default:
            state
    }

}

const store=createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
