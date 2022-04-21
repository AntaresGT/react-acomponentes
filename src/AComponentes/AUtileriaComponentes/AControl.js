import { v4 } from 'uuid';

/**
 * Esta clase controla los nombres de los componentes
 * para que no se repiten en toda la web
 */
class AControl{
    constructor(){
        this.lista_controles = [];
    }

    GenerarUuidControl(){
        let uuidValido = false;
        let contador = 0;
        let uuid = "";
        while(!uuidValido){
            uuid = v4();
            if(!this.lista_controles.includes(uuid)){
                uuidValido = true;
                this.lista_controles.push(uuid);
                break;
            }

            contador++;

            if(contador > 500){
                uuid = v4();
                break;
            }
        }

        return uuid;
    }
};

const aControl = new AControl();
export default aControl;