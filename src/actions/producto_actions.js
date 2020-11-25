import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//  Crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        // intento agregar un producto, si se puede cambia el estado a true
        dispatch( agregarProducto() );
        try {
            //  insertar producto en la API
            await clienteAxios.post('/hola', producto);
            //  se agrega el producto
            dispatch( agregarProductoExito() );
            // Alerta de exito
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )
        }catch(error){
            console.log(error)
            // no se pudo agregar el producto, y por ende cambiar el state
            dispatch( agregarProductoError(true) );
        // alerta de error
        Swal.fire({
            icon:'error',
            title:'Hubo un error',
            text: 'Hubo un error, intenta de nuevo'
        })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// creo la action de agregar y guardar un producto en la base de datos
const agregarProductoExito = producto => ({
    //  para identificar la accion que se quiere ejecutar
    type: AGREGAR_PRODUCTO_EXITO,
    // para realizar la modificacion
    payload: producto
})

// si hay un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})