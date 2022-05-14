import React from 'react';
import './ATabla.css';

/**
 * @typedef PropsATabla
 * @property {string} [className] Clase CSS para el componente.
 * @property {Array<string|React.Component|number>} [encabezados] Texto o componente que se mostrará en el encabezado de la tabla.
 * @property {Array<Array<string|React.Component|number>>} [datos] Datos que se mostrarán en la tabla.
 * @property {string} [classNameFila] Clase CSS para las filas de la tabla.
 * @property {StyleSheet} [estilosFila] Estilos CSS para las filas de la tabla.
 * @property {string} [classNameCelda] Clase CSS para las celdas de la tabla.
 * @property {StyleSheet} [estilosCelda] Estilos CSS para las celdas de la tabla.
 * @property {string} [classNameDatos] Clase CSS para los datos de la tabla.
 * @property {StyleSheet} [estilosDatos] Estilos CSS para los datos de la tabla.
 * @extends {React.Component<PropsATabla>}
 */
class ATabla extends React.Component {

    render() {
        let visible = true;

        if (this.props.hasOwnProperty('visible')) {
            visible = this.props.visible;
        }

        if (visible) {
            return (
                <div className={"atabla " + this.props.className}>
                    <table className='atabla-tabla'>
                        <thead className='atabla-cabeceras'>
                            <tr>
                                {
                                    this.props.encabezados.map((objeto, indice) => {
                                        return (
                                            <th className='atabla-cabecera' key={indice}>
                                                {objeto}
                                            </th>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody className={'atabla-contenido ' + this.props.classNameDatos} style={this.props.estilosDatos}>
                            {
                                this.props.datos.map((fila, indice) => {
                                    return (
                                        <tr
                                            key={indice}
                                            className={"atabla-fila " + this.props.classNameFila}
                                            style={this.props.estilosFila}
                                        >
                                            {
                                                fila.map((objeto, indice) => {
                                                    return (
                                                        <td
                                                            className={'atabla-celda ' + this.props.classNameCelda}
                                                            key={indice}
                                                            style={this.props.estilosCelda}
                                                        >
                                                            {objeto}
                                                        </td>
                                                    );
                                                })
                                            }
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
        else {
            return <></>;
        }
    }
};

export default ATabla;