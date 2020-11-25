import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NuevoProducto from './components/nuevo_producto';
import Productos from './components/productos';
import EditarProducto from './components/editar_producto';
// redux
import { Provider } from 'react-redux';
import store from './store'

const App = () => {
return ( 
<Router>
<Provider store={store}>
  <Header />
  <div className='container'>
    <Switch>
      <Route exact path='/' component={Productos} />
      <Route exact path='/productos/nuevo' component={NuevoProducto} />
      <Route exact path='/productos/editar/:id' component={EditarProducto} />
              
    </Switch> 
  </div>
  </Provider>
</Router>
);
}

export default App;
