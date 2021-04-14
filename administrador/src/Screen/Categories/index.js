import React from 'react'
import Getcategoria from '../../Components/Categories/getcategories'

class  Categories extends React.Component{
    state = {
        isModal: false,
        data: []
    };
    handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
    };


    render(){
        const active = this.state.isModal ? "is-active" : "";
        return (
            <div class="container is-fluid">
                <br class="mb-5" />
                <div className="columns">
                    <div className="column">
                        <section class="section">
                            <h1 class="title">Categoria</h1>
                        </section>
                    </div>
                    <div className="column">
                        <section class="section">
                            <button onClick={this.handleClick} className="button is-primary">
                                Agregar Categoria
                            </button>
                        </section>
    
                        <div className={`modal ${active}`}>
                            <div className="modal-background" />
                            <div className="modal-card">
                                <header className="modal-card-head">
                                <p className="modal-card-title">Nuevo Categoria</p>
                                <button
                                    onClick={this.handleClick}
                                    className="delete"
                                    aria-label="close"
                                />
                                </header>
                                <section className="modal-card-body">
                                <div className="field">
                                    <label className="label">Nombre Categoria</label>
                                    <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Ingrese La Categoria"
                                    />
                                    </div>
                                </div>
                                </section>
                                <footer className="modal-card-foot">
                                <button className="button is-success">Agregar</button>
                                <button onClick={this.handleClick} className="button">
                                 Cancelar
                                </button>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br class="mb-5" />
                <Getcategoria/>
            </div>
        );
    }
    
}

export default Categories;