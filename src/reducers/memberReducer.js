import{
    ADD_MEMBER_REQUEST,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_FAIL,
    UPDATE_MEMBER_REQUEST,
    UPDATE_MEMBER_SUCCESS,
    UPDATE_MEMBER_FAIL,
    DELETE_MEMBER_REQUEST,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_FAIL,
    MEMBER_LIST_REQUEST,
    MEMBER_LIST_SUCCESS,
    MEMBER_LIST_FAIL,
    MEMBER_DETAILS_REQUEST,
    MEMBER_DETAILS_SUCCESS,
    MEMBER_DETAILS_FAIL,
    MEMBER_COUNT_REQUEST,
    MEMBER_COUNT_SUCCESS,
    MEMBER_COUNT_FAIL
} from '../constants/memberConstants'


export const addMemberReducer=(state={},action)=>{
    switch(action.type){
        case ADD_MEMBER_REQUEST:
            return {loading:true}
        case ADD_MEMBER_SUCCESS:
            return { loading:false,member:action.payload}
        case ADD_MEMBER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const memberListReducer=(state={},action)=>{
    switch(action.type)
    {
        case MEMBER_LIST_REQUEST:
            return {loading:true}
        case MEMBER_LIST_SUCCESS:{
            return {loading:false,members:action.payload}
        }
        case MEMBER_LIST_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}


export const deleteMemberReducer =(state={deleting:false},action)=>{
    switch(action.type)
    {
        case DELETE_MEMBER_REQUEST:{
            return {deleting:true}
        }
        case(DELETE_MEMBER_SUCCESS):{
            return{deleting:false, success:true}
        }
        case(DELETE_MEMBER_FAIL): {
            return{deleting:false,error:action.payload}
        }
        default:
            return state
    }
}

export const memberProfileReducer =(state={},action)=>{
    switch(action.type)
    {
        case MEMBER_DETAILS_REQUEST:{
            return{loading:true}
        }
        case MEMBER_DETAILS_SUCCESS:{
            return{ loading:false, member:action.payload}
        }
        case MEMBER_DETAILS_FAIL:{
            return{loading:false, error:action.payload}
        }
        default:
            return state
    }
}

export const updateMemberReducer =(state={}, action)=>{
    switch(action.type)
    {
        case UPDATE_MEMBER_REQUEST:{
            return {updateLoading:true}
        }
        case UPDATE_MEMBER_SUCCESS:{
            return {updateLoading: false, updatedMember:action.payload}
        }
        case UPDATE_MEMBER_FAIL:{
            return {updateLoading:false, error:action.payload}
        }
        default:
            return state;
    }
}

export const memberCountReducer = (state={},action)=>{
    switch(action.type){
        case MEMBER_COUNT_REQUEST:{
            return{memberLoading:true}
        }
        case MEMBER_COUNT_SUCCESS:{
            return{memberLoading:false,memberCount:action.payload}
        }
        case MEMBER_COUNT_FAIL:{
            return{memberLoading:false, error:action.payload}
        }
        default:
            return state;
    }
}


export const printReceiptReducer=(state={},action)=>{
    switch(action.type){
        case 'MEMBER_RECEIPT':{
            return{member:action.payload}
        }
        default:
            return state;
    }
}
