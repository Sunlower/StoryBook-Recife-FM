/**
 * Stories: Header (Figma id=167:25401)
 * Variants: Background=Desktop | Background=Mobile
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Header } from './Header'

const meta = {
  component: Header,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'light' } },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {
  args: { variant: 'desktop', activeHref: '/' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('banner')).toBeVisible()
    await expect(canvas.getByRole('navigation', { name: /menu principal/i })).toBeVisible()
    const inicio = canvas.getByRole('link', { name: /início/i })
    await expect(inicio).toHaveAttribute('aria-current', 'page')
  },
}

export const DesktopProgramacao: Story = {
  args: { variant: 'desktop', activeHref: '/programacao' },
}

export const Mobile: Story = {
  args: { variant: 'mobile' },
  play: async ({ canvas }) => {
    const burger = canvas.getByRole('button', { name: /abrir menu/i })
    await expect(burger).toBeVisible()
  },
}
