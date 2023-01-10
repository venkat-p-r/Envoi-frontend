import {SUBSCRIBE_REGISTER_REQUEST,SUBSCRIBE_REGISTER_SUCCESS,SUBSCRIBE_REGISTER_FAIL,SUBSCRIBE_LIST_REQUEST,SUBSCRIBE_LIST_SUCCESS,SUBSCRIBE_LIST_FAIL,SUBSCRIBE_DELETE_REQUEST ,SUBSCRIBE_DELETE_SUCCESS,SUBSCRIBE_DELETE_FAIL} from "../constants/subscribeConstants"
import axios from "axios"

export const subscriber = (email) => async(dispatch) => {
    try {
        dispatch({
            type: SUBSCRIBE_REGISTER_REQUEST
        })

        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/subscribers', {email}, config)
        dispatch({
            type: SUBSCRIBE_REGISTER_SUCCESS,
            payload: data
        })


      



        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: SUBSCRIBE_REGISTER_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}
export const listSubscribers = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: SUBSCRIBE_LIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/subscribers`,config)
        dispatch({
            type: SUBSCRIBE_LIST_SUCCESS,
            payload: data
        })


       
    } catch (error) {
        dispatch({
            type: SUBSCRIBE_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}
export const DeleteSubscribers = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: SUBSCRIBE_DELETE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/subscribers/${id}`, config) 
        dispatch({
            type: SUBSCRIBE_DELETE_SUCCESS,
                })


       
    } catch (error) {
        dispatch({
            type: SUBSCRIBE_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}