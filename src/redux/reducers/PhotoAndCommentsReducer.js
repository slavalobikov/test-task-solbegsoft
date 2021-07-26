import {api} from "../../api/api";

const SET_IS_FETCHING = 'SET_IS_FETCHING/PhotoAndCommentsReducer'
const DELETE_INFO = 'DELETE_INFO/PhotoAndCommentsReducer'
const SET_INFO = 'SET_INFO/PhotoAndCommentsReducer'
const SET_IS_FETCHING_SEND_COMMENT = 'SET_IS_FETCHING_SEND_COMMENT/PhotoAndCommentsReducer'
const ADD_COMMENT ='ADD_COMMENT/PhotoAndCommentsReducer'

let initialState = {
    isFetching: null,
    isFetchingSendComment: null,
    info: []
}

const PhotoAndCommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case DELETE_INFO: {
            return {
                ...state,
                info: []
            }
        }
        case SET_INFO: {
            return {
                ...state,
                info: action.info
            }
        }
        case SET_IS_FETCHING_SEND_COMMENT: {
            return {
                ...state,
                isFetchingSendComment: action.isFetching
            }
        }
        case ADD_COMMENT: {
            let infoCopy = {...state.info}
            infoCopy.comments.push(action.comment)
            return {
                ...state,
                info: infoCopy
            }
        }
        default: return state
    }
}

const setInfo = (info) => ({type: SET_INFO, info})
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
const isFetchingSendComment = (isFetching) => ({type: SET_IS_FETCHING_SEND_COMMENT, isFetching})
const addComment = (comment) => ({type: ADD_COMMENT, comment});


export const setInfoThunk = (id) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await api.getInfoByPhoto(id)
    if (response.status === 200) {
        dispatch(setInfo(response.data))
    }
    dispatch(setIsFetching(false))
}

export const sendCommentThunk = (id, values, comment) => async (dispatch) => {
    dispatch(isFetchingSendComment(true))
    let response = await  api.sendComment(id, values).catch(err => console.log(err))
    if (response.status === 204) {
        dispatch(addComment(comment))
    }
    dispatch(isFetchingSendComment(false))
}

export default PhotoAndCommentsReducer;
