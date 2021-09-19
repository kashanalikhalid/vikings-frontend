import {
    VERIFY_RFID_REQUEST,
    VERIFY_RFID_SUCCESS,
    VERIFY_RFID_FAIL

} from "../constants/rfidConstants";

export const verifyRfidReducer=(state={},action)=>{
    switch(action.type){
        case VERIFY_RFID_REQUEST:
            return{loading:true}
        case VERIFY_RFID_SUCCESS:
            return{loading:false, result:action.payload}
        case VERIFY_RFID_FAIL:
            return{loading:false, error:action.payload}
        default:
            return state;
    }

}
