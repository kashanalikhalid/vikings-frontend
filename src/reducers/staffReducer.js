import{
    ADD_STAFF_REQUEST,
    ADD_STAFF_SUCCESS,
    ADD_STAFF_FAIL,
    UPDATE_STAFF_REQUEST,
    UPDATE_STAFF_SUCCESS,
    UPDATE_STAFF_FAIL,
    DELETE_STAFF_REQUEST,
    DELETE_STAFF_SUCCESS,
    DELETE_STAFF_FAIL,
    STAFF_LIST_REQUEST,
    STAFF_LIST_SUCCESS,
    STAFF_LIST_FAIL,
    STAFF_DETAILS_REQUEST,
    STAFF_DETAILS_SUCCESS,
    STAFF_DETAILS_FAIL,
    STAFF_COUNT_REQUEST,
    STAFF_COUNT_SUCCESS,
    STAFF_COUNT_FAIL
} from '../constants/staffConstants'


export const addStaffReducer=(state={},action)=>{
    switch(action.type){
        case ADD_STAFF_REQUEST:
            return {loading:true}
        case ADD_STAFF_SUCCESS:
            return { loading:false,staff:action.payload}
        case ADD_STAFF_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const staffListReducer=(state={},action)=>{
    switch(action.type)
    {
        case STAFF_LIST_REQUEST:
            return {loading:true}
        case STAFF_LIST_SUCCESS:{
            return {loading:false,staff:action.payload}
        }
        case STAFF_LIST_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}


export const deleteStaffReducer =(state={deleting:false},action)=>{
    switch(action.type)
    {
        case DELETE_STAFF_REQUEST:{
            return {deleting:true}
        }
        case(DELETE_STAFF_SUCCESS):{
            return{deleting:false, success:true}
        }
        case(DELETE_STAFF_FAIL): {
            return{deleting:false,error:action.payload}
        }
        default:
            return state
    }
}

export const staffProfileReducer =(state={},action)=>{
    switch(action.type)
    {
        case STAFF_DETAILS_REQUEST:{
            return{loading:true}
        }
        case STAFF_DETAILS_SUCCESS:{
            return{ loading:false, staff:action.payload}
        }
        case STAFF_DETAILS_FAIL:{
            return{loading:false, error:action.payload}
        }
        default:
            return state
    }
}

export const updateStaffReducer =(state={}, action)=>{
    switch(action.type)
    {
        case UPDATE_STAFF_REQUEST:{
            return {updateLoading:true}
        }
        case UPDATE_STAFF_SUCCESS:{
            return {updateLoading: false, updatedStaff:action.payload}
        }
        case UPDATE_STAFF_FAIL:{
            return {updateLoading:false, error:action.payload}
        }
        default:
            return state;
    }
}

export const staffCountReducer = (state={},action)=>{
    switch(action.type){
        case STAFF_COUNT_REQUEST:{
            return{staffLoading:true}
        }
        case STAFF_COUNT_SUCCESS:{
            return{staffLoading:false,staffCount:action.payload}
        }
        case STAFF_COUNT_FAIL:{
            return{staffLoading:false, error:action.payload}
        }
        default:
            return state;
    }
}
