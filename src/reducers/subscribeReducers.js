import {SUBSCRIBE_REGISTER_REQUEST,SUBSCRIBE_REGISTER_SUCCESS,SUBSCRIBE_REGISTER_FAIL,SUBSCRIBE_LIST_REQUEST,SUBSCRIBE_LIST_SUCCESS,SUBSCRIBE_LIST_FAIL,SUBSCRIBE_DELETE_REQUEST ,SUBSCRIBE_DELETE_SUCCESS,SUBSCRIBE_DELETE_FAIL,SUBSCRIBE_LIST_RESET} from "../constants/subscribeConstants"

export const userSubscriberReducer = (state={},action) => {
    switch(action.type) {
        case SUBSCRIBE_REGISTER_REQUEST :
            return {loading : true, }
        case SUBSCRIBE_REGISTER_SUCCESS :
            return {loading : false , userInfo: action.payload}
        case SUBSCRIBE_REGISTER_FAIL :
            return {loading : false , error : action.payload}
           
        default :
        return state  
        }
}
export const subscriberListReducer = (state={subscribers : []},action) => {
    switch(action.type) {
        case SUBSCRIBE_LIST_REQUEST :
            return {loading : true, }
        case SUBSCRIBE_LIST_SUCCESS :
            return {loading : false ,subscribers: action.payload}
        case SUBSCRIBE_LIST_FAIL :
            return {loading : false , error : action.payload}
        case SUBSCRIBE_LIST_RESET : return {subscribers : []}
        default :
        return state  
        }
}
export const suscriberDeleteReducer = (
    state={},action) => {
    switch(action.type) {
        case SUBSCRIBE_DELETE_REQUEST :
            return {loading : true}
        case SUBSCRIBE_DELETE_SUCCESS :
            return {loading : false , success: true}
        case SUBSCRIBE_DELETE_FAIL :
            return {loading : false , error : action.payload}
        default :
        return state  
        }
} 
