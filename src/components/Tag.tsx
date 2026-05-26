/**
 * Tag — Figma: "Tag" component set (id=3:2977)
 * Variants: Tipo=Ao Vivo | Tipo=Fora do Ar
 */
import './Tag.css'

export type TagType = 'ao-vivo' | 'fora-do-ar'

export interface TagProps {
  type?: TagType
  label?: string
}

const defaults: Record<TagType, string> = {
  'ao-vivo':    'Ao Vivo',
  'fora-do-ar': 'Fora do Ar',
}

export function Tag({ type = 'ao-vivo', label }: TagProps) {
  const text = label ?? defaults[type]
  return (
    <span className={`rfm-tag rfm-tag--${type}`}>
      {text}
    </span>
  )
}
