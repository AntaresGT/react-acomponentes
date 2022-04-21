import React from "react";
import "./AEtiqueta.css";

class AEtiqueta extends React.Component{

    /**
     * @constructor
     * @param {Object} props Este objeto lo llena automaticamente react
     * @param {boolean} [props.visible] Si es true, se muestra la etiqueta, si es false, no se muestra
     * @param {string} [props.para] Id del control que se le asignará a la etiqueta
     * @param {string|StyleSheet} [props.estilos] Estilos que se le aplicarán a la etiqueta
     * @param {string} [props.className] Clase que se le aplicará a la etiqueta
     */
    constructor(props){
        super(props);
    }

    render(){
        let visible = true;
        if(this.props.hasOwnProperty('visible')){
            visible = this.props.visible;
        }
        

        if(visible){
            return(
                <label {...this.props} style={this.props.estilos} className={"aetiqueta " + this.props.className} htmlFor={this.props.para}>{this.props.children}</label>
            );
        }
        else{
            return <></>;
        }
    }
}

export default AEtiqueta;