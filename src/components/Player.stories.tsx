/**
 * Stories: Player (Figma id=3:2194)
 * Variants: Dispositivo=Desktop|Mobile × Estado=Default|Loading|Fora do Ar|Skeleton
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Player } from './Player'

const meta = {
  component: Player,
  tags: ['ai-generated'],
  args: {
    trackTitle: 'Lembrei de Nós',
    artist:     'João Gomes',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 700, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Player>

export default meta
type Story = StoryObj<typeof meta>

/** Desktop Default — testa play/pause interaction */
export const DesktopDefault: Story = {
  args: { device: 'desktop', status: 'default' },
  play: async ({ canvas, userEvent }) => {
    const playBtn = canvas.getByRole('button', { name: /tocar/i })
    await expect(playBtn).toBeVisible()
    await userEvent.click(playBtn)
    await expect(canvas.getByRole('button', { name: /pausar/i })).toBeVisible()
  },
}

export const DesktopLoading: Story = {
  args: { device: 'desktop', status: 'loading' },
}

export const DesktopForaDoAr: Story = {
  args: { device: 'desktop', status: 'fora-do-ar' },
}

export const DesktopSkeleton: Story = {
  args: { device: 'desktop', status: 'skeleton' },
}

/** Mobile Default */
export const MobileDefault: Story = {
  args: { device: 'mobile', status: 'default' },
}

export const MobileLoading: Story = {
  args: { device: 'mobile', status: 'loading' },
}

export const WithCover: Story = {
  args: {
    device:    'desktop',
    status:    'default',
    coverUrl:  'https://picsum.photos/seed/joaogomes/40/40',
  },
}
