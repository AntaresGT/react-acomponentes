function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = _interopDefault(require('react'));
var uuid = require('uuid');
var fi = require('react-icons/fi');
var Swal = _interopDefault(require('sweetalert2'));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var AControl = /*#__PURE__*/function () {
  function AControl() {
    this.lista_controles = [];
  }

  var _proto = AControl.prototype;

  _proto.GenerarUuidControl = function GenerarUuidControl() {
    var uuidValido = false;
    var contador = 0;
    var uuid$1 = "";

    while (!uuidValido) {
      uuid$1 = uuid.v4();

      if (!this.lista_controles.includes(uuid$1)) {
        uuidValido = true;
        this.lista_controles.push(uuid$1);
        break;
      }

      contador++;

      if (contador > 500) {
        uuid$1 = uuid.v4();
        break;
      }
    }

    return uuid$1;
  };

  return AControl;
}();
var aControl = new AControl();

var AEtiqueta = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(AEtiqueta, _React$Component);

  function AEtiqueta(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = AEtiqueta.prototype;

  _proto.render = function render() {
    var visible = true;

    if (this.props.hasOwnProperty('visible')) {
      visible = this.props.visible;
    }

    if (visible) {
      return /*#__PURE__*/React$1.createElement("label", _extends({}, this.props, {
        style: this.props.estilos,
        className: "aetiqueta " + this.props.className,
        htmlFor: this.props.para
      }), this.props.children);
    } else {
      return /*#__PURE__*/React$1.createElement(Fragment, null);
    }
  };

  return AEtiqueta;
}(React$1.Component);

var AExpReg = /*#__PURE__*/function () {
  function AExpReg() {}

  AExpReg.validarExpresionRegular = function validarExpresionRegular(expreg, str) {
    return expreg.test(str);
  };

  AExpReg.obtenerRegNumeroEntero = function obtenerRegNumeroEntero() {
    return /^[0-9]+$/;
  };

  AExpReg.obtenerExpRegCorreoElectronico = function obtenerExpRegCorreoElectronico() {
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/gm;
  };

  AExpReg.obtenerRegNumeroTelefono = function obtenerRegNumeroTelefono() {
    return /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/gm;
  };

  AExpReg.obtenerRegNumeroTelefonoSinSignoMas = function obtenerRegNumeroTelefonoSinSignoMas() {
    return /((\(?\+[0-9]{1,3}\)? ?-?)|)[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/gm;
  };

  AExpReg.obtenerRegSoloLetrasConEspacios = function obtenerRegSoloLetrasConEspacios() {
    return /^[(a-z|A-Z) áéíóúÁÉÍÓÚ]*$/gm;
  };

  AExpReg.obtenerRegSoloLetrasNumerosConEspacios = function obtenerRegSoloLetrasNumerosConEspacios() {
    return /^[(a-z|A-Z)0-9 \_\-áéíóúÁÉÍÓÚ]*$/gm;
  };

  AExpReg.obtenerRegSoloLetrasConEspaciosAlMenos1Letra = function obtenerRegSoloLetrasConEspaciosAlMenos1Letra() {
    return /^[a-zA-Z áéíóúÁÉÍÓÚ]+$/gm;
  };

  AExpReg.obtenerRegDirecciones = function obtenerRegDirecciones() {
    return /^[(a-z|A-Z) _\.\-,0-9\n\#áéíóúÁÉÍÓÚ]*$/gm;
  };

  AExpReg.obtenerRegNombreNegocio = function obtenerRegNombreNegocio() {
    return /^[(a-z|A-Z) _\.\-,0-9\n\#áéíóúÁÉÍÓÚ]+$/gm;
  };

  AExpReg.obtenerRegContrasena = function obtenerRegContrasena() {
    return /(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/gm;
  };

  AExpReg.obtenerRegParaPin = function obtenerRegParaPin() {
    return /^\d{4,8}/gm;
  };

  AExpReg.obtenerRegParaNumerosCon2Decimales = function obtenerRegParaNumerosCon2Decimales() {
    return /^\d+(\.\d{1,2})?$/gm;
  };

  AExpReg.validarNumeroEntero = function validarNumeroEntero(texto) {
    return AExpReg.obtenerRegNumeroEntero().test(texto);
  };

  AExpReg.validarNumeroCon2Decimales = function validarNumeroCon2Decimales(texto) {
    return AExpReg.obtenerRegParaNumerosCon2Decimales().test(texto);
  };

  AExpReg.validarPin = function validarPin(texto) {
    return AExpReg.obtenerRegParaPin().test(texto);
  };

  AExpReg.validarContrasena = function validarContrasena(contrasena) {
    return AExpReg.obtenerRegContrasena().test(contrasena);
  };

  AExpReg.validarNombreNegocio = function validarNombreNegocio(nombre_negocio) {
    return AExpReg.obtenerRegDirecciones().test(nombre_negocio);
  };

  AExpReg.validarCorreoElectronico = function validarCorreoElectronico(correo) {
    return AExpReg.obtenerExpRegCorreoElectronico().test(correo);
  };

  AExpReg.validarNumeroTelefonico = function validarNumeroTelefonico(telefono) {
    return AExpReg.obtenerRegNumeroTelefono().test(telefono);
  };

  AExpReg.validarNumeroTelefonicoSinSignoMas = function validarNumeroTelefonicoSinSignoMas(telefono) {
    return AExpReg.obtenerRegNumeroTelefonoSinSignoMas().test(telefono);
  };

  AExpReg.validarSoloLetrasConEspacios = function validarSoloLetrasConEspacios(texto) {
    return AExpReg.obtenerRegSoloLetrasConEspacios().test(texto);
  };

  AExpReg.validarSoloLetrasConEspaciosAlMenos1Letra = function validarSoloLetrasConEspaciosAlMenos1Letra(texto) {
    return AExpReg.obtenerRegSoloLetrasConEspaciosAlMenos1Letra().test(texto);
  };

  AExpReg.validarDireccion = function validarDireccion(direccion) {
    return AExpReg.obtenerRegDirecciones().test(direccion);
  };

  AExpReg.validarSoloLetrasNumerosConEspacios = function validarSoloLetrasNumerosConEspacios(texto) {
    return AExpReg.obtenerRegSoloLetrasNumerosConEspacios().test(texto);
  };

  return AExpReg;
}();

var ACajaTexto = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ACajaTexto, _React$Component);

  function ACajaTexto(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.TituloACajaTexto = function () {
      if (_this.props.hasOwnProperty('titulo')) {
        return /*#__PURE__*/React$1.createElement(AEtiqueta, {
          para: _this.uuid,
          className: _this.props.classNameTitulo,
          estilos: _this.props.estilosTitulo
        }, _this.props.titulo);
      } else {
        return /*#__PURE__*/React$1.createElement(Fragment, null);
      }
    };

    _this.TextoError = function () {
      if (_this.state.lbd_error === "") {
        return /*#__PURE__*/React$1.createElement(Fragment, null);
      } else {
        return /*#__PURE__*/React$1.createElement(AEtiqueta, {
          className: "acajatexto-error " + _this.props.classNameError,
          estilos: _this.props.estilosError
        }, "Error");
      }
    };

    _this.state = {
      lbd_error: ""
    };
    _this.uuid = aControl.GenerarUuidControl();
    return _this;
  }

  var _proto = ACajaTexto.prototype;

  _proto._cambioTexto = function _cambioTexto(texto) {
    if (this.props.hasOwnProperty('cambioTexto')) {
      var expReg = this.props.expRegular;

      if (expReg !== undefined) {
        if (!AExpReg.validarExpresionRegular(expReg, texto)) {
          this.setState({
            lbd_error: "El texto no cumple con los caracteres validos"
          });
        } else {
          this.setState({
            lbd_error: ""
          });
        }
      }

      this.props.cambioTexto(texto);
    }
  };

  _proto.FijarMsjError = function FijarMsjError(err) {
    this.setState({
      lbd_error: err
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var visible = true;

    if (this.props.hasOwnProperty('visible')) {
      visible = this.props.visible;
    }

    if (visible) {
      return /*#__PURE__*/React$1.createElement("div", {
        className: "acajatexto " + this.props.className,
        style: this.props.estilos
      }, /*#__PURE__*/React$1.createElement(this.TituloACajaTexto, null), /*#__PURE__*/React$1.createElement("div", {
        className: "acajatexto-contenedor",
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React$1.createElement("input", {
        required: this.props.requerido,
        value: this.props.valor,
        type: this.props.tipo || "text",
        name: this.uuid,
        id: this.uuid,
        className: "acajatexto-txt " + this.props.classNameTexto,
        onChange: function onChange(e) {
          e.preventDefault();

          _this2._cambioTexto(e.target.value);
        },
        pattern: this.props.expRegular,
        placeholder: this.props.placeholder,
        style: this.props.estilosTexto,
        autoFocus: this.props.autoFocus
      }), this.props.hasOwnProperty('icono') && /*#__PURE__*/React$1.createElement("div", {
        className: "acajatexto-contenedor-icono"
      }, this.props.icono)), /*#__PURE__*/React$1.createElement(this.TextoError, null));
    } else {
      return /*#__PURE__*/React$1.createElement(Fragment, null);
    }
  };

  _createClass(ACajaTexto, [{
    key: "TipoAControl",
    get: function get() {
      return "ACajaTexto";
    }
  }, {
    key: "Refuuid",
    get: function get() {
      return this.uuid;
    }
  }]);

  return ACajaTexto;
}(React$1.Component);

var ABoton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ABoton, _React$Component);

  function ABoton(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = ABoton.prototype;

  _proto._botonPresionado = function _botonPresionado(e) {
    e.preventDefault();
    this.props.botonPresionado(e);
  };

  _proto.render = function render() {
    var _this = this;

    var visible = true;
    var tipoBotonColor = "primario";

    if (this.props.hasOwnProperty('visible')) {
      visible = this.props.visible;
    }

    if (this.props.hasOwnProperty('tipoBotonColor')) {
      tipoBotonColor = this.props.tipoBotonColor;
    }

    if (visible) {
      return /*#__PURE__*/React$1.createElement("button", {
        className: "aboton " + tipoBotonColor + " " + this.props.className,
        type: this.props.tipoBoton || "button",
        style: this.props.estilos,
        onClick: function onClick(e) {
          return _this._botonPresionado(e);
        }
      }, this.props.children);
    } else {
      return /*#__PURE__*/React$1.createElement(Fragment, null);
    }
  };

  return ABoton;
}(React$1.Component);

var Telefono = "telefono_blanco~gzxlAiPo.png";

var ATelefono = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ATelefono, _React$Component);

  function ATelefono(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = ATelefono.prototype;

  _proto.render = function render() {
    var _this = this;

    var visible = true;

    if (this.props.hasOwnProperty('visible')) {
      visible = this.props.visible;
    }

    if (visible) {
      return /*#__PURE__*/React$1.createElement("div", {
        className: 'atelefono ' + this.props.className,
        style: this.props.estilos
      }, /*#__PURE__*/React$1.createElement("div", {
        className: "atelefono-contenedor-telefono"
      }, /*#__PURE__*/React$1.createElement("img", {
        src: Telefono,
        alt: "Tel\xE9fono"
      })), /*#__PURE__*/React$1.createElement("div", {
        className: "atelefono-contenedor-datos"
      }, /*#__PURE__*/React$1.createElement("div", {
        className: "atelefono-titulo"
      }, /*#__PURE__*/React$1.createElement("div", {
        className: "atelefono-titulo-items"
      }, this.props.titulo), /*#__PURE__*/React$1.createElement(fi.FiSearch, {
        className: "atelefono-titulo-items"
      })), /*#__PURE__*/React$1.createElement("div", {
        className: 'atelefono-publicidad ' + this.props.classNamePublicidad,
        style: this.props.estilosPublicidad
      }, this.props.children), /*#__PURE__*/React$1.createElement("div", {
        className: "atelefono-botones"
      }, this.props.botones.map(function (boton, indice) {
        return /*#__PURE__*/React$1.createElement(ABoton, {
          className: 'atelefono-boton ' + _this.props.classNameABotones,
          key: indice,
          estilos: _this.props.estilosABotones
        }, boton);
      }))));
    } else {
      return /*#__PURE__*/React$1.createElement(Fragment, null);
    }
  };

  return ATelefono;
}(React$1.Component);

var ATitulosPantallas = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ATitulosPantallas, _React$Component);

  function ATitulosPantallas() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ATitulosPantallas.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React$1.createElement("div", {
      className: 'atitulospantallas ' + this.props.className,
      style: this.props.estilos
    }, /*#__PURE__*/React$1.createElement("h2", {
      className: this.props.classNameTitulo,
      style: this.props.estilosTitulo
    }, this.props.titulo), /*#__PURE__*/React$1.createElement("p", {
      className: this.props.classNameTelefono,
      style: this.props.estilosTelefono
    }, "Para asesor\xEDa llamar al tel\xE9fono: ", this.props.telefono));
  };

  return ATitulosPantallas;
}(React$1.Component);

var ATabla = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ATabla, _React$Component);

  function ATabla() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ATabla.prototype;

  _proto.render = function render() {
    var _this = this;

    var visible = true;

    if (this.props.hasOwnProperty('visible')) {
      visible = this.props.visible;
    }

    if (visible) {
      return /*#__PURE__*/React$1.createElement("div", {
        className: "atabla " + this.props.className
      }, /*#__PURE__*/React$1.createElement("table", {
        className: "atabla-tabla"
      }, /*#__PURE__*/React$1.createElement("thead", {
        className: "atabla-cabeceras"
      }, /*#__PURE__*/React$1.createElement("tr", null, this.props.encabezados.map(function (objeto, indice) {
        return /*#__PURE__*/React$1.createElement("th", {
          className: "atabla-cabecera",
          key: indice
        }, objeto);
      }))), /*#__PURE__*/React$1.createElement("tbody", {
        className: 'atabla-contenido ' + this.props.classNameDatos,
        style: this.props.estilosDatos
      }, this.props.datos.map(function (fila, indice) {
        return /*#__PURE__*/React$1.createElement("tr", {
          key: indice,
          className: "atabla-fila " + _this.props.classNameFila,
          style: _this.props.estilosFila
        }, fila.map(function (objeto, indice) {
          return /*#__PURE__*/React$1.createElement("td", {
            className: 'atabla-celda ' + _this.props.classNameCelda,
            key: indice,
            style: _this.props.estilosCelda
          }, objeto);
        }));
      }))));
    } else {
      return /*#__PURE__*/React$1.createElement(Fragment, null);
    }
  };

  return ATabla;
}(React$1.Component);

var ACheckBox = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ACheckBox, _React$Component);

  function ACheckBox(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.uuidAControl = aControl.GenerarUuidControl();
    return _this;
  }

  var _proto = ACheckBox.prototype;

  _proto._acheckbox_cambia = function _acheckbox_cambia() {
    this.props.cambioCheck(!this.props.valor);
  };

  _proto.render = function render() {
    var _this2 = this;

    var visible = true;

    if (this.props.hasOwnProperty('visible')) {
      visible = this.props.visible;
    }

    if (visible) {
      return /*#__PURE__*/React$1.createElement("label", {
        className: 'acheckbox ' + this.props.className,
        htmlFor: this.uuidAControl,
        style: this.props.estilos
      }, this.props.texto, /*#__PURE__*/React$1.createElement("input", {
        type: "checkbox",
        name: this.uuidAControl,
        id: this.uuidAControl,
        checked: this.props.valor,
        onChange: function onChange() {
          return _this2._acheckbox_cambia();
        }
      }), /*#__PURE__*/React$1.createElement("span", {
        className: "checkmark"
      }));
    } else {
      return /*#__PURE__*/React$1.createElement(Fragment, null);
    }
  };

  return ACheckBox;
}(React$1.Component);

var AArchivos = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(AArchivos, _React$Component);

  function AArchivos(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.uuidAControl = aControl.GenerarUuidControl();
    return _this;
  }

  var _proto = AArchivos.prototype;

  _proto._esArchivoValido = function _esArchivoValido(nombre_archivo) {
    var extensiones_permitidas = [".mp4", ".png", ".gif", ".jpeg", ".jpg"];

    for (var i = 0; i < extensiones_permitidas.length; i++) {
      if (nombre_archivo.toLowerCase().endsWith(extensiones_permitidas[i])) {
        return true;
      }
    }

    return false;
  };

  _proto._subieronArchivo = function _subieronArchivo(e) {
    e.preventDefault();

    if (e.target.files.length > 1) {
      Swal.fire("Advertencia", "Solo se puede subir un archivo a la vez", "warning");
    } else if (e.target.files.length > 0) {
      var archivo = e.target.files[0];

      if (this._esArchivoValido(archivo.name)) {
        this.props.subioArchivo(archivo);
      } else {
        Swal.fire("Advertencia", "El archivo no es válido", "warning");
      }
    } else {
      this.props.subioArchivo(new File([], ""));
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var visible = true;

    if (this.props.hasOwnProperty("visible")) {
      visible = this.props.visible;
    }

    if (visible) {
      return /*#__PURE__*/React$1.createElement("div", {
        className: 'aarchivos ' + this.props.className
      }, /*#__PURE__*/React$1.createElement("input", {
        type: "file",
        id: this.uuidAControl,
        name: this.uuidAControl,
        accept: "video/mp4, image/png, image/gif, image/jpeg",
        className: "aarchivos-input",
        onChange: function onChange(e) {
          return _this2._subieronArchivo(e);
        }
      }), /*#__PURE__*/React$1.createElement(AEtiqueta, {
        para: this.uuidAControl,
        className: "aarchivos-etiqueta " + this.props.classNameEtiqueta
      }, this.props.texto));
    } else {
      return /*#__PURE__*/React$1.createElement(Fragment, null);
    }
  };

  return AArchivos;
}(React$1.Component);

var AMultimedia = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(AMultimedia, _React$Component);

  function AMultimedia(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      tipoMultimedia: "imagen"
    };
    _this.uuidAControl = aControl.GenerarUuidControl();
    return _this;
  }

  var _proto = AMultimedia.prototype;

  _proto.FijarArchivo = function FijarArchivo(archivo) {
    var _this2 = this;

    if (archivo instanceof Blob) {
      this.setState({
        tipoMultimedia: "imagen"
      });
      setTimeout(function () {
        var archivoBlob = URL.createObjectURL(archivo);
        document.getElementById(_this2.uuidAControl).src = archivoBlob;
      }, 100);
    } else {
      if (archivo.name.endsWith(".mp4")) {
        this.setState({
          tipoMultimedia: "video"
        });
      } else {
        this.setState({
          tipoMultimedia: "imagen"
        });
      }

      setTimeout(function () {
        var archivoBlob = URL.createObjectURL(archivo);
        document.getElementById(_this2.uuidAControl).src = archivoBlob;
      }, 100);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React$1.createElement(Fragment, null, this.state.tipoMultimedia === "imagen" && /*#__PURE__*/React$1.createElement("img", {
      id: this.uuidAControl,
      className: 'amultimedia ' + this.className,
      style: this.props.estilos,
      alt: "Archivo multimedia."
    }), this.state.tipoMultimedia === "video" && /*#__PURE__*/React$1.createElement("video", {
      id: this.uuidAControl,
      controls: true,
      autoPlay: true,
      className: 'amultimedia ' + this.className,
      style: this.props.estilos
    }, "Este navegador no soporta una previsualizaci\xF3n del contenido multimedia."));
  };

  return AMultimedia;
}(React$1.Component);

var APanel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(APanel, _React$Component);

  function APanel(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = APanel.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React$1.createElement(Fragment, null, this.props.visible && /*#__PURE__*/React$1.createElement("div", {
      className: "apanel-fondo " + this.props.classNameFondo,
      style: {
        background: this.props.transparente ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)'
      }
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "apanel " + this.props.className
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "apanel-titulo " + this.props.classNameTitulo
    }, /*#__PURE__*/React$1.createElement("p", null, this.props.titulo)), /*#__PURE__*/React$1.createElement("div", {
      className: "apanel-contenido " + this.props.className
    }, this.props.children))));
  };

  return APanel;
}(React$1.Component);

var IconoMan = "icono_man~MTHNXxtc.png";

function ALogoCarga(props) {
  return /*#__PURE__*/React.createElement(Fragment, null, props.visible && /*#__PURE__*/React.createElement("div", {
    className: "alogocarga " + (props.className || "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "alogocarga-contenedor"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "alogocarga-imagen"
  }, /*#__PURE__*/React.createElement("img", {
    src: IconoMan,
    alt: "Logo de carga"
  })), /*#__PURE__*/React.createElement("div", {
    className: "alogocarga-texto"
  }, props.texto)))));
}

exports.AArchivos = AArchivos;
exports.ABoton = ABoton;
exports.ACajaTexto = ACajaTexto;
exports.ACheckBox = ACheckBox;
exports.AControl = aControl;
exports.AEtiqueta = AEtiqueta;
exports.AExpReg = AExpReg;
exports.ALogoCarga = ALogoCarga;
exports.AMultimedia = AMultimedia;
exports.APanel = APanel;
exports.ATabla = ATabla;
exports.ATelefono = ATelefono;
exports.ATitulosPantallas = ATitulosPantallas;
//# sourceMappingURL=index.js.map
