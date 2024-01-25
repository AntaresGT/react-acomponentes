import React from 'react';
import {
    Meta
} from '@storybook/react';

import ABoton from './index';

export default {
    title: "react-acomponentes/ABoton",
    component: ABoton,
    tags: ["autodocs"]
} satisfies Meta<typeof ABoton>;

const ABotonPlantilla = (args: any) => <ABoton {...args} />;

export const ABotonClick = ABotonPlantilla.bind({});

ABotonClick.args = {
    children: "ABotón (Presioname)",
    tipoBoton: "button"
}

ABotonClick.argTypes = {
    botonPresionado: { action: "botonPresionado" }
}