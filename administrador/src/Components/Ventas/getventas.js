import react from 'react'
import ventasservice from '../../service/ventas'

class  getventas extends react.Component{
    state = {
        data: []
    };

    async componentDidMount(){
        this.MostrarVentas();
    }

    MostrarVentas = () => {
        ventasservice.verventas().then(response =>{
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
                                <th>Nombre</th>
                                <th>Nombre Producto</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map(carritocompras => {
                                    return(
                                        <tr>
                                            <th></th>
                                            <td>{carritocompras.nombre}</td>
                                            <td>{carritocompras.nom_produc}</td>
                                            <td>{carritocompras.cantidad}</td>
                                            <td>{carritocompras.total}</td>
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
export default getventas;