import { all } from "redux-saga/effects";
import { waitForFetchProducts } from "./sagas/product.saga";

export default function* rootSaga() {
  yield all([waitForFetchProducts()]);
}