import React from 'react';
import './ATitulosPantallas.css';

/**
 * @typedef PropsATitulosPantallas
 * @property {string} [className] Clase CSS para el componente.
 * @property {string} [classNameTitulo] Clase CSS para el titulo.
 * @property {StyleSheet} [estilosTitulo] Estilos CSS para el titulo.
 * @property {string} [classNameTelefono] Clase CSS para el telefono.
 * @property {StyleSheet} [estilosTelefono] Estilos CSS para el telefono.
 * @property {boolean} [visible] Indica si el componente debe ser visible o no.
 * @property {string} titulo Titulo que se mostrará en la pantalla.
 * @property {string} telefono Telefono que se mostrará en la pantalla.
 * @property {StyleSheet} [estilos] Estilos CSS para el componente.
 * @extends {React.Component<PropsATitulosPantallas>}
 */
class ATitulosPantallas extends React.Component{

    render(){
        return(
            <div
                className={'atitulospantallas ' + this.props.className}
                style={this.props.estilos}
            >
                <h2 className={this.props.classNameTitulo} style={this.props.estilosTitulo}>{this.props.titulo}</h2>
                <p className={this.props.classNameTelefono} style={this.props.estilosTelefono}>Para asesoría llamar al teléfono: {this.props.telefono}</p>
            </div>
        );
    }
};

export default ATitulosPantallas;