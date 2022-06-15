import React from 'react'
import Label from '../Label'
import Input from '../Input'
import Usuario from '../../models/Usuario'
import Avatar from '../../models/Avatar'
import Button from '../Button'
import logo from '../Image/img/logoCorretora2.svg'
import logo1 from '../Header/img/casa.svg'
import logo2 from '../Image/img/12.svg'


class NovoUsuario extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: new Usuario(),
            validacao: {
                nomeInvalido: false,
                generoInvalido: false
            },
            primeiraVisaoCompleta: false
        };
    }

    atualizarNome(e) {
        let usuario = this.state.usuario;
        usuario.nome = e.target.value;
        this.setState({
            usuario: usuario
        });
    }

    validar(e) {
        e.preventDefault();
        let usuario = this.state.usuario;

        let validacao = this.state.validacao;
        validacao.nomeInvalido = !usuario.validarNome();

        let mensagem = '';
        let primeiraVisaoCompleta = false;
        if (validacao.nomeInvalido) {
            mensagem = 'Seu nome está inválido!'
        } else {
            primeiraVisaoCompleta = true;
        }
        if (!primeiraVisaoCompleta) {
            this.props.erro(mensagem);
        }

        this.setState({
            validacao: validacao,
            primeiraVisaoCompleta: primeiraVisaoCompleta
        });
    }

    renderizarNome() {
        if (this.state.primeiraVisaoCompleta) {
            return null
        } else {
            return (
                <section>
                    <Label
                        htmlFor="nome"
                        texto="Bem-vindo(a), qual é o seu nome?"
                        valorInvalido={this.state.validacao.nomeInvalido}
                    />
                    <Input
                        id="nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly={this.state.primeiraVisaoCompleta}
                        valorInvalido={this.state.validacao.nomeInvalido}
                        defaultValue={this.state.usuario.nome}
                        onChange={this.atualizarNome.bind(this)}
                    />
                </section>
            )
        }
    }

    renderizarGenero() {
        if (this.state.primeiraVisaoCompleta) {
            return null
        } else {
            return (

                <section>
                    <br />

                    <img className="logo" id='logo' src={logo1} width='380px' height='50px' />

                </section>


            )
        }
    }

    renderizarAvatar() {
        if (this.state.primeiraVisaoCompleta) {
            return (
                <section >
                    <br />
                    <Label
                        texto={<p>  Olá <strong>{this.state.usuario.nome}</strong>, meu nome e <strong>Giovana Silva</strong>, <br /> irei te ajudar na sua melhor escolha. </p>}
                        valorInvalido={this.state.validacao.generoInvalido}
                    />
                    <img className="logo" src={logo} width='200px' height='200px' />
                    <img className="logo" src={logo2} width='200px' height='200px' />
                </section>
            )
        } else {
            return null
        }
    }

    renderizarBotoes() {
        if (this.state.primeiraVisaoCompleta) {
            return (
                <section>
                    <Button
                        texto="Voltar"
                        onClick={e => {
                            e.preventDefault();
                            let usuario = this.state.usuario
                            usuario.avatar = Avatar.obterTodos()[0];
                            this.setState({
                                usuario: usuario,
                                primeiraVisaoCompleta: false
                            });
                        }}
                    />
                    <Button
                        principal
                        texto="Salvar"
                        onClick={e => {
                            e.preventDefault()
                            this.props.onSubmit(this.state.usuario)
                        }}

                    />
                </section>
            )
        } else {
            return (
                <section>
                    <Button
                        principal
                        texto="Próximo"
                        onClick={this.validar.bind(this)}
                    />
                </section>
            )
        }
    }

    render() {
        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    {this.renderizarNome()}
                    {this.renderizarGenero()}
                    {this.renderizarAvatar()}
                    {this.renderizarBotoes()}
                </form>
            </div>
        );
    }
}

export default NovoUsuario;