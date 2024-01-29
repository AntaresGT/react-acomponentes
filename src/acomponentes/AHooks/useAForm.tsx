import { useState, useCallback } from 'react'

interface ValoresIniciales {
  [key: string]: any
}

interface ReglasValidacion {
  [key: string]: (value: any) => string | null
}

interface UseAFormReturn {
  /** Valores iniciales del AForm */
  valores: ValoresIniciales
  /** Errores de validación */
  errores: { [key: string]: string | null }
  /** Fija el valor de un campo */
  fijarValor: (campo: string, valor: any) => void
  /** Obtiene las propiedades de un input */
  obtenerPropiedadesInput: (campo: string, config?: { type?: string }) => {
    value: any
    cambioTexto: (e: string | boolean) => void
    error: string | null
  }
  /** Envía el formulario */
  enviar: (callback: (valores: ValoresIniciales) => void) => (e: React.FormEvent) => void,
  reiniciar: () => void
}

export function useAForm(valoresIniciales: ValoresIniciales, validacion: ReglasValidacion): UseAFormReturn {
  const [valores, setValores] = useState<ValoresIniciales>(valoresIniciales)
  const [errores, setErrores] = useState<{ [key: string]: string | null }>({})

  const fijarValor = useCallback((campo: string, valor: any) => {
    setValores(valoresActuales => ({ ...valoresActuales, [campo]: valor }))
  }, [])

  const validar = useCallback(() => {
    const nuevosErrores: { [key: string]: string | null } = {}
    Object.keys(validacion).forEach((campo) => {
      const valor = valores[campo]
      const regla = validacion[campo]
      const mensajeError = regla ? regla(valor) : null
      nuevosErrores[campo] = mensajeError
    })
    setErrores(nuevosErrores)
    return nuevosErrores
  }, [valores, validacion])

  const enviar = useCallback((callback: (valores: ValoresIniciales) => void) => (e: React.FormEvent) => {
    e.preventDefault()
    const nuevosErrores = validar()
    if (Object.values(nuevosErrores).every(error => error === null)) {
      callback(valores)
    }
  }, [valores, validar])

  const obtenerPropiedadesInput = useCallback((campo: string, config: { type?: string } = {}) => {
    return {
      value: valores[campo],
      cambioTexto: (e: string | boolean) => {
        fijarValor(campo, e)
      },
      error: errores[campo],
    }
  }, [valores, errores, fijarValor])

  const reiniciar = useCallback(() => {
    setValores(valoresIniciales)
    setErrores({})
  }, [valoresIniciales])

  return { valores, errores, fijarValor, obtenerPropiedadesInput, enviar, reiniciar }
}
