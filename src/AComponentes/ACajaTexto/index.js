import React from "react";
import PropTypes from "prop-types";
import AControl from './../AUtileriaComponentes/AControl';
import './ACajaTexto.css';

// Componentes
import AEtiqueta from '../AEtiqueta';

class ACajaTexto extends React.Component {

    /**
     * @constructor
     * @param {Object} props Objeto que llena automaticamente react
     * @param {boolean} [props.visible] Si es true, se muestra la etiqueta, si es false, no se muestra
     * @param {string} props.valor Valor que se muestra en el control
     * @param {FunctionStringCallback} [props.cambioTexto] Función que se ejecuta cuando se cambia el texto
     * @param {string} [props.titulo] Texto que se mostrará en la etiqueta
     * @param {IconType} [props.icono] Icono que se mostrará junto al texto
     * @param {StyleSheet} [props.estilos] Propiedad que le da estilos al contenedor
     * @param {string} [props.tipo] Propiedad que le dice al control si es de tipo texto o password o email, etc.
     * @param {boolean} [props.requerido] Si es true, se marca como obligatorio
     * @param {string} [props.expRegular] Expresión regular que se aplicará al texto
     * @param {string} [props.className] Propiedad que le da estilos al contenedor
     * @param {string} [props.classNameTitulo] Propiedad que le da estilos al titulo
     * @param {string} [props.estilosTitulo] Propiedad que le da estilos al titulo
     * @param {string} [props.classNameTexto] Propiedad que le da estilos a la caja de texto (input)
     * @param {string} [props.estilosTexto] Propiedad que le da estilos a la caja de texto (input)
     * @param {string} [props.classNameError] Propiedad que le da estilos al texto de error
     * @param {string} [props.estilosError] Propiedad que le da estilos al texto de error
     * @param {string} [props.placeholder] Texto que se muestra en el control cuando no hay texto
     */
    constructor(props){
        super(props);
        this.state = {
            lbd_error: ""
        };
        this.uuid = AControl.GenerarUuidControl();
    }

    get TipoAControl(){
        return "ACajaTexto";
    }

    /**
     * Está función envia el texto al padre
     * @param {string} texto Texto que se ingresó en el control
     */
    _cambioTexto(texto){
        if(this.props.hasOwnProperty('cambioTexto')){
            this.props.cambioTexto(texto);
        }
    }

    TituloACajaTexto = () => {
        if(this.props.hasOwnProperty('titulo')){
            return (
                <AEtiqueta
                    para={this.uuid}
                    className={this.props.classNameTitulo}
                    estilos={this.props.estilosTitulo}
                >
                    {this.props.titulo}
                </AEtiqueta>
            );
        }
        else{
            return <></>;
        }
    }

    TextoError = () => {
        if(this.state.lbd_error === ""){
            return <></>;
        }
        else{
            return(
                <AEtiqueta
                    className={"acajatexto-error " + this.props.classNameError}
                    estilos={this.props.estilosError}
                >
                    Error
                </AEtiqueta>
            );
        }
    }

    render(){
        let visible = true;

        if(this.props.hasOwnProperty('visible')){
            visible = this.props.visible;
        }

        if(visible){
            return(
                <div
                    className={"acajatexto " + this.props.className}
                    style={this.props.estilos}
                >
                    <this.TituloACajaTexto />
                    <div className="acajatexto-contenedor">
                        <input
                            required={this.props.requerido}
                            value={this.props.valor}
                            type={this.props.tipo || "text"}
                            name={this.uuid}
                            id={this.uuid}
                            className={"acajatexto-txt " + this.props.classNameTexto}
                            onChange={(e) => {e.preventDefault(); this._cambioTexto(e.target.value)}}
                            pattern={this.props.expRegular}
                            placeholder={this.props.placeholder}
                            style={this.props.estilosTexto}
                        />
                        {
                            this.props.hasOwnProperty('icono') &&
                            <div className="acajatexto-contenedor-icono">
                                {this.props.icono}
                            </div>
                        }
                    </div>
                    <this.TextoError />
                </div>
            );
        }
        else{
            return <></>;
        }
    }
};


/** Validacion de tipos */
ACajaTexto.propTypes = {
    visible: PropTypes.bool,
    valor: PropTypes.string.isRequired,
    cambioTexto: PropTypes.func,
    titulo: PropTypes.string,
    icono: PropTypes.element,
    estilos: PropTypes.object,
    tipo: PropTypes.string,
    requerido: PropTypes.bool,
    expRegular: PropTypes.string,
    className: PropTypes.string,
    classNameTitulo: PropTypes.string,
    estilosTitulo: PropTypes.object,
    classNameTexto: PropTypes.string,
    estilosTexto: PropTypes.object,
    classNameError: PropTypes.string,
    estilosError: PropTypes.object,
    placeholder: PropTypes.string
}

export default ACajaTexto;