import {GET_MOMENT_LOADING,GET_MOMENT_ERROR,GET_MOMENT_SUCCESS} from "./moment.types";


let initialState = {
    loading:false,
    error:false,
    data:[],
    numberOfPages:1,
}

export const momentReducer = (state=initialState,{type,payload})=> {
    switch(type){
     
        case GET_MOMENT_LOADING: { return { ...state,loading:true}};
        case GET_MOMENT_ERROR : {return {...state,loading:false,error:true}};
        case GET_MOMENT_SUCCESS:{ return {...state,loading:false,error:false,
             data:payload.data,
             numberOfPages:payload.numberOfPages
            }}
        default : { return state}
    }
}