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
    MEMBER_COUNT_FAIL,
    MEMBER_TRAINING_REQUEST,
    MEMBER_TRAINING_SUCCESS,
    MEMBER_TRAINING_FAIL,
    MEMBER_CARDIO_REQUEST,
    MEMBER_CARDIO_SUCCESS,
    MEMBER_CARDIO_FAIL,
    MEMBER_WEIGHT_REQUEST,
    MEMBER_WEIGHT_SUCCESS,
    MEMBER_WEIGHT_FAIL,
    MEMBER_CARDIOWEIGHT_REQUEST,
    MEMBER_CARDIOWEIGHT_SUCCESS,
    MEMBER_CARDIOWEIGHT_FAIL,
    ALLMEMBERS_LIST_REQUEST,
    ALLMEMBERS_LIST_SUCCESS,
    ALLMEMBERS_LIST_FAIL,
    MEMBER_FEMALE_REQUEST,
    MEMBER_FEMALE_SUCCESS,
    MEMBER_FEMALE_FAIL
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

export const femaleMemberReducer=(state={},action)=>{
    switch(action.type){
        case MEMBER_FEMALE_REQUEST:
            return {loading:true}
        case MEMBER_FEMALE_SUCCESS:
            return { loading:false,members:action.payload}
        case MEMBER_FEMALE_FAIL:
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


export const allMembersListReducer=(state={},action)=>{
    switch(action.type)
    {
        case ALLMEMBERS_LIST_REQUEST:
            return {loading:true}
        case ALLMEMBERS_LIST_SUCCESS:{
            return {loading:false,members:action.payload}
        }
        case ALLMEMBERS_LIST_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}

export const memberTrainingReducer=(state={},action)=>{
    switch(action.type)
    {
        case MEMBER_TRAINING_REQUEST:
            return {loading:true}
        case MEMBER_TRAINING_SUCCESS:{
            return {loading:false,members:action.payload}
        }
        case MEMBER_TRAINING_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}

export const memberCardioReducer=(state={},action)=>{
    switch(action.type)
    {
        case MEMBER_CARDIO_REQUEST:
            return {loading:true}
        case MEMBER_CARDIO_SUCCESS:{
            return {loading:false,members:action.payload}
        }
        case MEMBER_CARDIO_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}

export const memberWeightReducer=(state={},action)=>{
    switch(action.type)
    {
        case MEMBER_WEIGHT_REQUEST:
            return {loading:true}
        case MEMBER_WEIGHT_SUCCESS:{
            return {loading:false,members:action.payload}
        }
        case MEMBER_WEIGHT_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}

export const memberCardioWeightReducer=(state={},action)=>{
    switch(action.type)
    {
        case MEMBER_CARDIOWEIGHT_REQUEST:
            return {loading:true}
        case MEMBER_CARDIOWEIGHT_SUCCESS:{
            return {loading:false,members:action.payload}
        }
        case MEMBER_CARDIOWEIGHT_FAIL:{
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
