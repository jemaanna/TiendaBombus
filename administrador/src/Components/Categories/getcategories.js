import react from 'react'
import categoriaservice from '../../service/categories'

class  getcategories extends react.Component{
    state = {
        data: []
    };

    async componentDidMount(){
        this.MostrarCategoria();
    }

    MostrarCategoria = () => {
        categoriaservice.vercategories().then(response =>{
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
                        <th>Categoria</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            this.state.data.map(categoria => {
                                return(
                                    <tr>
                                        <th></th>
                                        <td>{categoria.categoria}</td>
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
export default getcategories;