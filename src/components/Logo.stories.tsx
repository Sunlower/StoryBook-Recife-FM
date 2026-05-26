/**
 * Stories: Logo Recife FM (Figma id=9:1475)
 * Variants: Cor=Colorida|Preta|Cinza|Branca
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Logo } from './Logo'

const meta = {
  component: Logo,
  tags: ['ai-generated'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Colorida: Story = {
  args: { color: 'colorida', size: 'md' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('img', { name: /recife fm/i })).toBeVisible()
  },
}

export const Preta: Story  = { args: { color: 'preta',  size: 'md' } }
export const Cinza: Story  = { args: { color: 'cinza',  size: 'md' } }
export const Branca: Story = {
  args:       { color: 'branca', size: 'md' },
  parameters: { backgrounds: { default: 'dark' } },
}
export const Large: Story = { args: { color: 'colorida', size: 'lg' } }
export const Small: Story = { args: { color: 'colorida', size: 'sm' } }
