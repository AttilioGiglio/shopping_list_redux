import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    // state del componente 
    const [nombre, guardarNombre] = useState('');
    
    const [precio, guardarPrecio] = useState(0);

    // utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //  mandar llamar el action de productoAction
    const agregarProducto = () => dispatch(crearNuevoProductoAction)

    //  cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        //  validar formulario

        //  si no hay errores

        // crear el nuevo producto
        agregarProducto();
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            <h1>NuevoProducto</h1>
                        </h2>
                        <form onSubmit={ submitNuevoProducto } >
                        <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input 
                                    type='number'
                                    className='form-control'
                                    placeholder='Precio producto'
                                    name='precio'
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                        </form>
                        <button type='submit' className='btn btn-primary font-weight text-uppercase d-block w-100' > Agregar </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;
