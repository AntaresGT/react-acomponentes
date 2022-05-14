import IconoMan from './../../Recursos/Imagenes/icono_man.png';
import './ALogoCarga.css';

/**
 * Este componente muestra una imagen de carga, mientras se hacen acciones que lleven tiempo
 * @param {Object} props Este parametro lo llena automaticamente con los datos que se le pasan al componente
 * @param {string} [props.className] Clase CSS
 * @param {boolean} props.visible Si es true, se muestra el componente, si es false, no se muestra
 * @param {string} props.texto Texto que se muestra en el componente mientras gira la imagen
 * @returns {React.Component}
 */
function ALogoCarga(props) {

    return(
        <>
            {
                props.visible &&
                <div
                    className={"alogocarga " + (props.className || "")}
                >
                    <div className='alogocarga-contenedor'>
                        <div>
                            <div className='alogocarga-imagen'>
                                <img src={IconoMan} alt='Logo de carga' />
                            </div>
                            <div className='alogocarga-texto'>
                                {props.texto}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ALogoCarga;