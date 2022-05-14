import React from "react";
import AControl from './../AUtileriaComponentes/AControl';
import './ACajaTexto.css';

// Componentes
import AEtiqueta from '../AEtiqueta';

// Utilidades
import AExpReg from "./../AUtileriaComponentes/AExpReg";



/**
 * @typedef PropsACajaTexto
 * @property {boolean} [visible] Si es true, se muestra la etiqueta, si es false, no se muestra
 * @property {string} valor Valor que se muestra en el control
 * @property {FunctionStringCallback} [cambioTexto] Función que se ejecuta cuando se cambia el texto
 * @property {string} [titulo] Texto que se mostrará en la etiqueta
 * @property {IconType} [icono] Icono que se mostrará junto al texto
 * @property {StyleSheet} [estilos] Propiedad que le da estilos al contenedor
 * @property {string} [tipo] Propiedad que le dice al control si es de tipo texto o password o email, etc.
 * @property {boolean} [requerido] Si es true, se marca como obligatorio
 * @property {string} [expRegular] Expresión regular que se aplicará al texto
 * @property {string} [className] Propiedad que le da estilos al contenedor
 * @property {string} [classNameTitulo] Propiedad que le da estilos al titulo
 * @property {string} [estilosTitulo] Propiedad que le da estilos al titulo
 * @property {string} [classNameTexto] Propiedad que le da estilos a la caja de texto (input)
 * @property {string} [estilosTexto] Propiedad que le da estilos a la caja de texto (input)
 * @property {string} [classNameError] Propiedad que le da estilos al texto de error
 * @property {string} [estilosError] Propiedad que le da estilos al texto de error
 * @property {string} [placeholder] Texto que se muestra en el control cuando no hay texto
 * @property {boolean} [autoFocus] Si es true, se pone el foco en el control
 * @extends {React.Component<PropsACajaTexto>}
 */
class ACajaTexto extends React.Component {

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
     * Obtiene el nombre del control
     * @returns {string}
     */
    get Refuuid(){
        return this.uuid;
    }

    /**
     * Está función envia el texto al padre
     * @param {string} texto Texto que se ingresó en el control
     */
    _cambioTexto(texto){
        if(this.props.hasOwnProperty('cambioTexto')){

            let expReg = this.props.expRegular;

            if(expReg !== undefined){
                if(!AExpReg.validarExpresionRegular(expReg, texto)){
                    this.setState({
                        lbd_error: "El texto no cumple con los caracteres validos"
                    });
                }
                else{
                    this.setState({
                        lbd_error: ""
                    });
                }
            }

            this.props.cambioTexto(texto);
        }
    }

    /**
     * Esta función coloca un texto de error en el componente
     * @param {string} err 
     */
    FijarMsjError(err){
        this.setState({
            lbd_error: err
        });
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
                    <div className="acajatexto-contenedor" style={{ width: "100%" }}>
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
                            autoFocus={this.props.autoFocus}
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

export default ACajaTexto;