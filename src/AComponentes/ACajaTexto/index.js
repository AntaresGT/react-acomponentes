import React from "react";
import AControl from './../AUtileriaComponentes/AControl';
import './ACajaTexto.css';

import AEtiqueta from '../AEtiqueta';

class ACajaTexto extends React.Component {

    /**
     * @constructor
     * @param {Object} props Objeto que llena automaticamente react
     * @param {boolean} [props.visible] Si es true, se muestra la etiqueta, si es false, no se muestra
     * @param {string} [props.titulo] Texto que se mostrará en la etiqueta
     * @param {IconType} [props.icono] Icono que se mostrará junto al texto
     */
    constructor(props){
        super(props);

        this.uuid = AControl.GenerarUuidControl();
    }

    TituloACajaTexto = () => {
        if(this.props.hasOwnProperty('titulo')){
            return (
                <AEtiqueta para={this.uuid}>
                    {this.props.titulo}
                </AEtiqueta>
            );
        }
        else{
            return <></>;
        }
    }

    TextoError = () => {
        return(
            <AEtiqueta className={"acajatexto-error"}>
                Error
            </AEtiqueta>
        );
    }

    render(){
        let visible = true;

        if(this.props.hasOwnProperty('visible')){
            visible = this.props.visible;
        }

        if(visible){
            return(
                <div className="acajatexto">
                    <this.TituloACajaTexto />
                    <div className="acajatexto-contenedor">
                        <input type={this.props.tipo || "text"} name={this.uuid} id={this.uuid} className={"acajatexto-txt"} />
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