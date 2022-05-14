import React from 'react';
import './AMultimedia.css';
import AControl from './../AUtileriaComponentes/AControl';


/**
 * @typedef PropsAMultimedia
 * @property {string} [className] Clase CSS
 * @property {StyleSheet} [estilos] Estilos CSS
 * @extends {React.Component<PropsAMultimedia>}
 */
class AMultimedia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tipoMultimedia: "imagen"
        }
        this.uuidAControl = AControl.GenerarUuidControl();
    }

    /**
     * Esta funcion dibuja en pantalla lo que trae en el archivo
     * @param {File|Blob} archivo Archivo que se va a mostrar en pantalla
     */
    FijarArchivo(archivo) {
        if(archivo instanceof Blob){

            this.setState({ tipoMultimedia: "imagen" });

            setTimeout(() => {
                let archivoBlob = URL.createObjectURL(archivo);
                document.getElementById(this.uuidAControl).src = archivoBlob;
            }, 100);
        }
        else{
            if(archivo.name.endsWith(".mp4")){
                this.setState({ tipoMultimedia: "video" });
            }
            else{
                this.setState({ tipoMultimedia: "imagen" });
            }
    
            setTimeout(() => {
                let archivoBlob = URL.createObjectURL(archivo);
                document.getElementById(this.uuidAControl).src = archivoBlob;
            }, 100);
        }
    }

    render() {
        return(
            <>
                {
                    this.state.tipoMultimedia === "imagen" &&
                    <img id={this.uuidAControl} className={'amultimedia ' + this.className} style={this.props.estilos} alt={"Archivo multimedia."} />
                }
                {
                    this.state.tipoMultimedia === "video" &&
                    <video id={this.uuidAControl} controls autoPlay className={'amultimedia ' + this.className} style={this.props.estilos}>
                        Este navegador no soporta una previsualización del contenido multimedia.
                    </video>
                }
            </>
        );
    }
};

export default AMultimedia;