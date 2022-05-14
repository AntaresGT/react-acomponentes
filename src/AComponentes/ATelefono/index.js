import React from 'react';
import './ATelefono.css';
import ABoton from './../ABoton';
import { FiSearch } from 'react-icons/fi';
import Telefono from './../../Recursos/Imagenes/telefono_blanco.png';

/**
 * @typedef PropsATelefono
 * @property {boolean} [visible] Si el telefono esta visible o no.
 * @property {string} [className] Clase estilos CSS.
 * @property {string} [classNameABotones] Clase estilos CSS para los botones.
 * @property {StyleSheet} [estilosABotones] Estilos CSS para los botones.
 * @property {string} [classNamePublicidad] Clase estilos CSS para la publicidad.
 * @property {StyleSheet} [estilosPublicidad] Estilos CSS para la publicidad.
 * @property {string} titulo Titulo del telefono.
 * @property {string[]} botones Lista de botones a renderizar
 * @property {StyleSheet} [estilos] Estilos CSS.
 * @extends {React.Props<PropsATelefono>}
 */
class ATelefono extends React.Component{

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
                <div className={'atelefono ' + this.props.className} style={this.props.estilos}>
                    <div className='atelefono-contenedor-telefono'>
                        <img src={Telefono} alt='Teléfono' />
                    </div>
                    <div className='atelefono-contenedor-datos'>
                        <div className='atelefono-titulo'>
                            <div className='atelefono-titulo-items'>{this.props.titulo}</div>
                            <FiSearch className='atelefono-titulo-items' />
                        </div>
                        <div className={'atelefono-publicidad ' + this.props.classNamePublicidad} style={this.props.estilosPublicidad}>
                            {this.props.children}
                        </div>
                        <div className='atelefono-botones'>
                            {
                                this.props.botones.map((boton, indice) => {
                                    return(
                                        <ABoton className={'atelefono-boton ' + this.props.classNameABotones} key={indice} estilos={this.props.estilosABotones}>
                                            {boton}
                                        </ABoton>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return <></>;
        }
    }
};

export default ATelefono;