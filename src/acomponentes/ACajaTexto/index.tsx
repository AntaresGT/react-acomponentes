import './../aconstantes.css'
import './acajatexto.css'
import React, { 
    useImperativeHandle,
    useRef,
    useId
} from 'react'

interface ICajaTextoIconoIzquierdaProps{
    /** Clase CSS del componente */
    className?: string
    /** Estilos del componente */
    estilos?: React.CSSProperties
    /** Icono del componente */
    icono?: React.JSX.Element
}

function ACajaTextoIconoIzquierda(
    props: Readonly<ICajaTextoIconoIzquierdaProps>
){
    return(
        <div
            className={props.className}
            style={props.estilos}
        >
            {props.icono}
        </div>
    )
}

interface ICajaTextoTituloProps{
    /** Clase CSS del componente */
    className?: string
    /** Estilos del componente */
    estilos?: React.CSSProperties
    /** Label del componente */
    para?: string
    /** Contenido del label */
    children?: React.ReactNode
}

function ACajaTextoTitulo(
    props: Readonly<ICajaTextoTituloProps>
){
    return(
        <label
            className={props.className}
            style={props.estilos}
            htmlFor={props.para}
        >
            {props.children}
        </label>
    )
}

export interface ICajaTextoProps{
    /** Indica si el componente es visible o no */
    visible?: boolean
    /** ClassName del contenedor del input */
    className?: string
    /** Estilos del contenedor del input */
    estilos?: React.CSSProperties
    /** ClassName del Titulo */
    classNameTitulo?: string
    /** Estilos del titulo */
    estilosTitulo?: React.CSSProperties
    /** Coloca un titulo arriba del input */
    titulo?: string
    /** Es el valor del input */
    valor?: string
    /** Evento de teclear dentro del input */
    cambioValor?: (texto: string) => void
    /** Evento de presionar una tecla dentro del input */
    teclaPresionada?: (tecla: string) => void
    /** Coloca un placeholder dentro del input */
    placeholder?: string
    /** Coloca un icono a la izquierda del input */
    iconoIzquierda?: React.JSX.Element
    /** ClassName IconoIzquierda */
    classNameIconoIzquierda?: string
    /** Estilos IconoIzquierda */
    estilosIconoIzquierda?: React.CSSProperties
    /** Coloca un icono a la derecha del input */
    iconoDerecha?: React.JSX.Element
    /** ClassName IconoDerecha */
    classNameIconoDerecha?: string
    /** Estilos IconoDerecha */
    estilosIconoDerecha?: React.CSSProperties
    /** Tab Index del input */
    tabIndice?: number
    /** Clase del CSS */
    classNameACajaTexto?: string
    /** Estilos del input */
    estilosACajaTexto?: React.CSSProperties
    /** Indica si el componente esta habilitado o no */
    habilitado?: boolean
    /** Tipo de entrada del ACajaTexto */
    tipoEntrada?: "text" | "password" | "number" | "email" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color"
    /** Lista de autocompletado */
    autoCompletado?: string[]
    /** Autofocus */
    autoFoco?: boolean
    /** Evento que se ejecuta cuando quitaron el focus */
    quitoFoco?: () => void
}

export interface ICajaTextoRef{
    TipoAControl: () => "ACajaTexto"
    /** Coloca el focus en el AControl */
    foco: () => void
}

const ACajaTexto = React.forwardRef<ICajaTextoRef, ICajaTextoProps>(
    function ACajaTextoIntero(
        props,
        ref
    ){
        const uuid = useId()
        const inputRef = useRef<HTMLInputElement>(null)

        useImperativeHandle(ref, () => ({
            TipoAControl: () => {
                return "ACajaTexto"
            },
            foco: () => {
                if(inputRef.current){
                    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                    inputRef.current.focus()
                }
            }
        }))

        const cambioTexto = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            if(props.cambioValor){
                props.cambioValor(e.target.value)
            }
        }

        const teclaPresionada = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if(props.teclaPresionada){
                props.teclaPresionada(e.key)
            }
        }

        const quitoFoco = () => {
            if(props.quitoFoco){
                props.quitoFoco()
            }
        }

        return(
            <div
                key={uuid}
                className={`acajatexto ${props.className ?? ""} ${props.hasOwnProperty('visible') ? props.visible ? '' : 'acajatexto-no-visible' : ""}`}
                style={props.estilos}
            >
                {/** Titulo de ACajaTexto */}
                {
                    props.titulo &&
                    <ACajaTextoTitulo
                        className={`acajatexto-titulo ${props.classNameTitulo ?? ''}`}
                        estilos={props.estilosTitulo}
                        para={uuid}
                    >
                        {props.titulo}
                    </ACajaTextoTitulo>
                }

                <div
                    className={`acajatexto-contenedor-input`}
                >
                    {
                        props.iconoIzquierda &&
                        <ACajaTextoIconoIzquierda
                            className={`acajatexto-icono-izquierda ${props.classNameIconoIzquierda ?? ''}`}
                            estilos={props.estilosIconoIzquierda}
                            icono={props.iconoIzquierda}
                        />
                    }
                    <input
                        ref={inputRef}
                        id={uuid}
                        name={uuid}
                        value={props.valor}
                        onChange={cambioTexto}
                        autoFocus={props.autoFoco}
                        style={props.estilosACajaTexto}
                        className={`acajatexto-input ${props.classNameACajaTexto ?? ''}`}
                        placeholder={props.placeholder}
                        tabIndex={props.tabIndice}
                        disabled={!(props.hasOwnProperty('habilitado') ? props.habilitado : true)}
                        type={props.tipoEntrada ?? "text"}
                        list={(props.autoCompletado != undefined) ? `${uuid}-autocompletadoacajatexto` : undefined}
                        autoComplete='off'
                        onBlur={() => quitoFoco()}
                        onKeyDown={teclaPresionada}
                    />

                    {
                        props.iconoDerecha &&
                        <ACajaTextoIconoIzquierda
                            className={`acajatexto-icono-derecha ${props.classNameIconoDerecha ?? ''}`}
                            estilos={props.estilosIconoDerecha}
                            icono={props.iconoDerecha}
                        />
                    }
                </div>
                {/** Autocompletado lista */}
                {
                    (props.autoCompletado && props.autoCompletado.length > 0) &&
                    <datalist id={`${uuid}-autocompletadoacajatexto`}>
                        {
                            props.autoCompletado.map((item) => {
                                return(
                                    <option key={`${uuid}-autocompletadoacajatexto-${item}`} value={item} />
                                )
                            })
                        }
                    </datalist>
                }
            </div>
        )
    }
)

export default ACajaTexto