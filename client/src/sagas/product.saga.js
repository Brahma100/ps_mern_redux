import { takeEvery, call, put } from "redux-saga/effects";
import productsService from "../apis/products.api";
import { getItems } from "../action/itemAction";
import { ITEMS_LOAD } from "../action/types";

function* fetchItems() {
    try {
        const products = yield call(productsService.getAllProducts);

        yield put(getItems(products));
    } catch (e) { }
}

export function* waitForFetchProducts() {
    yield takeEvery(ITEMS_LOAD, fetchItems);
}