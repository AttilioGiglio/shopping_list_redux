import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/producto_actions'

const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;
    const dispatch = useDispatch();

    // Confirmar si desea eliminar
    const confirmarEliminarProducto = id => {

        // preguntar al usuario

        // pasarlo al action
        dispatch( borrarProductoAction(id) )

    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className='font-weight-bold'>{precio}</span></td>
            <td className='acciones'>
            <Link to={`/productos/editar/${id}`} className='btn btn-primary mr-2' >Editar</Link>
            <button onClick={()=>confirmarEliminarProducto(id)} type='button' className='btn btn-danger'> Eliminar </button>
            </td>
        </tr>
    )
}

export default Producto
