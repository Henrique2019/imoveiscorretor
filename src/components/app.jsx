import React from 'react';
import Header from './Header';
import NovoUsuario from './NovoUsuario';
import Toast from './Toast';
import Usuario from '../models/Usuario'
import App2 from '../App2';
import '../css/index.css'

class App extends React.Component {
    constructor() {
        super()
        Usuario.obter(usuario => {            
            this.state = {
                usuario: usuario
            };            
        },() => {
            this.state = {
                usuario: undefined
            };            
        });
    }
    msgNovoUsuario(usuario) {
        let genero = usuario.genero == 'm' ? '(a)' : '(a)';
        this.refs.toast.sucesso(
            `Seja bem-vindo${genero} ${usuario.nome}!`
        )
    }
    renderizarNovoUsuario() {
        let usuario = this.state.usuario;        
        if (usuario) {
            return (
                <div style={{marginTop: '140px', textAlign: 'center'}}>
                   <App2 />
                </div>
            )
        } else {
            return (
                <div  >
                <NovoUsuario 
                    onSubmit={usuario => {                        
                        usuario.salvar(() => {
                            this.setState({
                                usuario: usuario
                            }, () => {
                                this.msgNovoUsuario(usuario)
                            })                            
                        });
                    }}
                    erro={msg=>this.refs.toast.erro(msg)}
                />
                </div>
            )
        }      
    }

    render() {
        return (
            <div>
                <Header />
                {this.renderizarNovoUsuario()}
                <Toast ref="toast" />
            </div>
        );
    }
}

export default App;