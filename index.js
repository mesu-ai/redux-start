const {createStore, combineReducers}=require('redux');

const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';
const RESET='RESET';

const ADD_USER='ADD_USER';


// state

// couner app state
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

// counter app reducer
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
          return state;
    }

}


// add user app

//user state
const initialUserState={
    count:1,
    users:[
        'mesu'
    ]
}

// type, payload for add user
const addUser=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}


// add user reducer
const userReducer=(state=initialUserState,action)=>{

    switch (action.type) {
        case ADD_USER:
            return{
                users:[...state.users,action.payload],
                count: state.count+1,
            }

        default:
           return state;
    }

}

const rootReducer=combineReducers({
    countR:counterReducer,
    userR:userReducer
})

const store=createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());
store.dispatch(addUser('kamal'));
store.dispatch(addUser('jamal'));