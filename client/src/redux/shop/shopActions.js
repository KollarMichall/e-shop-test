import axios from "axios"
import { ShopActionTypes } from "./shopActionTypes"
import { baseUrl } from "../../constants/baseUrl";


export const getCollectionsStart = () => ({
    type:  ShopActionTypes.GETTING_COLLECTIONS_START
})

export const getCollectionsSuccess = ( collections ) => ({
    type:  ShopActionTypes.GETTING_COLLECTIONS_SUCCESS,
    payload: collections
})

export const getCollectionsFailure = ( errorMessage ) => ({
    type:  ShopActionTypes.GETTING_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const getCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(getCollectionsStart())

        axios.get(`${baseUrl}collections`)
        .then(res => dispatch(getCollectionsSuccess(res.data[0])))
        .catch(err => dispatch(getCollectionsFailure(err.message)))
    }
}