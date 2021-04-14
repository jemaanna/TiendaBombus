import React from 'react';
import Getventas from '../../Components/Ventas/getventas'

class  Ventas extends React.Component{
    

    handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
    };


    render(){
       // const active = this.state.isModal ? "is-active" : "";
        return (
            <div class="container is-fluid">
                <br class="mb-5" />
                <div className="columns">
                    <div className="column">
                        <section class="section">
                            <h1 class="title">Ventas Registradas</h1>
                        </section>
                    </div>
                </div>
                
                <br class="mb-5" />
                <Getventas/>
            </div>
        );
    }
    
}

export default Ventas;