import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import ProductCard from '../productCard/ProductCard';
// import Pagination from '../pagination/Pagination';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setItemsLoading } from '../../action/itemAction';

const ProductList = () => {
    const dispatch=useDispatch();
    const {items,itemsLoading, itemsLoaded} =useSelector(state=>state.item)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log("Products:::",items)
        dispatch(setItemsLoading());
    }, [])
    useEffect(() => {
        setProducts(items);
    }, [items])
    return <>
        <div className='container'>
            {itemsLoading ? <Loader /> :
                <article>
                    <div className='product-wrapper'>
                        {products?.length > 0 && products.map(({ _id, ...otherDataPorps }, i) => (
                            <ProductCard key={_id} _id={_id} {...otherDataPorps} />
                        ))}
                    </div>
                </article>
            }
            {/* <Pagination /> */}
        </div>
    </>
}

export default ProductList;
