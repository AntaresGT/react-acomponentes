import React from "react";
import './ABoton.css';

/**
 * @typedef PropsABoton
 * @property {MouseEvent} botonPresionado Evento que se ejecuta cuando se presiona el botón
 * @property {boolean} [visible] Si es true, se muestra el botón, si es false, no se muestra
 * @property {string} [className] Propiedad que le da estilos al botón
 * @property {"button"|"submit"|"reset"} [tipoBoton] Tipo de botón que se va a mostrar
 * @property {"primario"|"secundario"|"ok"|"peligro"|"link"} [tipoBotonColor] Le da color al boton
 * @property {StyleSheet} [estilos] Propiedad que le da estilos al botón
 * @extends {React.Component<PropsABoton>}
 */
class ABoton extends React.Component{

    constructor(props){
        super(props);
    }

    /**
     * Esta funcion envia el evento al componente padre
     * @param {MouseEvent} e Evento que se ejecuta cuando se presiona el botón
     */
    _botonPresionado(e){
        e.preventDefault();
        this.props.botonPresionado(e);
    }

    render(){
        let visible = true;
        let tipoBotonColor = "primario";

        if(this.props.hasOwnProperty('visible')){
            visible = this.props.visible;
        }

        if(this.props.hasOwnProperty('tipoBotonColor')){
            tipoBotonColor = this.props.tipoBotonColor;
        }
        
        if(visible){
            return (
                <button
                    className={"aboton " + tipoBotonColor + " " + this.props.className}
                    type={this.props.tipoBoton || "button"}
                    style={this.props.estilos}
                    onClick={(e) => this._botonPresionado(e)}
                >
                    {this.props.children}
                </button>
            );
        }
        else{
            return <></>;
        }
    }
}

export default ABoton;