import axios from 'axios';

const initialState = {
    user: {}
}

const GET_USER_INFO = "GET_USER_INFO"
const CHANGE_USER_INFO = "CHANGE_USER_INFO"

export function getUserInfo() {
    let userData = axios.get('/auth/me').then( res => {
        return res.data
    })

    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

// sim3 83E
export function changeUserInfo(edit) {
    return {
        type: CHANGE_USER_INFO,
        payload: axios.post(`/me/profile/edit`, edit).then()
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        
        case CHANGE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })

        default: return state
    }
}