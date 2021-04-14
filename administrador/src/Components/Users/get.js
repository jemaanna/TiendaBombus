import react from 'react'
import userservice from '../../service/user'

class  getuser extends react.Component{
    state = {
        data: []
    };

    async componentDidMount(){
        this.MostrarUsuario();
    }

    MostrarUsuario = () => {
        userservice.verusers().then(response =>{
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
                                <th>Usuario</th>
                                <th>Contraseña</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Cedula</th> 
                                <th>Celular</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map(users => {
                                    return(
                                        <tr>
                                            <th></th>
                                            <td>{users.usuario}</td>
                                            <td>{users.contrasena}</td>
                                            <td>{users.nombre}</td>
                                            <td>{users.correo_electronico}</td>
                                            <td>{users.cedula}</td>
                                            <td>{users.celular}</td>
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
export default getuser;