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
import axios from 'axios'


export const addStaff=(Staff,Rfid)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:ADD_STAFF_REQUEST
            })

            const {data}= await axios.post('https://vikings-0.herokuapp.com/admin/data/addstaff',Staff,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            const {rfid}= await axios.post('https://vikings-0.herokuapp.com/admin/data/addrfid',Rfid,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:ADD_STAFF_SUCCESS,
                payload:data,
            })
        }
        catch(error)
        {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message

            dispatch({
                type:ADD_STAFF_FAIL,
                payload:message
            })
        }
    }
}

export const staffList=(url)=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:STAFF_LIST_REQUEST
            })

            const {data} = await axios.get(`https://vikings-0.herokuapp.com${url.toString()}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:STAFF_LIST_SUCCESS,
                payload:data
            })
        }
        catch (error) {
            dispatch({
                type:STAFF_LIST_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            })
        }
    }
}

export const deleteStaff=(id,rfid)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:DELETE_STAFF_REQUEST
            })

            await axios.delete(`https://vikings-0.herokuapp.com/admin/data/deletestaff/${id}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            await axios.delete(`https://vikings-0.herokuapp.com/admin/data/deleterfid/${rfid}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:DELETE_STAFF_SUCCESS,
            })
        }
        catch(error)
        {
            dispatch({
                type:DELETE_STAFF_FAIL,
                payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}

export const getStaff=(id)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:STAFF_DETAILS_REQUEST
            })

            const {data}=await axios.get(`https://vikings-0.herokuapp.com/admin/staffprofile/${id}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:STAFF_DETAILS_SUCCESS,
                payload:data
            })
        }
        catch (error)
        {
            dispatch({
                type:STAFF_DETAILS_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}

export const updateStaff=(id,staff,Rfid,updateRfid)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:UPDATE_STAFF_REQUEST
            })

            const {data}=await axios.patch(`https://vikings-0.herokuapp.com/admin/updatestaff/${id}`,staff,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            const {rfid}=await axios.patch(`https://vikings-0.herokuapp.com/admin/updaterfid/${updateRfid}`,Rfid,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:UPDATE_STAFF_SUCCESS,
                payload:data
            })
        }
        catch(error){
            dispatch({
                type:UPDATE_STAFF_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}


export const countStaff=()=>{
    return async(dispatch)=>{
        try{
            dispatch({
                type:STAFF_COUNT_REQUEST
            })

            const count=await axios.get('https://vikings-0.herokuapp.com/admin/data/staffcount',{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:STAFF_COUNT_SUCCESS,
                payload:count
            })
        }
        catch (error) {
            dispatch({
                type:STAFF_COUNT_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}

