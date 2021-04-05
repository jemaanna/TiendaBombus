import React from 'react';
import axios from 'axios'

const url = "http://localhost:4000/viewroles";
class  Roles extends React.Component{
    state = {
        roles: []
    }

    async componentDidMount(){
        this.MostrarRoles();
    }
    MostrarRoles = () => {
        axios.get(url).then(response =>{
            console.log(response.data)
            this.setState({roles: response.data})
        })
    }
    render(){
        return (
            <div class="container is-fluid">
                <br class="mb-5" />
                <div className="columns">
                    <div className="column">
                        <section class="section">
                            <h1 class="title">Productos</h1>
                        </section>
                    </div>
                </div>
                
                <br class="mb-5" />
                <div class="table-container is-fluid m-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tipo</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.roles.map(Roles => {
                                    return(
                                        <tr>
                                            <th></th>
                                            <td>{Roles.tipo}</td>
                                            <td><a class="button is-warning">Editar</a> || <a class="button is-danger">Eliminar</a></td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
export default Roles;