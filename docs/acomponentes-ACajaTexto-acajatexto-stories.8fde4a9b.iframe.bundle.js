"use strict";(self.webpackChunkreact_acomponentes=self.webpackChunkreact_acomponentes||[]).push([[631],{"./src/acomponentes/ACajaTexto/acajatexto.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ACajaTextoVisualizacion:()=>ACajaTextoVisualizacion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>acajatexto_stories});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./src/acomponentes/aconstantes.css");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),acajatexto=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/acomponentes/ACajaTexto/acajatexto.css"),options={};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ACajaTextoIconoIzquierda(props){return react.createElement("div",{className:props.className,style:props.estilos},props.icono)}function ACajaTextoTitulo(props){return react.createElement("label",{className:props.className,style:props.estilos,htmlFor:props.para},props.children)}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(acajatexto.Z,options),acajatexto.Z&&acajatexto.Z.locals&&acajatexto.Z.locals;var ACajaTexto=react.forwardRef(function ACajaTextoIntero(props,ref){var _props_className,_props_classNameTitulo,_props_classNameIconoIzquierda,_props_classNameACajaTexto,_props_tipoEntrada,_props_classNameIconoDerecha,uuid=(0,react.useId)(),inputRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,function(){return{TipoAControl:function(){return"ACajaTexto"},foco:function(){if(inputRef.current){var _inputRef_current;null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),inputRef.current.focus()}}}});var quitoFoco=function(){props.quitoFoco&&props.quitoFoco()};return react.createElement("div",{key:uuid,className:"acajatexto ".concat(null!==(_props_className=props.className)&&void 0!==_props_className?_props_className:""," ").concat(props.hasOwnProperty("visible")?props.visible?"":"acajatexto-no-visible":""),style:props.estilos},props.titulo&&react.createElement(ACajaTextoTitulo,{className:"acajatexto-titulo ".concat(null!==(_props_classNameTitulo=props.classNameTitulo)&&void 0!==_props_classNameTitulo?_props_classNameTitulo:""),estilos:props.estilosTitulo,para:uuid},props.titulo),react.createElement("div",{className:"acajatexto-contenedor-input"},props.iconoIzquierda&&react.createElement(ACajaTextoIconoIzquierda,{className:"acajatexto-icono-izquierda ".concat(null!==(_props_classNameIconoIzquierda=props.classNameIconoIzquierda)&&void 0!==_props_classNameIconoIzquierda?_props_classNameIconoIzquierda:""),estilos:props.estilosIconoIzquierda,icono:props.iconoIzquierda}),react.createElement("input",{ref:inputRef,id:uuid,name:uuid,value:props.valor,onChange:function(e){e.preventDefault(),props.cambioValor&&props.cambioValor(e.target.value)},autoFocus:props.autoFoco,style:_object_spread({width:"100%"},props.estilosACajaTexto),className:"acajatexto-input ".concat(null!==(_props_classNameACajaTexto=props.classNameACajaTexto)&&void 0!==_props_classNameACajaTexto?_props_classNameACajaTexto:""),placeholder:props.placeholder,tabIndex:props.tabIndice,disabled:!(!props.hasOwnProperty("habilitado")||props.habilitado),type:null!==(_props_tipoEntrada=props.tipoEntrada)&&void 0!==_props_tipoEntrada?_props_tipoEntrada:"text",list:void 0!=props.autoCompletado?"".concat(uuid,"-autocompletadoacajatexto"):void 0,autoComplete:"off",onBlur:function(){return quitoFoco()},onKeyDown:function(e){props.teclaPresionada&&props.teclaPresionada(e.key)}}),props.iconoDerecha&&react.createElement(ACajaTextoIconoIzquierda,{className:"acajatexto-icono-derecha ".concat(null!==(_props_classNameIconoDerecha=props.classNameIconoDerecha)&&void 0!==_props_classNameIconoDerecha?_props_classNameIconoDerecha:""),estilos:props.estilosIconoDerecha,icono:props.iconoDerecha})),props.autoCompletado&&props.autoCompletado.length>0&&react.createElement("datalist",{id:"".concat(uuid,"-autocompletadoacajatexto")},props.autoCompletado.map(function(item){return react.createElement("option",{key:"".concat(uuid,"-autocompletadoacajatexto-").concat(item),value:item})})))});try{ACajaTexto.displayName="ACajaTexto",ACajaTexto.__docgenInfo={description:"",displayName:"ACajaTexto",props:{visible:{defaultValue:null,description:"Indica si el componente es visible o no",name:"visible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"ClassName del contenedor del input",name:"className",required:!1,type:{name:"string"}},estilos:{defaultValue:null,description:"Estilos del contenedor del input",name:"estilos",required:!1,type:{name:"CSSProperties"}},classNameTitulo:{defaultValue:null,description:"ClassName del Titulo",name:"classNameTitulo",required:!1,type:{name:"string"}},estilosTitulo:{defaultValue:null,description:"Estilos del titulo",name:"estilosTitulo",required:!1,type:{name:"CSSProperties"}},titulo:{defaultValue:null,description:"Coloca un titulo arriba del input",name:"titulo",required:!1,type:{name:"string"}},valor:{defaultValue:null,description:"Es el valor del input",name:"valor",required:!1,type:{name:"string"}},cambioValor:{defaultValue:null,description:"Evento de teclear dentro del input",name:"cambioValor",required:!1,type:{name:"((texto: string) => void)"}},teclaPresionada:{defaultValue:null,description:"Evento de presionar una tecla dentro del input",name:"teclaPresionada",required:!1,type:{name:"((tecla: string) => void)"}},placeholder:{defaultValue:null,description:"Coloca un placeholder dentro del input",name:"placeholder",required:!1,type:{name:"string"}},iconoIzquierda:{defaultValue:null,description:"Coloca un icono a la izquierda del input",name:"iconoIzquierda",required:!1,type:{name:"Element"}},classNameIconoIzquierda:{defaultValue:null,description:"ClassName IconoIzquierda",name:"classNameIconoIzquierda",required:!1,type:{name:"string"}},estilosIconoIzquierda:{defaultValue:null,description:"Estilos IconoIzquierda",name:"estilosIconoIzquierda",required:!1,type:{name:"CSSProperties"}},iconoDerecha:{defaultValue:null,description:"Coloca un icono a la derecha del input",name:"iconoDerecha",required:!1,type:{name:"Element"}},classNameIconoDerecha:{defaultValue:null,description:"ClassName IconoDerecha",name:"classNameIconoDerecha",required:!1,type:{name:"string"}},estilosIconoDerecha:{defaultValue:null,description:"Estilos IconoDerecha",name:"estilosIconoDerecha",required:!1,type:{name:"CSSProperties"}},tabIndice:{defaultValue:null,description:"Tab Index del input",name:"tabIndice",required:!1,type:{name:"number"}},classNameACajaTexto:{defaultValue:null,description:"Clase del CSS",name:"classNameACajaTexto",required:!1,type:{name:"string"}},estilosACajaTexto:{defaultValue:null,description:"Estilos del input",name:"estilosACajaTexto",required:!1,type:{name:"CSSProperties"}},habilitado:{defaultValue:null,description:"Indica si el componente esta habilitado o no",name:"habilitado",required:!1,type:{name:"boolean"}},tipoEntrada:{defaultValue:null,description:"Tipo de entrada del ACajaTexto",name:"tipoEntrada",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"color"'},{value:'"text"'},{value:'"password"'},{value:'"email"'},{value:'"tel"'},{value:'"url"'},{value:'"date"'},{value:'"time"'},{value:'"datetime-local"'},{value:'"month"'},{value:'"week"'}]}},autoCompletado:{defaultValue:null,description:"Lista de autocompletado",name:"autoCompletado",required:!1,type:{name:"string[]"}},autoFoco:{defaultValue:null,description:"Autofocus",name:"autoFoco",required:!1,type:{name:"boolean"}},quitoFoco:{defaultValue:null,description:"Evento que se ejecuta cuando quitaron el focus",name:"quitoFoco",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/acomponentes/ACajaTexto/index.tsx#ACajaTexto"]={docgenInfo:ACajaTexto.__docgenInfo,name:"ACajaTexto",path:"src/acomponentes/ACajaTexto/index.tsx#ACajaTexto"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function acajatexto_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function acajatexto_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){acajatexto_stories_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let acajatexto_stories={title:"react-acomponentes/ACajaTexto",component:ACajaTexto,tags:["autodocs"]};for(var ACajaTextoVisualizacion=(function(args){var _useState=_sliced_to_array((0,react.useState)(""),2),valorActual=_useState[0],fijarValorActual=_useState[1];return react.createElement(ACajaTexto,_object_spread_props(acajatexto_stories_object_spread({},args),{valor:valorActual,cambioTexto:fijarValorActual}))}).bind({}),listado_opciones=[],i=0;i<101;i++)listado_opciones.push("Opción ".concat(i));ACajaTextoVisualizacion.args={titulo:"Titulo del ACajaTexto",placeholder:"Placeholder del ACajaTexto",iconoIzquierda:react.createElement(index_esm.uOf,{size:20}),estilos:{width:"300px"},autoCompletado:listado_opciones},ACajaTextoVisualizacion.argTypes={cambioTexto:{action:"cambioTexto"},quitoFoco:{action:"quitoFoco"}},ACajaTextoVisualizacion.parameters={...ACajaTextoVisualizacion.parameters,docs:{...ACajaTextoVisualizacion.parameters?.docs,source:{originalSource:'(args: Object) => {\n  const [valorActual, fijarValorActual] = useState<string>("");\n  return <ACajaTexto {...args} valor={valorActual} cambioTexto={fijarValorActual} />;\n}',...ACajaTextoVisualizacion.parameters?.docs?.source}}};let __namedExportsOrder=["ACajaTextoVisualizacion"];try{ACajaTextoVisualizacion.displayName="ACajaTextoVisualizacion",ACajaTextoVisualizacion.__docgenInfo={description:"",displayName:"ACajaTextoVisualizacion",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/acomponentes/ACajaTexto/acajatexto.stories.tsx#ACajaTextoVisualizacion"]={docgenInfo:ACajaTextoVisualizacion.__docgenInfo,name:"ACajaTextoVisualizacion",path:"src/acomponentes/ACajaTexto/acajatexto.stories.tsx#ACajaTextoVisualizacion"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/acomponentes/ACajaTexto/acajatexto.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.acajatexto{
    display: flex;
    flex-direction: column;
}

.acajatexto-titulo{
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.acajatexto-no-visible{
    display: none;
}

.acajatexto-contenedor-input{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.acajatexto-contenedor-input:focus-within{
    border: 1px solid var(--primario-acajatexto-borde);
    box-shadow: 0 0 0 0.2px var(--primario-acajatexto-borde);
    transition: all 0.3s ease;
}

.acajatexto-icono-izquierda{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}

.acajatexto-input{
    flex: 1;
    border: none;
    padding: 0.5rem;
    font-size: 15px;
    font-weight: 500;
    outline: none;
}

.acajatexto-icono-derecha{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}`,"",{version:3,sources:["webpack://./src/acomponentes/ACajaTexto/acajatexto.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,kDAAkD;IAClD,wDAAwD;IACxD,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB",sourcesContent:[".acajatexto{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.acajatexto-titulo{\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.acajatexto-no-visible{\r\n    display: none;\r\n}\r\n\r\n.acajatexto-contenedor-input{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    border: 1px solid #ccc;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.acajatexto-contenedor-input:focus-within{\r\n    border: 1px solid var(--primario-acajatexto-borde);\r\n    box-shadow: 0 0 0 0.2px var(--primario-acajatexto-borde);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.acajatexto-icono-izquierda{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.acajatexto-input{\r\n    flex: 1;\r\n    border: none;\r\n    padding: 0.5rem;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    outline: none;\r\n}\r\n\r\n.acajatexto-icono-derecha{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0.5rem;\r\n}"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/acomponentes/aconstantes.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`:root{
    --primario-acajatexto-borde: #16748D;

    /** Colores de ABoton */
    --azul-aboton-fondo: #0D546C;
    --azul-aboton-fondo-hover: #1782a6;
    --azul-aboton-fondo-active: #0D546C;
    --azul-aboton-fondo-desactivado: #0278a0;
    --azul-aboton-texto-desactivado: #b3e0f2;
    --rojo-aboton-fondo: #e80b0b;
    --rojo-aboton-fondo-hover: #C62828;
    --rojo-aboton-fondo-active: #e80b0b;
    --rojo-aboton-texto-desactivado: #f2b3b3;
    --verde-aboton-fondo: #198754;
    --verde-aboton-fondo-active: #198754;
    --verde-aboton-fondo-hover: #28a745;
    --verde-aboton-texto-desactivado: #b3f2b3;
    --celeste-aboton-fondo: #1F94AF;
    --celeste-aboton-fondo-active: #1F94AF;
    --celeste-aboton-fondo-hover: #27b7d7;
    --celeste-aboton-texto-desactivado: #72e0f9;
    /** Colores de ABoton */
}`,"",{version:3,sources:["webpack://./src/acomponentes/aconstantes.css"],names:[],mappings:"AAAA;IACI,oCAAoC;;IAEpC,uBAAuB;IACvB,4BAA4B;IAC5B,kCAAkC;IAClC,mCAAmC;IACnC,wCAAwC;IACxC,wCAAwC;IACxC,4BAA4B;IAC5B,kCAAkC;IAClC,mCAAmC;IACnC,wCAAwC;IACxC,6BAA6B;IAC7B,oCAAoC;IACpC,mCAAmC;IACnC,yCAAyC;IACzC,+BAA+B;IAC/B,sCAAsC;IACtC,qCAAqC;IACrC,2CAA2C;IAC3C,uBAAuB;AAC3B",sourcesContent:[":root{\r\n    --primario-acajatexto-borde: #16748D;\r\n\r\n    /** Colores de ABoton */\r\n    --azul-aboton-fondo: #0D546C;\r\n    --azul-aboton-fondo-hover: #1782a6;\r\n    --azul-aboton-fondo-active: #0D546C;\r\n    --azul-aboton-fondo-desactivado: #0278a0;\r\n    --azul-aboton-texto-desactivado: #b3e0f2;\r\n    --rojo-aboton-fondo: #e80b0b;\r\n    --rojo-aboton-fondo-hover: #C62828;\r\n    --rojo-aboton-fondo-active: #e80b0b;\r\n    --rojo-aboton-texto-desactivado: #f2b3b3;\r\n    --verde-aboton-fondo: #198754;\r\n    --verde-aboton-fondo-active: #198754;\r\n    --verde-aboton-fondo-hover: #28a745;\r\n    --verde-aboton-texto-desactivado: #b3f2b3;\r\n    --celeste-aboton-fondo: #1F94AF;\r\n    --celeste-aboton-fondo-active: #1F94AF;\r\n    --celeste-aboton-fondo-hover: #27b7d7;\r\n    --celeste-aboton-texto-desactivado: #72e0f9;\r\n    /** Colores de ABoton */\r\n}"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/acomponentes/aconstantes.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aconstantes_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/acomponentes/aconstantes.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default(),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aconstantes_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aconstantes_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aconstantes_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aconstantes_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);
//# sourceMappingURL=acomponentes-ACajaTexto-acajatexto-stories.8fde4a9b.iframe.bundle.js.map