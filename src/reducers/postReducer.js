import {PARCELS_LOAD_FAILED,PARCELS_LOADING,PARCELS_LOADED} from "../actions/types";

const initialState = {
    parcels: [],
    loading: false
};

export default function(state = initialState, action){
    switch (action.type){
        case PARCELS_LOAD_FAILED:
        return{
...state,
loading:false,
        }
        case PARCELS_LOADED:
        return {
            ...state,
            parcels:action.payload,
            loading:false
        }
        case PARCELS_LOADING:
        return{
            ...state,
            loading:true,
            
        }
        default:

        return state;
    }
}
