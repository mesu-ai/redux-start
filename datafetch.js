const { default: axios } = require('axios');
const {createStore,applyMiddleware}=require('redux');
const { default: thunk } = require('redux-thunk');

const REQUEST_DATA='REQUEST_DATA';
const FAILED_DATA='FAILED_DATA';
const SUCCESS_DATA='SUCCESS_DATA';

const api_url='https://jsonplaceholder.typicode.com/todos';

// state
const initialDataState={
    data:[],
    isLoading:false,
    error:null,
}

// action
const getRequestData=()=>{
    return {
        type:REQUEST_DATA,
    }
}

const getSuccessData=(data)=>{
    return {
        type:SUCCESS_DATA,
        payload:data
    }
}

const getFailedData=(edata)=>{
    return {
        type: FAILED_DATA,
        payload: edata,
    }
}

// reducer
const dataReducer=(state=initialDataState,action)=>{
    switch (action.type) {
        case REQUEST_DATA:
            return  {
                ...state,
                isLoading: true,
            }
        case SUCCESS_DATA:
            return {
                ...state,
                isLoading: false,
                datas: action.payload
            }
        
        case FAILED_DATA:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
           
        default:
            return state;
    }
} 

const fetchData=()=>{
    return (dispatch)=>{
        dispatch(getRequestData());

        axios.get(api_url)
        .then(res=>{
            const datas=res.data;
            const titles=datas.map(data=>data.title)
            console.log(titles);

            dispatch(getSuccessData(titles))
        })
        .catch((error)=>{

            dispatch(getFailedData(error.message));
        })

    }


}

const store=createStore(dataReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fetchData());







