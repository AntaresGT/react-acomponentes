import React from 'react';
import './ACheckBox.css';
import AControl from './../AUtileriaComponentes/AControl';

/**
 * @typedef PropsACheckBox
 * @property {string} [texto] Texto que se muestra a la par checkbox
 * @property {StyleSheet} [estilos] Estilos CSS para el componente
 * @property {boolean} [visible] Si es true se muestra, si es false no se muestra
 * @property {string} [className] Clase css que se le pone al componente
 * @property {boolean} valor Si es true se marca, si es false no se marca
 * @property {import('react').ChangeEvent} cambioCheck Función que se ejecuta al cambiar el checkbox
 * @extends {React.Component<PropsACheckBox>}
 */
class ACheckBox extends React.Component{

    constructor(props){
        super(props);
        this.uuidAControl = AControl.GenerarUuidControl();
    }

    _acheckbox_cambia(){
        this.props.cambioCheck(!this.props.valor);
    }

    render(){
        let visible = true;

        if(this.props.hasOwnProperty('visible')){
            visible = this.props.visible;
        }

        if(visible){
            return(
                <label
                    className={'acheckbox ' + this.props.className}
                    htmlFor={this.uuidAControl}
                    style={this.props.estilos}
                >
                    {this.props.texto}
                    <input
                        type="checkbox"
                        name={this.uuidAControl}
                        id={this.uuidAControl}
                        checked={this.props.valor}
                        onChange={() => this._acheckbox_cambia()}
                    />
                    <span className='checkmark'></span>
                </label>
            );
        }
        else{
            return <></>;
        }
    }
}

export default ACheckBox;