import {GET_RECIPE_LOADING,GET_RECIPE_ERROR,GET_RECIPE_SUCCESS} from "./recipe.types";


let initialState = {
    loading:false,
    error:false,
    data:[],
    numberOfPages:1,
}

export const recipeReducer = (state=initialState,{type,payload})=> {
    switch(type){
     
        case GET_RECIPE_LOADING: { return { ...state,loading:true}};
        case GET_RECIPE_ERROR : {return {...state,loading:false,error:true}};
        case GET_RECIPE_SUCCESS:{ return {...state,loading:false,error:false,
             data:payload.data,
             numberOfPages:payload.numberOfPages
            }}
        default : { return state}
    }
}