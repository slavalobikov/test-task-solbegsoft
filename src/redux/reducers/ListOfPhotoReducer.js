import {api} from "../../api/api";

const SET_LIST_OF_PHOTO = 'SET_LIST_OF_PHOTO/ListOFPhotoReducer'
const SET_IS_FETCHING = 'SET_IS_FETCHING/ListOFPhotoReducer'

let initialState = {
    isFetching: null,
    listOfPhoto: [],
}

const ListOfPhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_OF_PHOTO: {
            return {
                ...state,
                listOfPhoto: action.photos
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state
    }
}

const setPhotos = (photos) => ({type: SET_LIST_OF_PHOTO, photos})
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export const setListofPhotos = () => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await api.getListOfPhoto()
    if (response.status === 200) {
        dispatch(setPhotos(response.data))
    }
    dispatch(setIsFetching(false))
}

export default ListOfPhotoReducer;