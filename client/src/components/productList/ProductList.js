import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import ProductCard from '../productCard/ProductCard';
import Pagination from '../pagination/Pagination';
import Loader from '../Loader/Loader';
import { connect } from 'react-redux';
import { getItems } from '../../action/itemAction';
// import PropTypes  from 'prop-types';

const ProductList = ({getItems,items, itemsLoading, itemsLoaded }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getItems();
        console.log("Items::",items)
       
    }, [])
    useEffect(() => {
        setProducts(items)
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
            <Pagination />
        </div>
    </>
}
const mapStateToProps = (state) => {
    return ({
        items: state.item.items,
        itemsLoading: state.item.itemsLoading,
        itemsLoaded: state.item.itemsLoaded,
    })
}
export default connect(mapStateToProps, { getItems })(ProductList);
