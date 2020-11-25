import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//  Crear nuevos productos

export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        // intento agregar un producto, si se puede cambia el estado a true
        dispatch( agregarProducto() );
        try {
            //  se agrega el producto
            dispatch( agregarProductoExito() );
        }catch(error){
            // no se pudo agregar el producto
            dispatch( agregarProductoError(true) );
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