
import React, { FC } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./components/productList/ProductList";
import './App.css';
// import Auth from "./components/auth/Auth";
// import AddProduct from "./components/addproduct/AddProduct";
// import Navbar from "./components/Navbar/Navbar";

const App: FC = () => {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route index element={<ProductList />} />
                {/* <Route path='/auth' element={<Auth />} />
                <Route path='/addItem' element={<AddProduct />} /> */}
            </Routes>
        </Router>

    )
}

export default App