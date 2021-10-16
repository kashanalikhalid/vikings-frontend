import{
    DELETE_ATTENDANCE_REQUEST,
    DELETE_ATTENDANCE_SUCCESS,
    DELETE_ATTENDANCE_FAIL,
    ATTENDANCE_LIST_REQUEST,
    ATTENDANCE_LIST_SUCCESS,
    ATTENDANCE_LIST_FAIL,
} from '../constants/attendanceConstants'
import axios from 'axios'


export const attendanceList=(url)=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:ATTENDANCE_LIST_REQUEST
            })
            console.log(url)

            const {data} = await axios.get(`https://vikings-0.herokuapp.com${url.toString()}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:ATTENDANCE_LIST_SUCCESS,
                payload:data
            })
        }
        catch (error) {
            dispatch({
                type:ATTENDANCE_LIST_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            })
        }
    }
}
