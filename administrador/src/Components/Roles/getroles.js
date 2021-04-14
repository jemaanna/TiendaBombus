import react from 'react'
import rolservice from '../../service/roles'

class  getroles extends react.Component{
    state = {
        data: []
    };

    async componentDidMount(){
        this.MostrarRoles();
    }

    MostrarRoles = () => {
        rolservice.verroles().then(response =>{
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
                        <th>Roles</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            this.state.data.map(roles => {
                                return(
                                    <tr>
                                        <th></th>
                                        <td>{roles.tipo}</td>
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
export default getroles;