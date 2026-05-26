/**
 * Stories: Tag (Figma id=3:2977)
 * Variants: Tipo=Ao Vivo | Fora do Ar
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Tag } from './Tag'

const meta = {
  component: Tag,
  tags: ['ai-generated'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const AoVivo: Story = {
  args: { type: 'ao-vivo' },
  play: async ({ canvas }) => {
    const tag = canvas.getByText('Ao Vivo')
    await expect(tag).toBeVisible()
  },
}

export const ForaDoAr: Story = {
  args: { type: 'fora-do-ar' },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Fora do Ar')).toBeVisible()
  },
}

export const CustomLabel: Story = {
  args: { type: 'ao-vivo', label: 'Especial' },
}
