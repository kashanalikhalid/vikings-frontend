import{
    DELETE_ATTENDANCE_REQUEST,
    DELETE_ATTENDANCE_SUCCESS,
    DELETE_ATTENDANCE_FAIL,
    ATTENDANCE_LIST_REQUEST,
    ATTENDANCE_LIST_SUCCESS,
    ATTENDANCE_LIST_FAIL,
} from '../constants/attendanceConstants'

export const attendanceListReducer=(state={},action)=>{
    switch(action.type)
    {
        case ATTENDANCE_LIST_REQUEST:
            return {loading:true}
        case ATTENDANCE_LIST_SUCCESS:{
            return {loading:false,members:action.payload}
        }
        case ATTENDANCE_LIST_FAIL:{
            return {loading:false, error:action.payload}
        }
        default:
            return state
    }
}
