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
import axios from "axios";

export const feeHistory=(url)=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:FEE_LIST_REQUEST
            })

            let {data} = await axios.get(`https://vikings-0.herokuapp.com${url.toString()}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:FEE_LIST_SUCCESS,
                payload:data
            })
        }
        catch (error) {
            dispatch({
                type:FEE_LIST_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            })
        }
    }
}
