import React from 'react';
import "./ABoton.css";

interface ABotonProps {
    /** Evento que se ejecuta cuando se presiona el aboton */
    botonPresionado: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    /** Si es true, se muestra el botón, si es false, no se muestra */
    visible?: boolean,
    /** Propiedad que le da estilos al botón */
    className?: string,
    /**  Tipo de botón que se va a mostrar */
    tipoBoton?: "button" | "submit" | "reset",
    /** Le da color al boton */
    tipoBotonColor?: "primario" | "secundario" | "ok" | "peligro" | "link",
    /** Propiedad que le da estilos al botón */
    estilos?: React.CSSProperties,
    /** Contenido del botón */
    children: React.ReactNode
}

function ABoton(props: ABotonProps) {

    let visible:boolean|undefined = true;
    let tipoBotonColor:string|undefined = "primario";

    if (props.hasOwnProperty('visible')) {
        visible = props.visible;
    }

    if (props.hasOwnProperty('tipoBotonColor')) {
        tipoBotonColor = props.tipoBotonColor;
    }

    const botonPresionado_Click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        props.botonPresionado(e);
    }

    if (visible) {
        return (
            <button
                className={"aboton " + (tipoBotonColor || "") + " " + (props.className || "")}
                type={props.tipoBoton || "button"}
                style={props.estilos}
                onClick={(e) => botonPresionado_Click(e)}
            >
                {props.children}
            </button>
        );
    }
    else {
        return <></>;
    }
}


export default ABoton;