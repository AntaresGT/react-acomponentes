import React from "react";
import "./AEtiqueta.css";

import PropTypes from "prop-types";

class AEtiqueta extends React.Component{

    /**
     * @constructor
     * @param {Object} props Este objeto lo llena automaticamente react
     * @param {boolean} [props.visible] Si es true, se muestra la etiqueta, si es false, no se muestra
     * @param {string} [props.para] Id del control que se le asignará a la etiqueta
     * @param {string|StyleSheet} [props.estilos] Estilos que se le aplicarán a la etiqueta
     * @param {string} [props.className] Clase que se le aplicará a la etiqueta
     * @param {string} [props.para] Id del control que se le asignará a la etiqueta
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

AEtiqueta.propTypes = {
    visible: PropTypes.bool,
    para: PropTypes.string,
    children: PropTypes.element.isRequired,
    estilos: PropTypes.object,
    className: PropTypes.string
};

export default AEtiqueta;