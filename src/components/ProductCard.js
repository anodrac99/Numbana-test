import React, { useEffect, useState } from 'react';

const ProductCard = ({product, saveCart}) => {

    return (
        <div className='product-container'>
            <img src={product.banner} alt="" />
            <h5>{product.nombre}</h5>
            <p>{product.calificacion}</p>
            <p>{product.precio}</p>
            <p>{product.tipo_servicio}</p>
            <button onClick={()=>saveCart(product)}>Agregar</button>
        </div>
    );
};

export default ProductCard;