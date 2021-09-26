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
import axios from 'axios'
import mongoose from "mongoose";

export const addMember=(Member,Rfid)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:ADD_MEMBER_REQUEST
            })


            const {data}= await axios.post('https://vikings-0.herokuapp.com/admin/data/addmember',Member,{
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
                type:ADD_MEMBER_SUCCESS,
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
                type:ADD_MEMBER_FAIL,
                payload:message
            })
        }
    }
}

export const memberList=(url)=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:MEMBER_LIST_REQUEST
            })
            const {data} = await axios.get(`https://vikings-0.herokuapp.com${url.toString()}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })



            dispatch({
                type:MEMBER_LIST_SUCCESS,
                payload:data
            })
        }
        catch (error) {
            dispatch({
                type:MEMBER_LIST_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            })
        }
    }
}

export const deleteMember=(id,rfid)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:DELETE_MEMBER_REQUEST
            })

            await axios.delete(`https://vikings-0.herokuapp.com/admin/data/deletemember/${id}`,{
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
                type:DELETE_MEMBER_SUCCESS,
            })
        }
        catch(error)
        {
            dispatch({
                type:DELETE_MEMBER_FAIL,
                payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}

export const getMember=(id)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:MEMBER_DETAILS_REQUEST
            })

            const {data}=await axios.get(`https://vikings-0.herokuapp.com/admin/memberprofile/${id}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:MEMBER_DETAILS_SUCCESS,
                payload:data
            })
        }
        catch (error)
        {
            dispatch({
                type:MEMBER_DETAILS_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}

export const updateMember=(id,member,Rfid)=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:UPDATE_MEMBER_REQUEST
            })

            const {data}=await axios.patch(`https://vikings-0.herokuapp.com/admin/updatemember/${id}`,member,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            const {rfid}=await axios.patch(`https://vikings-0.herokuapp.com/admin/updaterfid/${member.rfid}`,Rfid,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:UPDATE_MEMBER_SUCCESS,
                payload:data
            })
        }
        catch(error){
            dispatch({
                type:UPDATE_MEMBER_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}


export const countMember=()=>{
    return async(dispatch)=>{
        try{
            dispatch({
                type:MEMBER_COUNT_REQUEST
            })

            const count=await axios.get('https://vikings-0.herokuapp.com/admin/data/membercount',{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type:MEMBER_COUNT_SUCCESS,
                payload:count
            })
        }
        catch (error) {
            dispatch({
                type:MEMBER_COUNT_FAIL,
                payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }
}


export const printReceipt=(data)=>{
    return async (dispatch)=>{
        dispatch({
            type:'MEMBER_RECEIPT',
            payload:data
        })
    }

}

