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
export const addItem = item => dispatch => {
    axios.post('api/add_product', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => dispatch => {
    console.log("Id of Item", id);
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    const body = JSON.stringify({ id });
    console.log("Action Product Id", id);
    axios.post('api/delete', body, config).then(
        res => dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOAD
    };
}