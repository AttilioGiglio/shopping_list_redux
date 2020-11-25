import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NuevoProducto from './components/nuevo_producto';
import Productos from './components/productos';
import EditarProducto from './components/editar_producto';

const App = () => {

return (
<Router>
  <Header />
  <div className='container'>
    <Switch>
      <Route exact path='/' component={Productos} />
      <Route exact path='/productos/nuevo' component={NuevoProducto} />
      <Route exact path='/productos/editar/:id' component={EditarProducto} />
              
    </Switch> 
  </div>
</Router>
);
}

export default App;
