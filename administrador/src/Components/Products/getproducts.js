import react from 'react'
import categoriaservice from '../../service/productos'

class  getproducts extends react.Component{
    state = {
        data: []
    };

    async componentDidMount(){
        this.MostrarProductos();
    }

    MostrarProductos = () => {
        categoriaservice.verproducts().then(response =>{
            console.log(response.data)
            this.setState({data: response.data})
        }).catch(e => {
            console.log(e);
          });
    }
    render(){
        return(
        <div class="table-container is-fluid m-5">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre Producto</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            this.state.data.map(producto => {
                                return(
                                    <tr>
                                        <th></th>
                                        <td>{producto.nom_produc}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.stock}</td>
                                        <td>{producto.descripcion}</td>
                                        <td><a class="button is-warning">Editar</a> || <a class="button is-danger">Eliminar</a></td>
                                    </tr>
                                )
                            })
                        }
                            
                        </tbody>
                    </table>
                </div>
        )
    }
}
export default getproducts;