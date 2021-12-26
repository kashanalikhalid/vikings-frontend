import{
    ADD_FEE_REQUEST,
    ADD_FEE_SUCCESS,
    ADD_FEE_FAIL,
    UPDATE_FEE_REQUEST,
    UPDATE_FEE_SUCCESS,
    UPDATE_FEE_FAIL,
    DELETE_FEE_REQUEST,
    DELETE_FEE_SUCCESS,
    DELETE_FEE_FAIL,
    FEE_LIST_REQUEST,
    FEE_LIST_SUCCESS,
    FEE_LIST_FAIL,
    FEE_DETAILS_REQUEST,
    FEE_DETAILS_SUCCESS,
    FEE_DETAILS_FAIL,
    FEE_COUNT_REQUEST,
    FEE_COUNT_SUCCESS,
    FEE_COUNT_FAIL,
    FEE_TRAINING_REQUEST,
    FEE_TRAINING_SUCCESS,
    FEE_TRAINING_FAIL,
    FEE_CARDIO_REQUEST,
    FEE_CARDIO_SUCCESS,
    FEE_CARDIO_FAIL,
    FEE_WEIGHT_REQUEST,
    FEE_WEIGHT_SUCCESS,
    FEE_WEIGHT_FAIL,
} from '../constants/feeConstants'

export const feeListReducer=(state={},action)=>{
    switch(action.type)
    {
        case FEE_LIST_REQUEST:
            return {loading:true}
        case FEE_LIST_SUCCESS:{
            return {loading:false,fees:action.payload}
        }
        case FEE_LIST_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}
