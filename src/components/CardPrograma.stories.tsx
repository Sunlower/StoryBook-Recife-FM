/**
 * Stories: CardPrograma (Figma id=389:84830, 389:84845)
 * Variants: padrão (default) | ao vivo × Rest | Selected
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { CardPrograma } from './CardPrograma'

const meta = {
  component: CardPrograma,
  tags: ['ai-generated'],
  args: {
    time: '05:00',
    name: 'Bom Dia Nordeste',
    host: 'Tom Barros e Daniella de Lavôr',
  },
  parameters: { backgrounds: { default: 'light' } },
} satisfies Meta<typeof CardPrograma>

export default meta
type Story = StoryObj<typeof meta>

/** Card padrão — Rest */
export const Padrao: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Bom Dia Nordeste')).toBeVisible()
    await expect(canvas.getByText('05:00')).toBeVisible()
  },
}

/** Card padrão — Selected (fundo amarelo) */
export const PadraoSelected: Story = { args: { selected: true } }

/** Card Ao Vivo — Rest */
export const AoVivo: Story = {
  args: {
    name:   'Bafulê',
    host:   'João Inácio Jr.',
    isLive: true,
    time:   '14:00',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Ao Vivo')).toBeVisible()
    await expect(canvas.getByText('Bafulê')).toBeVisible()
  },
}

/** Card Ao Vivo — Selected */
export const AoVivoSelected: Story = {
  args: {
    name:     'Bafulê',
    host:     'João Inácio Jr.',
    isLive:   true,
    selected: true,
    time:     '14:00',
  },
}

/** Com foto de capa */
export const ComCapa: Story = {
  args: {
    coverUrl: 'https://picsum.photos/seed/nordeste/80/80',
    isLive:   true,
    time:     '05:00',
  },
}
