# react-acomponentes

> Librería de Antares

[![NPM](https://img.shields.io/npm/v/react-acomponentes.svg)](https://www.npmjs.com/package/react-acomponentes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalar

```bash
npm install react-acomponentes
```
```bash
yarn add react-acomponentes
```

## Uso

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-acomponentes'
import 'react-acomponentes/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Licencia

MIT © [Allam López (alan@antaresgt.com)](https://github.com/Allam López (alan@antaresgt.com))


## Dependencias usadas en el proyecto
| Dependencia                       | Documentación                                     | Motivo Uso                                                                            |
| -- | -- | -- |
| react-icons                       | https://react-icons.github.io/react-icons         | Iconos                                                                                |
| uuid                              | https://www.npmjs.com/package/uuid                | Generación de claves                                                                  |
| sweetalert2                       | https://www.npmjs.com/package/sweetalert2         | Se usa para mostrar un mensaje largo en pantalla como alerta                          |