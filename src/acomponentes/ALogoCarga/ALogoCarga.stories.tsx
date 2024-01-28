import React from 'react';
import {
    Meta
} from '@storybook/react';

import ALogoCarga from './index';

export default {
    title: "react-acomponentes/ALogoCarga",
    component: ALogoCarga,
    tags: ["autodocs"]
} satisfies Meta<typeof ALogoCarga>;

const ALogoCargaPlantilla = (args: any) => <ALogoCarga {...args} />;

export const ALogoCargaVisualizacion = ALogoCargaPlantilla.bind({});

ALogoCargaVisualizacion.args = {
    texto: "Cargando...",
    visible: true
}