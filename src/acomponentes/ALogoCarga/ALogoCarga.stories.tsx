import type { Meta, StoryObj } from '@storybook/react';

import ALogoCarga from './index';

const meta = {
    title: "react-acomponentes/ALogoCarga",
    component: ALogoCarga,
    tags: ["autodocs"]
} satisfies Meta<typeof ALogoCarga>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ALogoCargaVisualizacion: Story =  {
    args: {
        texto: "Cargando...",
        visible: true
    }
}