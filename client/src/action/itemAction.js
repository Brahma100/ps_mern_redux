import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOAD } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items').then(res =>
        dispatch({
            type: GET_ITEM,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
export const addItem = item => (dispatch, getState) => {
    const token = getState().auth.token;
    // console.log("Token from load User", token);

    // Header
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (token) {
        config.headers['x-auth-token'] = token;
        axios.post('api/items', item, config)
            .then(res => dispatch({
                type: ADD_ITEM,
                payload: res.data
            })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }
};

export const deleteItem = id => (getState, dispatch) => {
    console.log("Id of Item", id);
    const token = getState().auth.token;
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    if (token) {
        config.headers['x-auth-token'] = token;
        console.log("Action Product Id", id);
        axios.delete(`api/items/${id}`, config).then(
            res => dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOAD
    };
}