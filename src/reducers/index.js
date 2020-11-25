import { combineReducers } from 'redux';
import productosReducer from './productos_reducer';
import alertaReducer from './alerta_reducer';

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});