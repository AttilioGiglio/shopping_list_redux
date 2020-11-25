import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from '../actions/producto_actions';

const NuevoProducto = ({history}) => {

    // state del componente 
    const [nombre, guardarNombre] = useState('');
    
    const [precio, guardarPrecio] = useState(0);

    // utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    //  mandar llamar el action de productoAction
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) )

    //  cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        console.log(e)
        //  validar formulario
            if(nombre.trim() === '' || precio <= 0){
                return;
            }
        //  si no hay errores

        // crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        // redireccionar a home
        history.push('/');
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='text-center mb-4 font-weight-bold'>
                            <h1>NuevoProducto</h1>
                        </div>
                        <form  onSubmit={submitNuevoProducto} >
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
                        <button type='submit' className='btn btn-primary font-weight text-uppercase d-block w-100' > Agregar </button>
                        </form>
                        { cargando ? <p>Cargando...</p> : null }
                        { error ? <p className='alert alert-danger p2 mt-2'>Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;
