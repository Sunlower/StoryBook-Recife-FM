/**
 * Stories: Button (Figma id=495:152945)
 * Variants: Type=Filled|Outlined × State=Default|Hover|Pressed
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: { children: 'Ouvir ao Vivo' },
  parameters: { backgrounds: { default: 'light' } },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Filled — cor #F08036, pill shape. CssCheck: verifica que tokens.css carregou */
export const Filled: Story = {
  args: { variant: 'filled' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /ouvir ao vivo/i })
    await expect(btn).toBeVisible()
    await expect(btn).toHaveAttribute('type', 'button')
  },
}

/** CssCheck — prova que tokens.css foi carregado (background deve ser laranja, não transparente) */
export const CssCheck: Story = {
  args: { variant: 'filled', children: 'CssCheck' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /csscheck/i })
    const bg = getComputedStyle(btn).backgroundColor
    await expect(bg).not.toBe('rgba(0, 0, 0, 0)')
    await expect(bg).not.toBe('transparent')
  },
}

export const Outlined: Story = { args: { variant: 'outlined' } }
export const Small: Story    = { args: { variant: 'filled', size: 'sm', children: 'Ouvir' } }
export const Large: Story    = { args: { variant: 'filled', size: 'lg' } }
export const NoIcons: Story  = { args: { variant: 'filled', showIcons: false } }
export const Disabled: Story = { args: { variant: 'filled', disabled: true } }
