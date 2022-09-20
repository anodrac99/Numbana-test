import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setProducts } from '../store/slices/products.slice';
import '../assets/css/shop.css'
import ProductCard from './ProductCard';

const Shop = () => {

    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    const asc = [...products]

    const ordenarASC = () => {
        asc.sort(function(a,b){
            return a.precio - b.precio
        })
        return dispatch(setProducts(asc));
    }
    const ordenarDESC = () => {
        asc.sort(function(a,b){
            return b.precio - a.precio
        })
        return dispatch(setProducts(asc));
    }
    const ordenarNAM = () => {
        asc.sort(function(a,b){
            return a.nombre.localeCompare(b.nombre)
        })
        return dispatch(setProducts(asc));
    }


    const [ quantity, setQuantity ] = useState(1)

    const [ cart, setCart ] = useState([])

    const saveCart = (product) => {

        setQuantity(quantity + 1)

        let oldCart = JSON.parse(localStorage.getItem('cart')) || []

        
        
        let newProduct = {
            name: product.nombre,
            precio: product.precio,
            cantidad: quantity
        }
        
        setCart(oldCart.concat(newProduct));
        
        localStorage.setItem('cart', JSON.stringify(cart))
        
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>ordenarASC()}>asc</button>
            <button onClick={()=>ordenarDESC()}>desc</button>
            <button onClick={()=>ordenarNAM()}>Nombre</button>
            <div className='products-container'>
                {
                    products.map(product => (
                        <ProductCard key={product.nombre} product={product} saveCart={saveCart}/>
                    ))
                }

            </div>
        </div>
    );
};

export default Shop;