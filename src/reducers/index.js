import { combineReducers } from 'redux';
import productosReducer from './productos_reducer'

export default combineReducers({
    productos: productosReducer
});