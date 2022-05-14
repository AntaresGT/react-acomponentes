import React from "react";
import './APanel.css';

/**
 * @typedef PropsAPanel
 * @property {string} className Clase CSS
 * @property {string} classNameFondo Clase CSS del fondo
 * @property {string} classNameTitulo Clase CSS del titulo
 * @property {boolean} visible Si es visible se muestra el modal
 * @property {boolean} [transparente] Si es transparente no muestra un fondo de lo contrario el fondo se pone con un color negro transparente, por defecto es false
 * @property {string} titulo Título del panel
 * @extends {React.Component<PropsAPanel>}
 * Esta clase es una componente que se sobre pone por encima de todo el HTML
 * actuando como un modal
 */
class APanel extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                {
                    this.props.visible &&
                    <div
                        className={"apanel-fondo " + this.props.classNameFondo}
                        style={{
                                background: this.props.transparente ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)',
                            }}
                    >
                        <div
                            className={"apanel " + this.props.className}
                        >
                            <div
                                className={"apanel-titulo " + this.props.classNameTitulo}
                            >
                                <p>{this.props.titulo}</p>
                            </div>
                            <div
                                className={"apanel-contenido " + this.props.className}
                            >
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default APanel;