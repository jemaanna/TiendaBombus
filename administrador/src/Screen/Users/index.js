import React from 'react';
import Getuser from '../../Components/Users/get'

class  Users extends React.Component{
    

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
                            <h1 class="title">Usuarios</h1>
                        </section>
                    </div>
                </div>
                
                <br class="mb-5" />
                <Getuser/>
            </div>
        );
    }
    
}

export default Users;