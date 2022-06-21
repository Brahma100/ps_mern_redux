
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOAD } from '../action/types';

const initialState = {
    items: [],
    itemsLoading: false,
    itemsLoaded: false
}

export default function (state = initialState, action) {
    const { payload } = action; //destructuring action
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state,
                items: payload.products,
                total: payload.total,
                itemsLoading: false,
                itemsLoaded: true
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)

            };
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, payload]

            };
        case ITEMS_LOAD:
            return {
                ...state,
                itemsLoading: true,
                itemsLoaded: false
            };
        default:
            return state;
    }
}