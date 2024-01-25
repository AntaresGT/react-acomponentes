import './../aconstantes.css'
import './aboton.css'

import React, { 
    useImperativeHandle,
    useRef,
    useId
} from 'react'

export interface IABotonProps{
    /** Contenido del abotón */
    children?: React.ReactNode
    /** Tipo de botón */
    tipoBoton?: 'button' | 'submit' | 'reset'
    /** Clase CSS del componente */
    className?: string
    /** Estilos del componente */
    estilos?: React.CSSProperties
    /** Indica si el componente es visible o no */
    visible?: boolean
    /** Indica si el componente está deshabilitado */
    habilitado?: boolean
    /** Color del aboton, si escogen personalizado, simplemente no agrega color al aboton, deja todo por defecto */
    color?: 'azul' | 'rojo' | 'verde' | 'celeste' | "personalizado"
    /** TabIndex del ABoton */
    tabIndice?: number
    /** Pone el foco en el aboton */
    autoFoco?: boolean
    /** Evento que se lanza cuando se presiona el botón */
    botonPresionado?: () => void
}

export interface IABotonRef {
    /** Tipo de AComponente */
    TipoAControl: () => "ABoton";
    /** Pone el foco en el aboton */
    foco: () => void;
}

const ABoton = React.forwardRef<IABotonRef, IABotonProps>(
    function(
        props,
        ref
    ){
        const id = useId()
        const boton = useRef<HTMLButtonElement>(null)

        useImperativeHandle(
            ref,
            () => ({
                TipoAControl: () => "ABoton",
                foco: () => {
                    boton.current?.focus()
                }
            })
        )

        const botonPresionado = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            if(props.botonPresionado){
                props.botonPresionado()
            }
        }

        let tipoBotonColor = props.color ?? "azul";
        let visible = props.visible ?? true;

        return (
            <button
                key={id}
                id={id}
                name={id}
                ref={boton}
                className={`aboton aboton-${tipoBotonColor} ${props.className ?? ""} ${visible ? "" : "aboton-no-visible"} ` + (props.hasOwnProperty('habilitado') ? props.habilitado ? "" : "aboton-desactivado" : "")}
                type={props.tipoBoton ?? "button"}
                style={props.estilos}
                onClick={botonPresionado}
                tabIndex={props.tabIndice}
                disabled={(props.hasOwnProperty("habilitado") ? !props.habilitado : false)}
                autoFocus={props.autoFoco}
            >
                {props.children}
            </button>
        );
    }
)

export default ABoton;