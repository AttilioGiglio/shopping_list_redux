import React, { Fragment, useEffect } from 'react';
import Producto from './producto'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/producto_actions';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        // consultar la API

        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
        
    }, [])

    const productos = useSelector( state => state.productos.productos );
    console.log(productos)

    return (
        <Fragment>
       <h2 className='text-center my-5'>Listado de Productos</h2>
       <table className='table table-striped'>
       <thead className='bg-primary table-dark'>
        <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Acciones</th>
        </tr>
       </thead>
       <tbody>
       {productos.length === 0 ? 'No hay productos' : (
           productos.map(producto => (
               <Producto 
               key={producto.id}
               producto={producto}
               />
           ))
       )}
       </tbody>
       </table>     
        </Fragment>
    )
}

export default Productos
