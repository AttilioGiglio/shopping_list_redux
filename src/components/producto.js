import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/producto_actions'
import Swal from 'sweetalert2'

const Producto = ({producto}) => {
    
    
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory();
    // habilitar history para redireccion

    // Confirmar si desea eliminar
    const confirmarEliminarProducto = id => {

        // preguntar al usuario
        Swal.fire({
              title: 'estas seguro?',
              text: "un producto que se elimina no se puede recuperar!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, eliminar!',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.isConfirmed) {
                // pasarlo al action
                dispatch( borrarProductoAction(id) )
              }
            })

    }

    //  funcion que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch( obtenerProductoEditar(producto) )
        history.push(`/productos/editar/${id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className='font-weight-bold'>${precio}</span></td>
            <td className='acciones'>
            <button onClick={() => redireccionarEdicion(producto)} className='btn btn-primary mr-2' >Editar</button>
            <button onClick={()=>confirmarEliminarProducto(id)} type='button' className='btn btn-danger'> Eliminar </button>
            </td>
        </tr>
    )
}

export default Producto
