import {
    VERIFY_RFID_REQUEST,
    VERIFY_RFID_SUCCESS,
    VERIFY_RFID_FAIL,
    ADD_RFID_REQUEST,
    ADD_RFID_SUCCESS,
    ADD_RFID_FAIL

} from "../constants/rfidConstants";
import axios from 'axios'
import moment from 'moment'

const awaitTimeout = delay =>
    new Promise(resolve => setTimeout(resolve, delay));

export const verifyRfid=(rfid)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:VERIFY_RFID_REQUEST,
            })
            const data=await axios.get(`http://localhost:5000/admin/verifyrfid/${rfid}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            if(data.data.allowed==true)
            {
                await axios.get(`http://localhost:5000/off`,{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                await awaitTimeout(2000)
                await axios.get(`http://localhost:5000/on`,{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
            }

            const member= {date:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
                name:data.data.name,
                reg:data.data._id,
                rfid:data.data.rfid,
                time:moment().format('LLLL')

            }

            const attendance=axios.post(`https://vikings-0.herokuapp.com/admin/attendance`,member,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })


            dispatch({
                type:VERIFY_RFID_SUCCESS,
                payload:data
            })
        }
        catch(error){
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message

            dispatch({
                type:VERIFY_RFID_FAIL,
                payload:message
            })
        }
    }
}

