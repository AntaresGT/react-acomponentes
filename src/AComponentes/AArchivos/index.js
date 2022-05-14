import React from 'react';
import './AArchivos.css';
import AEtiqueta from './../AEtiqueta';
import AControl from './../AUtileriaComponentes/AControl';
import Swal from 'sweetalert2';


/**
 * 
 * @typedef PropsAArchivos
 * @property {string} texto Texto que se muestra en el control
 * @property {boolean} [visible] Si es true, se muestra la etiqueta, si es false, no se muestra
 * @property {string} [className] Clase CSS del contenedor
 * @property {string} [classNameEtiqueta] Clase CSS de la etiqueta
 * @property {FileCallback} subioArchivo Función que se ejecuta cuando se sube un archivo
 * @extends {React.Component<PropsAArchivos>}
 */
class AArchivos extends React.Component{

    constructor(props){
        super(props);
        this.uuidAControl = AControl.GenerarUuidControl();
    }

    /**
     * @param {string} nombre_archivo Nombre del archivo
     * @returns {boolean} Si es true, es un archivo válido, si es false, no es un archivo válido
     */
    _esArchivoValido(nombre_archivo){
        let extensiones_permitidas = [".mp4", ".png", ".gif", ".jpeg", ".jpg"];
        for(let i = 0; i < extensiones_permitidas.length; i++){
            if(nombre_archivo.toLowerCase().endsWith(extensiones_permitidas[i])){
                return true;
            }
        }

        return false;
    }

    /**
     * Esta funcion se ejecuta cuando se sube un archivo
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    _subieronArchivo(e){
        e.preventDefault();
        if(e.target.files.length > 1){
            Swal.fire("Advertencia", "Solo se puede subir un archivo a la vez", "warning");
        }
        else
        if(e.target.files.length > 0){
            let archivo = e.target.files[0];
            if(this._esArchivoValido(archivo.name)){
                this.props.subioArchivo(archivo);
            }
            else{
                Swal.fire("Advertencia", "El archivo no es válido", "warning");
            }
        }
        else{
            this.props.subioArchivo(new File([], ""));
        }
    }

    render(){
        let visible = true;

        if(this.props.hasOwnProperty("visible")){
            visible = this.props.visible;
        }

        if(visible){
            return(
                <div className={'aarchivos ' + this.props.className}>
                    <input type="file" id={this.uuidAControl} name={this.uuidAControl} accept={"video/mp4, image/png, image/gif, image/jpeg"} className={"aarchivos-input"} onChange={(e) => this._subieronArchivo(e)} />
                    <AEtiqueta
                        para={this.uuidAControl}
                        className={"aarchivos-etiqueta " + this.props.classNameEtiqueta}
                    >{this.props.texto}</AEtiqueta>
                </div>
            );
        }
        else{
            return <></>;
        }
    }
};

export default AArchivos;